
import React, { useState } from "react"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from "axios";

async function loginUser(credentials) {
    return axios('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => {
            console.log('data', data)
            return data.data
        })
}

function BasicExample({ setToken }) {
    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = (data) => {
        // setAuthMode(authMode === "signin" ? "signup" : "signin")
        console.log('data', data)
        setAuthMode(data)
    }

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    if (authMode === "signin") {
        return (
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col lg={6}>
                        <Form onSubmit={handleSubmit}>
                            <h3>Sign In</h3>

                            {/*     <Row className="text-center" column="lg" lg={2}>
                                Not registered yet?{" "}
                                <div className="link-primary" onClick={changeAuthMode}>
                                    Sign Up
                                </div>
                            </Row> */}
                            <div className="text-center">
                                Not registered yet?{" "}
                                <span className="link-primary" onClick={() => changeAuthMode('signup')}>
                                    Sign Up
                                </span>
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={e => setUserName(e.target.value)} type="email" placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="d-grid gap-2 mt-3" controlId="submit">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>

                            <p className="text-center mt-2">
                                Forgot  <span className="link-primary" onClick={() => changeAuthMode('forgot')}>
                                    password?
                                </span>
                                <a href="#"></a>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

    else if (authMode === "forgot") {
        return (
            <Container>
                <Row h-100 className="justify-content-md-center">
                    <Col lg={6}>
                        <Form>
                            <h3>Forgot</h3>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="d-grid gap-2 mt-3" controlId="submit">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>


                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
    else {
        return (
            <Container>
                <Row h-100 className="justify-content-md-center">
                    <Col lg={6}>

                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="text-center">
                            Already registered?{" "}
                            <span className="link-primary" onClick={() => changeAuthMode('signin')}>
                                Sign In
                            </span>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="d-grid gap-2 mt-3" controlId="submit">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form.Group>

                        <p className="text-center mt-2">
                            Forgot  <span className="link-primary" onClick={() => changeAuthMode('forgot')}>
                                password?
                            </span>
                            <a href="#"></a>
                        </p>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BasicExample;