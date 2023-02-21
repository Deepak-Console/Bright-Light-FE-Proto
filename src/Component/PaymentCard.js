import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListGroupWithHeaderExample({ data = { price: 100, discount: 200, delivery: 20, total: 120 } }) {

    return (
        <>
            <Card border="light" style={{ width: '23rem', fontWeight: "400" }}>
                <Card.Header>PRICE DETAILS</Card.Header>
                <ListGroup variant="primary">
                    {/* <ListGroup.Item>Price<span>1200</span></ListGroup.Item>
                <ListGroup.Item>Discount</ListGroup.Item>
                <ListGroup.Item>Delivery Charges</ListGroup.Item> */}
                    <Row style={{ margin: "18px 0" }}>
                        <Col>Price</Col>
                        <Col style={{ textAlign: "end", fontSize: "20px" }}>{data.price}</Col>
                    </Row>
                    <Row style={{ margin: "18px 0" }}>
                        <Col>Discount</Col>
                        <Col style={{ textAlign: "end", fontSize: "20px" }}>{data.discount}</Col>
                    </Row>
                    <Row style={{ margin: "18px 0" }}>
                        <Col>Delivery Charges</Col>
                        <Col style={{ textAlign: "end", fontSize: "20px" }}>{data.delivery}</Col>
                    </Row>
                </ListGroup>
                <ListGroup style={{ fontWeight: "500" }} variant="primary">
                    {/* <ListGroup.Item>Total Amount</ListGroup.Item> */}
                    <Row style={{ margin: "18px 0" }}>
                        <Col>Total Amount</Col>
                        <Col style={{ textAlign: "end", fontSize: "20px" }}>{data.total}</Col>
                    </Row>
                </ListGroup>
                <Row style={{ color: "green", padding: "12px 0px 12px 12px", margin:"inherit", fontSize: "18px" }}>
                    You will save ₹1,070 on this order
                </Row>
            </Card>


        </>
    );
}

export default ListGroupWithHeaderExample;