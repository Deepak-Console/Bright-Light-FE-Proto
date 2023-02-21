import React from 'react';
import Select from 'react-select';

import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

import Spinner from 'react-bootstrap/Spinner';

import { getCronJob, deleteCronJob } from '../helper'

import DialogPrompt from '../Component/Confirmation'


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

    let [isSpinner, setSpinner] = useState(false)

    let [dialogPromptContent, setDialogPromptContent] = useState({ head: "Delete Job", body: "Do you want to Delete job?" })


    useEffect(() => {
        setSpinner(true)
        getCronJob().then(function (res) {
            console.log('resdetails', res)
            let tableData = res.body.Items.map((item) => {
                item['action'] = <DialogPrompt handleDialogSubmit={() => handleDelete(item)} submitDialogDetails={dialogPromptContent} >Delete</DialogPrompt>
                return item
            })
            // setCronDetails(res.body.Items)
            setCronDetails(tableData)
            setSpinner(false)

        })

    }, []);


    const handleDelete = async (opt) => {
        console.log('opt delete', opt)
        console.log('cronDetails', cronDetails)
        let params = {
            uid: opt.uid
        }

        await deleteCronJob(params)
        //   console.log('cronDetails', cronDetails)
        /*  let newData = cronDetails.filter((crons) => {
             return opt.uid != crons.uid
         })
 
         console.log('newData', newData)
         if (newData.length) {
             setCronDetails(newData)
         } */

    };


    return (
        <>
            {cronDetails.length ?
                <Container className="m-auto">
                    <Row className="align-items-center pb-2 justify-content-center">
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

                            {
                                isSpinner ? <Spinner className="align-items-center justify-content-center" animation="border" /> :

                                    cronDetails.map((row, index) => {
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
                                                        return <td key={row[key]}>{row[key]}</td>
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