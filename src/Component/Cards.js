import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ data }) {

    return (
        /*    <Card border="light" className="custcards" style={{ width: '15rem', display: "inline-block", margin: "3px" }}>
               <div style={{ margin: "8px" }}>
                   <Card.Img variant="top" src={require('../pages/sparkle.png')} />
               </div>
               <Card.Body>
                   <div style={{ paddingBottom: "8px" }}>{data.product.name}</div>
                   <div style={{ display: "inline-block", fontSize: "18px", color: "#212121", fontWeight: "500" }}>
                       ₹{data.product.price}
                   </div>
                   <div style={{ display: "inline-block", fontSize: "15px", marginLeft: "8px", color: "#878787", textDecoration: "line-through" }}>
                       ₹{data.product.price * 65}
                   </div>
                   <div style={{ display: "inline-block", fontSize: "14px", marginLeft: "8px", color: "#388e3c", fontWeight: "500", letterSpacing: "-0.2px" }}>
                       65% off
                   </div>
                   <Button variant="primary">Add to Cart</Button>
               </Card.Body>
           </Card > */

        <Card border="light" className="custcards" style={{ width: '15rem', display: "inline-block", margin: "3px" }}>
            <Card.Img variant="top" src={require('../pages/sparkle.png')} />
            <Card.Body>
                <div style={{ paddingBottom: "8px" }}>{data.product.name}</div>
                <div style={{ display: "inline-block", fontSize: "18px", color: "#212121", fontWeight: "500" }}>
                    ₹{data.product.price}
                </div>
                <div style={{ display: "inline-block", fontSize: "15px", marginLeft: "8px", color: "#878787", textDecoration: "line-through" }}>
                    ₹{data.product.price * 60}
                </div>
                <div style={{ display: "inline-block", fontSize: "14px", marginLeft: "8px", color: "#388e3c", fontWeight: "500", letterSpacing: "-0.2px" }}>
                    65% off
                </div>
                <p style={{ color: "gray", fontSize: "12px" }}>
                    {data.product.footer}
                </p>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card >
    );
}

export default Cards;