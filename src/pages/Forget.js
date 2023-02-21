
import React, { useState } from "react"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample(props) {
    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = (data) => {
        // setAuthMode(authMode === "signin" ? "signup" : "signin")
        console.log('data', data)
        setAuthMode(data)
    }

    if (authMode === "signin") {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={6}>
                        <Form>
                            <h3>Sign In</h3>

                            {/*     <Row className="text-center" column="lg" lg={2}>
                                Not registered yet?{" "}
                                <div className="link-primary" onClick={changeAuthMode}>
                                    Sign Up
                                </div>
                            </Row> */}
                            <div className="text-center">
                                Not registered yet?{" "}
                                <span className="link-primary" onClick={changeAuthMode('')}>
                                    Sign Up
                                </span>
                            </div>
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
                                Forgot <a href="#">password?</a>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

    if (authMode === "forgot") {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={6}>
                        <Form>
                            <h3>forgot</h3>

                            {/*     <Row className="text-center" column="lg" lg={2}>
                                Not registered yet?{" "}
                                <div className="link-primary" onClick={changeAuthMode}>
                                    Sign Up
                                </div>
                            </Row> */}
                            <div className="text-center">
                                Not registered yet?{" "}
                                <span className="link-primary" onClick={changeAuthMode('signup')}>
                                    Sign Up
                                </span>
                            </div>
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

                            <p onClick={changeAuthMode('forgot')} className="text-center mt-2">
                                Forgot <a href="#">password?</a>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={6}>

                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="text-center">
                            Already registered?{" "}
                            <span className="link-primary" onClick={changeAuthMode('signin')}>
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

                        <p onClick={changeAuthMode('forgot')} className="text-center mt-2">
                            Forgot <a href="#">password?</a>
                        </p>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BasicExample;