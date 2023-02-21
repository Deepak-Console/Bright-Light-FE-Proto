import React from 'react';
import Select from 'react-select';

import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Table from 'react-bootstrap/Table';

import { getLogGroup, getQueryDefinitions, setUpCronJob, getCronJob } from '../helper'

function App() {

    let [logGroupName, setLogGroupName] = useState([])
    let [queryName, setQueryName] = useState([])

    let [selectedGroup, setSelectedGroup] = useState({})
    let [selectedQuery, setSelectedQuery] = useState({})


    let [cronDetails, setCronDetails] = useState([])

    let [intervels, setIntervels] = useState([
        { label: 'Quick Run', values: 'Quick Run', type: 'quick' },
        { label: 'Every Hour', values: 'Every Hour', type: 'intervels' },
        { label: 'Every Day', values: 'Every Day', type: 'intervels' },
        { label: 'Every Week', values: 'Every Week', type: 'intervels' },
        { label: 'Every Month', values: 'Every Month', type: 'intervels' }
    ])
    let [selectedIntervel, setSelectedIntervel] = useState('')

    useEffect(() => {
        getLogGroup().then(function (logGroupNameAPI) {

            let APIValue = logGroupNameAPI.logGroups
            for (let i = 0; i < APIValue.length; i++) {
                APIValue[i]['label'] = APIValue[i].logGroupName
                APIValue[i]['value'] = APIValue[i].logGroupName
            }
            setLogGroupName(APIValue)
        })

        getQueryDefinitions().then(function (logGroupNameAPI) {

            let APIValue = logGroupNameAPI.queryDefinitions
            for (let i = 0; i < APIValue.length; i++) {
                APIValue[i]['label'] = APIValue[i]['name']
                APIValue[i]['value'] = APIValue[i]['name']
            }
            setQueryName(APIValue)
        })

        getCronJob().then(function (res) {
            console.log('resdetails', res)
            setCronDetails(res.body.Items)
        })

    }, []);

    /*   const handleSelectGroup = (opt) => {
          console.log('handleSelect', opt)
          setSelectedGroup(opt)
  
          console.log('selectedGroup', selectedGroup)
      } */

    const handleSelecQuery = (opt) => {
        console.log('handleSelecQuery', opt)

        /*  let groups = Array.isArray(opt.logGroupNames) ? opt.logGroupNames.map((val) => {
             return { label: val, value: val }
         }) : [] */

        let APIValue = opt.logGroupNames
        let customLogGroups = []
        for (let i = 0; i < APIValue.length; i++) {
            for (let j = 0; j < logGroupName.length; j++) {
                if (logGroupName[j].label == APIValue[i]) {
                    customLogGroups.push(logGroupName[j])
                }
            }
        }
        opt.customLogGroups = customLogGroups
        setSelectedQuery(opt)

        setSelectedGroup(customLogGroups)


        /*   setSelectedGroup((prevForm) => ({
              ...prevForm,
              'groups': groups
            }));
   */
        console.log('selectedQuery', selectedQuery)
    }

    const onChangeGroup = (opt) => {
        console.log('handleSelect', opt)
        setSelectedGroup(opt)

        console.log('selectedGroup', selectedGroup)
    };

    const onChangeInterval = (opt) => {
        console.log('handleSelect', opt)
        setSelectedIntervel(opt)

        console.log('selectedIntervel', selectedIntervel)
    };

    const handleSubmit = async () => {

        let logGroupNames = selectedGroup.map((items) => {
            return items.logGroupName
        })

        let params = {
            uid: '000002',
            interval: selectedIntervel.values,
            logGroupNames: logGroupNames /* || selectedQuery.logGroupNames */,
            queryName: selectedQuery.name,
            type: selectedIntervel.type,
        }
        console.log('params', params)
        let status = await setUpCronJob(params)

        console.log('status', status)
    };

    /* const handleChange = (event) => {
        console.log('handleChange', event.target.name)
        
        setSelectUser((prevForm) => ({
          ...prevForm,
          [event.target.name]: event.target.value
        }));
      } */

    return (
        <>
            <Container style={{ marginBottom: "16px" }}>
                <Row className="align-items-center justify-content-center">
                    <Col lg={2}><h5>Query Search:</h5></Col>
                    <Col lg={6}>
                        <Select
                            options={queryName}
                            onChange={opt => handleSelecQuery(opt)}
                            maxMenuHeight={150}
                            name="1"
                        />
                    </Col>
                </Row>
            </Container >
            {selectedQuery.name ?
                <Container>
                    <Row>
                        <Col lg={8}>
                            <Row className="align-items-center justify-content-center">
                                <h2>Query Info</h2>
                            </Row>
                            <Row className="align-items-center">
                                <Col lg={6}>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Query Name</Form.Label>
                                        <Form.Control type="text" name="name" value={selectedQuery.name} readOnly placeholder="Enter Name" />
                                    </Form.Group>
                                </Col>

                                <Col lg={6}>
                                    <Form.Group controlId="formBasicGroup">
                                        <Form.Label>Groups</Form.Label>
                                        {console.log('render', selectedQuery.logGroupNames)}
                                        <Select
                                            isMulti
                                            defaultValue={selectedQuery.customLogGroups}
                                            options={logGroupName}
                                            onChange={opt => onChangeGroup(opt)}
                                            /*  styles={customStyles} */
                                            maxMenuHeight={150}
                                            name="2"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col lg={12}>
                                    <Form.Group controlId="formBasicAddress">
                                        <Form.Label>Query String</Form.Label>
                                        <Form.Control as="textarea" name="query" readOnly value={selectedQuery.queryString} placeholder="Query String" />
                                    </Form.Group>
                                </Col >
                            </Row>
                        </Col>
                        <Col lg={4}>
                            <Row>
                                <Form.Group controlId="formBasicGroup">
                                    <Form.Label>Groups</Form.Label>
                                    {console.log('render', selectedQuery.logGroupNames)}
                                    <Select
                                        options={intervels}
                                        onChange={opt => onChangeInterval(opt)}
                                        maxMenuHeight={150}
                                        name="2"
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="d-grid gap-2 mt-3" controlId="submit">
                                    <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)} >
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Row>
                        </Col>
                    </Row>
                </Container> : ''}

            {cronDetails.length ?
                <Container style={{ marginBottom: "16px" }}>
                    <Row className="align-items-center justify-content-center">
                        <h5>Running Automation Details:</h5>
                    </Row>



                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                {Object.keys(cronDetails[0]).map((val) => {
                                    return <th>{val}</th>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {cronDetails.map((row, index) => {
                                return <tr key={index}>
                                    {Object.keys(cronDetails[0]).map((key, index) => {
                                        return <td key={row[key]}>{row[key]}</td>
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