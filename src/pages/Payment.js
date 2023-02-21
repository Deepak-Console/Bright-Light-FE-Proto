import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Horizontalcards from "../Component/CartsCard"
import PaymentTab from "../Component/PaymentCard"
import React, { useState, useEffect } from "react";

import CartsJSON from '../mock/Carts.json'

function AutoLayoutExample() {

    const [counters, setCounters] = useState([])
    const [payment, setPayment] = useState({})



    useEffect(() => {
       
        var arr = CartsJSON.carts.map(() => {
            return 0
        })

        
        setCounters(arr)
        var obj = { price: 1200, discount: 200, delivery: 20, total: 1202 }
        setPayment(obj)

    }, [])

    return (
        <Container>
            <Row>
                <Col lg={8}><Horizontalcards data={CartsJSON} counters={counters} setCounters={setCounters} /></Col>
                <Col lg={4}><PaymentTab data={payment} /></Col>
            </Row>
        </Container>
    );
}

export default AutoLayoutExample;