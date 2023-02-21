import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AutoLayoutExample() {

    let product = {
        name: "Sparkle - 20cm",
        discription: "spins a lot on the ground",
        price: 6,
        footer: ""
    }

    const buttonChange = (e) => {
        console.log('hello event ', e)
    }

    return (
        <>
            <Card border="light" className="custcards" style={{ width: '15rem', display: "inline-block", margin: "3px" }}>
                <Card.Img variant="top" src={require('../pages/sparkle.png')} />
                <Card.Body>
                    <div style={{ paddingBottom: "8px" }}>{product.name}</div>
                    <div style={{ display: "inline-block", fontSize: "18px", color: "#212121", fontWeight: "500" }}>
                        ₹{product.price}
                    </div>
                    <div style={{ display: "inline-block", fontSize: "15px", marginLeft: "8px", color: "#878787", textDecoration: "line-through" }}>
                        ₹{product.price * 60}
                    </div>
                    <div style={{ display: "inline-block", fontSize: "14px", marginLeft: "8px", color: "#388e3c", fontWeight: "500", letterSpacing: "-0.2px" }}>
                        65% off
                    </div>
                    <p style={{ color: "gray" }}>
                        {product.footer}
                    </p>
                    <Button variant="primary" onClick={(e) => buttonChange()}>Add to Cart</Button>
                </Card.Body>
            </Card >
            <Card border="light" className="custcards" style={{ width: '15rem', display: "inline-block", margin: "3px" }}>
                <Card.Img variant="top" src={require('../pages/sparkle.png')} />
                <Card.Body>
                    <div style={{ paddingBottom: "8px" }}>{product.name}</div>
                    <div style={{ display: "inline-block", fontSize: "18px", color: "#212121", fontWeight: "500" }}>
                        ₹{product.price}
                    </div>
                    <div style={{ display: "inline-block", fontSize: "15px", marginLeft: "8px", color: "#878787", textDecoration: "line-through" }}>
                        ₹{product.price * 60}
                    </div>
                    <div style={{ display: "inline-block", fontSize: "14px", marginLeft: "8px", color: "#388e3c", fontWeight: "500", letterSpacing: "-0.2px" }}>
                        65% off
                    </div>
                    <p style={{ color: "gray" }}>
                        {product.footer}
                    </p>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card >
            <Card border="light" className="custcards" style={{ width: '15rem', display: "inline-block", margin: "3px" }}>
                <Card.Img variant="top" src={require('../pages/sparkle.png')} />
                <Card.Body>
                    <div style={{ paddingBottom: "8px" }}>{product.name}</div>
                    <div style={{ display: "inline-block", fontSize: "18px", color: "#212121", fontWeight: "500" }}>
                        ₹{product.price}
                    </div>
                    <div style={{ display: "inline-block", fontSize: "15px", marginLeft: "8px", color: "#878787", textDecoration: "line-through" }}>
                        ₹{product.price * 60}
                    </div>
                    <div style={{ display: "inline-block", fontSize: "14px", marginLeft: "8px", color: "#388e3c", fontWeight: "500", letterSpacing: "-0.2px" }}>
                        65% off
                    </div>
                    <p style={{ color: "gray" }}>
                        {product.footer}
                    </p>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card >
        </>


    );
}

export default AutoLayoutExample;