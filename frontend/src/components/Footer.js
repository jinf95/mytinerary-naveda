import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {

    // const facebook = <img src='./assets/facebook.svg' alt = "logo facebook" />

    return (

        <>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container>
                        <Nav>
                            <Nav.Link href="">HOME</Nav.Link>
                            <Nav.Link href="">CITIES</Nav.Link>
                        </Nav>
                        <Nav className="me-auto">
                        </Nav>

                    <Nav> 
                    <p> REDES SOCIALES</p>
                    <img src='./assets/facebook.svg' alt = "logo facebook" />
                    </Nav>
                </Container>
            </Navbar>

        </>

    )

}

export default Footer
