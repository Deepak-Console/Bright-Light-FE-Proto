import React from 'react';
import Select from 'react-select';

import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Table from 'react-bootstrap/Table';

import DialogPrompt from '../Component/Confirmation'

import Alert from 'react-bootstrap/Alert';

import AlertPrompt from '../Component/Alert'

import Spinner from 'react-bootstrap/Spinner';


import { getLogGroup, getQueryDefinitions, setUpCronJob, getCronJob } from '../helper'

function App() {

    let [logGroupName, setLogGroupName] = useState([])
    let [queryName, setQueryName] = useState([])

    let [selectedGroup, setSelectedGroup] = useState({})
    let [selectedQuery, setSelectedQuery] = useState({})

    let [showAlert, setShowAlert] = useState(false)

    let [cronDetails, setCronDetails] = useState([])

    let [isSpinner, setSpinner] = useState(false)

    let [intervels, setIntervels] = useState([
        { label: 'Quick Run', values: 'Quick Run', type: 'quick' },
        { label: 'Every Minute', values: 'Every Minute', type: 'intervels' },
        { label: 'Every 5 Minute', values: 'Every 5 Minute', type: 'intervels' },
        { label: 'Every Hour', values: 'Every Hour', type: 'intervels' },
        { label: 'Every Day', values: 'Every Day', type: 'intervels' },
        { label: 'Every Week', values: 'Every Week', type: 'intervels' },
        { label: 'Every Month', values: 'Every Month', type: 'intervels' }
    ])
    let [selectedIntervel, setSelectedIntervel] = useState('')

    let [dialogPromptContent, setDialogPromptContent] = useState({ head: "Schedule Job", body: "Do you want to schedule a new job?" })

    //  let submitDialogDetails = { head: "Schedule Job", body: "Do you want to schedule a new job?" }

    useEffect(() => {
        setSpinner(true)
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
            setSpinner(false)
        })

        /*    getCronJob().then(function (res) {
               console.log('resdetails', res)
               setCronDetails(res.body.Items)
           })
    */
    }, []);


    const handleSelecQuery = (opt) => {
        console.log('handleSelecQuery', opt)

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
            interval: selectedIntervel.values,
            logGroupNames: logGroupNames /* || selectedQuery.logGroupNames */,
            queryName: selectedQuery.name,
            type: selectedIntervel.type,
        }
        console.log('params', params)
        let status = await setUpCronJob(params)
        console.log('status', status)
        if (status.statusCode == 201) {
            alert('Job Created Successfully')
            setDialogPromptContent({ head: "Schedule Job", body: "Schedule job creation done Successfully", buttons: false })
        }

    };

    /* const handleChange = (event) => {
        console.log('handleChange', event.target.name)
        
        setSelectUser((prevForm) => ({
          ...prevForm,
          [event.target.name]: event.target.value
        }));
      } */

    const handleDialogSubmit = () => {
        console.log('handleDialogSubmit--------')
    }


    return (
        <>
            <Container style={{ marginBottom: "16px" }}>
                {isSpinner ? <Spinner className="align-items-center justify-content-center" animation="border" /> : ""}
            </Container>
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
                            <Col style={{ minHeight: "400px" }} className="border border-2 mx-auto" lg={8}>
                                <Row className="m-3">
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
                                                <Form.Control style={{ minHeight: "180px" }} as="textarea" name="query" readOnly value={selectedQuery.queryString} placeholder="Query String" />
                                            </Form.Group>
                                        </Col >
                                    </Row>
                                </Row>
                            </Col>
                            <Col style={{ minHeight: "400px" }} className="border border-2 my-auto" lg={3}>
                                <Row className="m-3">
                                    <Row>
                                        <Row className="align-items-center justify-content-center">
                                            <h3>Create Jobs</h3>
                                        </Row>
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
                                            <DialogPrompt handleDialogSubmit={(e) => handleSubmit(e)} submitDialogDetails={dialogPromptContent} >Submit</DialogPrompt>
                                            {/*  {showAlert ? <AlertPrompt /> : ""} */}
                                            {/* <DialogPrompt submitDialogDetails={dialogPromptContent} >Submit</DialogPrompt> */}
                                        </Form.Group>
                                    </Row>
                                </Row>
                            </Col>
                        </Row>
                    </Container> : ''}
            </>
        </>
    );
}

export default App;