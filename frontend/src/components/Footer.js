import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {

    const redes = [
        {imagen : "./assets/facebook.svg", alt : "facebook"},
        {imagen : "./assets/instagram.svg", alt : "instagram"},
        {imagen : "./assets/whatsapp.svg", alt : "whatsapp"},
        {imagen : "./assets/youtube.svg", alt : "youtube"},

    ]
    return (

        <>
            <Navbar collapseOnSelect expand="lg" className="footer">
                <Container >
                    <Nav>
                        <Nav.Link href="">HOME</Nav.Link>
                        <Nav.Link href="">CITIES</Nav.Link>
                    </Nav>
                    <Nav>
                        <p className="copyright m-auto">MYTINERAY | COPYRIGHT-ALL RIGHTS RESERVED</p>
                    </Nav>
                    <Nav className="redes p-1"> {redes.imagen}
                        {/* <img className="p-1" src='./assets/instagram.svg' alt="logo instagram" />
                        <img className="p-1" src='./assets/whatsapp.svg' alt="logo whatsapp" />
                        <img className="p-1" src='./assets/youtube.svg' alt="logo youtube" /> */}
                    </Nav>
                </Container>
            </Navbar>

        </>

    )

}

export default Footer
