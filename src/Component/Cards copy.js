import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ data }) {

    return (
        <Card border="light" style={{ width: '15rem' }}>
            <Card.Img variant="top" src="sparkle.png" />
            <Card.Body>
                <Card.Title>{data.product.name}</Card.Title>
                <p style={{ color: "gray", fontSize: "0.9rem" }}>
                    {data.product.discription}
                </p>
                <h5>
                    ₹{data.product.price}
                </h5>
                <p style={{ color: "gray" }}>
                    {data.product.footer}
                </p>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card >
    );
}

export default Cards;