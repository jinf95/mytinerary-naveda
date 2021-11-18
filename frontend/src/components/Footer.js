import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {

    // const facebook = <img src='./assets/facebook.svg' alt = "logo facebook" />

    return (

        <>
            <Navbar collapseOnSelect expand="lg" className="footer">
                <Container >
                    <Nav>
                        <Nav.Link href="">HOME</Nav.Link>
                        <Nav.Link href="">CITIES</Nav.Link>
                    </Nav>
                    <Nav className="copyright m-auto">
                        <p>MYTINERAY | COPYRIGHT-ALL RIGHTS RESERVED</p>
                    </Nav>
                    <Nav>
                        <img className="p-1" src='./assets/facebook.svg' alt="logo facebook" />
                        <img className="p-1" src='./assets/instagram.svg' alt="logo instagram" />
                        <img className="p-1" src='./assets/whatsapp.svg' alt="logo whatsapp" />
                        <img className="p-1" src='./assets/youtube.svg' alt="logo youtube" />
                    </Nav>
                </Container>
            </Navbar>

        </>

    )

}

export default Footer
