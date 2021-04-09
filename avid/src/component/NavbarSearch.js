import { Navbar, Nav, NavDropdown } from "react-bootstrap"

const NavbarSearch = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>

                <Nav className="mr-sm-2">
                <NavDropdown title="ACCOUNT" id="account-dropdown">
                    <NavDropdown.Item href="#action/3.1">SIGNUP</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">LOGIN</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">BAG</Nav.Link>
                <NavDropdown title="LANGUAGE" id="language-dropdown">
                    <NavDropdown.Item href="#action/3.1">ENGLISH</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">MANDARIN</NavDropdown.Item>
                </NavDropdown>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarSearch