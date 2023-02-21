import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DialogPrompt(props) {

    console.log('children', props)
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => {
        setShow(true)
    }

    const handleActions = () => {
        props.handleDialogSubmit()
        setShow(false)
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {props.children}
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.submitDialogDetails.head}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.submitDialogDetails.body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleActions}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

