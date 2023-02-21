import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Groups from './groups'

function NavbarDarkExample() {

    const retrieveGroupDetails = (e) => {
        alert('HI', e.target.value)
    }

    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">Groups</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Dropdown"
                            menuVariant="dark"
                        >
                            {Object.keys(Groups()).map((group) => {
                                return <NavDropdown.Item value={group} key={group} onClick={retrieveGroupDetails}>{group}</NavDropdown.Item>
                            })}

                            {/*  <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavbarDarkExample;