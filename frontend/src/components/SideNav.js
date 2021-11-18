import React from "react"
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';


const SideNav = () => {

    const logo = <img src='./assets/logosesion.svg' alt = "logoSesion" />

    return (

        <>
            <Navbar collapseOnSelect expand="lg" className ="navbar">
                <Container>
                <img width="70" height="70" src="./assets/logo.png" alt="imagen"/>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="">HOME</Nav.Link>
                            <Nav.Link href="">CITIES</Nav.Link>
                            <NavDropdown title={logo} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="">Sign In</NavDropdown.Item>
                                <NavDropdown.Item href="">Sign Up</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )

}

export default SideNav