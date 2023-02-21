import React from 'react';
import Select from 'react-select';

import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';

import { getLogGroup, getQueryDefinitions } from '../helper'

function App() {

    let [logGroupName, setLogGroupName] = useState([])
    let [queryName, setQueryName] = useState([])

    let [selectedGroup, setSelectedGroup] = useState('')
    let [selectedQuery, setSelectedQuery] = useState('')

    useEffect(async () => {
        getLogGroup().then(function (logGroupNameAPI) {

            let data = []
            let APIValue = logGroupNameAPI.logGroups
            for (let i = 0; i < APIValue.length; i++) {
                data.push({ label: [APIValue[i].logGroupName], value: [APIValue[i].logGroupName] })
            }

            setLogGroupName(data)
        })

        getQueryDefinitions().then(function (logGroupNameAPI) {

            //  let data = []
            let APIValue = logGroupNameAPI.queryDefinitions
            for (let i = 0; i < APIValue.length; i++) {
                APIValue[i]['label'] = APIValue[i]['name']
                APIValue[i]['value'] = APIValue[i]['name']
                //  data.push({ label: [APIValue[i].logGroupName], value: [APIValue[i].logGroupName] })
            }

            setQueryName(APIValue)
        })

    }, []);

    const handleSelectGroup = (opt) => {
        console.log('handleSelect', opt)
        setSelectedGroup(opt)

        console.log('selectedGroup', selectedGroup)
    }

    const handleSelecQuery = (opt) => {
        console.log('handleSelecQuery', opt)
        setSelectedQuery(opt)

        console.log('selectedQuery', selectedQuery)
    }

    const onChangeGroup = (value) => {
        console.log('onchange', value)
        setSelectUser((prevForm) => ({
            ...prevForm,
            groups: value.groups
        }));
    };
    return (
        <>
            <Container style={{ marginBottom: "16px" }}>
                <Row className="align-items-center justify-content-center">
                    <Col lg={2}><h5>Log Groups Search:</h5></Col>
                    <Col lg={6}>
                        <Select
                            options={logGroupName}
                            onChange={opt => handleSelectGroup(opt)}
                            maxMenuHeight={150}
                            name="1"
                        />
                    </Col>
                </Row>
            </Container >

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
            {selectedQuery.length ? <Container>
                <Row className="align-items-center justify-content-center">
                    <h2>Query Info</h2>
                </Row>
                <Row className="align-items-center">
                    <Col lg={4}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Query Name</Form.Label>
                            <Form.Control type="text" name="name" value={selectedQuery.name} onChange={(e) => handleChange(e)} placeholder="Enter Name" />
                        </Form.Group>
                    </Col>

                    <Col lg={4}>
                        <Form.Group controlId="formBasicGroup">
                            <Form.Label>Groups</Form.Label>
                            {console.log('render', selectedQuery.logGroupNames)}
                            <Select
                                isMulti
                                defaultValue={selectUser.logGroupNames}
                                options={logGroupName}
                                onChange={opt => onChangeGroup(opt)}
                                /*  styles={customStyles} */
                                maxMenuHeight={150}
                                name="2"
                            />


                            {/*   <Form.Control type="text" name="groups" value={selectUser.groups} onChange={(e) => handleChange(e)} placeholder="Enter Groups" /> */}
                        </Form.Group>
                    </Col>



                </Row>
                <Row className="align-items-center">
                    <Col lg={8}>
                        <Form.Group controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" name="address" value={selectUser.address} onChange={(e) => handleChange(e)} placeholder="Address" />
                        </Form.Group>

                        <Form.Group className="d-grid gap-2 mt-3" controlId="submit">
                            <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)} >
                                Submit
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Container> : ''}

        </>
    );
}

export default App;