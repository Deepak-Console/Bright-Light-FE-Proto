import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import ProductJson from '../mock/products.json'

function BasicExample() {
    return (
        <>
            {
                ProductJson.Products.map((product) => {
                    return <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="sparkle.png" />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <p style={{ color: "gray", fontSize: "0.9rem"}}>
                                {product.discription}
                            </p>
                            <h5>
                                ₹{product.price}
                            </h5>
                            <p style={{ color: "gray" }}>
                                {product.footer}
                            </p>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card >
                })
            }
        </>
    );
}

export default BasicExample;