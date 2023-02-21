import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

    return (
        <Container>
            <Row className="align-items-center justify-content-center">
                <Col lg={3}>Members :</Col>
            </Row>
        </Container>

    );
}

export default App;