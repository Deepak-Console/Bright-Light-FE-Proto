
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CatagoryCard({ data }) {

    return (
        <Link to={"/products?category=" + data.product.cid}>
            <Card /* onClick={() => shoot("Goal!")} */ border="light" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="sparkle.png" />
                <Card.Body>
                    <Card.Title>{data.product.name}</Card.Title>
                </Card.Body>
            </Card >
        </Link >
    );
}

/* {
    "id": "CAT_001",
    "name": "GROUND CHAKKARS"
}, */

export default CatagoryCard;