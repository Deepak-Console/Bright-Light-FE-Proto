import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
    return (
        <Navbar style={{ marginBottom: "16px" }} bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/logs">Cloud Logs</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/logs">Logs</Nav.Link>
                    <Nav.Link href="/auto">Running Jobs</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;