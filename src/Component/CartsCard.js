import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import ProductJson from '../mock/Products.json'

import React, { useState, useEffect } from "react";

const Counter = ({ value = 0, onIncrement, onDecrement }) => {

    return (
        <>
            {/*  <Col xs={1}><button className="actBtn" onClick={onDecrement} variant="outline-dark">–</button></Col>
            <Col xs={2}>
              
                <div className="cartVal">
                    <input class="cartValEntry" type="number" value={value}></input>
                </div>
            </Col>
            <Col xs={1}><button className="actBtn" onClick={onIncrement} variant="outline-dark">+</button></Col> */}
            {/*  <Col xs={1}></Col> */}

            <Col ><Button style={{ borderRadius: "50%" }} onClick={onDecrement} variant="outline-dark">–</Button></Col>
            <Col style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <InputGroup className="align-items-center" style={{ width: "48px", textAlign: "center", border: "black solid 1px", borderRadius: "0.375rem" }}>
                    <Form.Control
                        type="number"
                        value={value}
                    />
                </InputGroup>
                {/*   <div className="cartVal">
                    <input class="cartValEntry" type="number" value={value}></input>
                </div> */}
            </Col>
            <Col ><Button style={{ borderRadius: "50%" }} onClick={onIncrement} variant="outline-dark">+</Button></Col>
        </>
    );
};

function CartsCard({ data, counters, setCounters }) {

    let product = {
        name: "Sparkle - 20cm",
        discription: "spins a lot on the ground",
        price: 6,
        footer: ""
    }

    return (
        
        <Container style={{ background: "white" }}>

          
            {data.carts.map((cart, i) => {
                // [cart.pid]
                return <Row border="dark" className='no-gutters' style={{ borderTop: "1px solid #f0f0f0", padding: "10px" }}>
                    <Row>
                        <Col xs={3}>
                            <Figure>
                                <Figure.Image
                                    width={200}
                                    height={200}
                                    alt="171x180"
                                    src={require('../pages/sparkle.png')}
                                />
                            </Figure>
                        </Col>
                        <Col xs={9}>
                            {/*   <h3>Sparkle 15cm</h3>
                            <p style={{ color: "gray", fontSize: "0.9rem" }}>
                                Happy Diwali
                            </p>
                            <h5>
                                ₹120
                            </h5>
                            <p style={{ color: "gray" }}>
                                free deliver
                            </p> */}

                            <div style={{ paddingBottom: "8px" }}>{product.name}</div>
                            <p style={{ color: "gray", fontSize: "0.9rem" }}>
                                Happy Diwali
                            </p>
                            <div>
                                <div style={{ display: "inline-block", fontSize: "15px", color: "#878787", textDecoration: "line-through" }}>
                                    ₹{product.price * 60}
                                </div>
                                <div style={{ display: "inline-block", fontSize: "18px", marginLeft: "8px", color: "#212121", fontWeight: "500" }}>
                                    ₹{product.price}
                                </div>

                                <div style={{ display: "inline-block", fontSize: "14px", marginLeft: "8px", color: "#388e3c", fontWeight: "500", letterSpacing: "-0.2px" }}>
                                    65% off
                                </div>
                            </div>

                        </Col>
                    </Row>

                    <Row xs="auto">
                        <Col xs={3} style={{ paddingLeft: "18px" }}>
                            <div style={{ display: "inline-flex", width: "40px" }}>
                                {
                                    <Counter
                                        value={counters[i]}
                                        onIncrement={() => {
                                            const countersCopy = [...counters];
                                            countersCopy[i] += 1;
                                            setCounters(countersCopy);
                                        }}
                                        onDecrement={() => {
                                            const countersCopy = [...counters];
                                            if (countersCopy[i] > 0) {
                                                countersCopy[i] -= 1;
                                                setCounters(countersCopy);
                                            }
                                        }}
                                    />
                                }
                            </div>
                        </Col>

                        <Col ><Button className="btnTransparent" variant="light">SAVE FOR LATTER</Button></Col>
                        <Col ><Button className="btnTransparent" variant="light">REMOVE</Button></Col>
                    </Row>

                </Row>

            })
            }

        </Container>

    );
}

export default CartsCard;