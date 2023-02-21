import React from 'react';
import Select from 'react-select';

import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

import { getCronJob, deleteCronJob } from '../helper'

const tableHead = {
    queryName: "Query Name",
    interval: "Interval",
    uid: "ID",
    logGroupNames: "Group Names",
    type: "Type",
    action: "Action"
}

function App() {


    let [cronDetails, setCronDetails] = useState([])

    useEffect(() => {

        getCronJob().then(function (res) {
            console.log('resdetails', res)
            let tableData = res.body.Items.map((item) => {
                item['action'] = <Button variant="danger">Delete</Button>
                return item
            })
            // setCronDetails(res.body.Items)
            setCronDetails(tableData)

        })

    }, []);


    const handleDelete = async (opt) => {
        console.log('opt delete', opt)

        let params = {
            uid: opt.uid
        }

        await deleteCronJob(params)

        //setCronDetails([])
    };


    return (
        <>
            {cronDetails.length ?
                <Container className="m-auto">
                    <Row className="align-items-center pb-2 justify-content-center row">
                        <h5>Running Automation Details:</h5>
                    </Row>



                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                {Object.keys(cronDetails[0]).map((val, i) => {
                                    if (i == 0) {
                                        return <><th>S.no</th><th>{tableHead[val]}</th></>
                                    } else {
                                        return <th>{tableHead[val]}</th>
                                    }

                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {cronDetails.map((row, index) => {
                                return <tr key={index}  >
                                    {Object.keys(cronDetails[0]).map((key, i) => {
                                        let jobs = Object.keys(cronDetails[0])

                                        if (Array.isArray(row[key])) {
                                            row[key] = row[key].join(', ')
                                        }
                                        if (i == 0) {
                                            return <><td>{index + 1}</td><td key={row[key]}>{row[key]}</td></>
                                        } else {
                                            if (jobs.length == i + 1) {
                                                return <td key={row[key]} onClick={() => handleDelete(row)}>{row[key]}</td>
                                            } else {
                                                return <td key={row[key]}>{row[key]}</td>
                                            }
                                        }

                                    })}
                                </tr>;
                            })}

                        </tbody>
                    </Table>

                </Container > : ""}
        </>
    );
}

export default App;