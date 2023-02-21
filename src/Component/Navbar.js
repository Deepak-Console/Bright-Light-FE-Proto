import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import categoryJSON from '../mock/Category.json'

function NavbarComp() {
    return (
        <Navbar style={{ marginBottom: "16px" }} bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">Fire World</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                        {

                            categoryJSON.category.map((category) => {

                                return <NavDropdown.Item key={category.cid} href={"/products?category=" + category.cid}>{category.name}</NavDropdown.Item>
                            })
                        }

                    </NavDropdown>
                    <Nav.Link href="/Products">All Products</Nav.Link>
                    <Nav.Link href="/category">Category</Nav.Link>
                    {/*   <Nav.Link href="/groups">Groups</Nav.Link>
                    <Nav.Link href="/members">Members</Nav.Link> */}
                </Nav>

                <Nav className="">
                    <Nav.Link href="/carts">Cart</Nav.Link>
                    <Nav.Link href="/Login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;