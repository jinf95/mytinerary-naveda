import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


const Footer = () => {

    const redes = [
        { imagen: "facebook.svg"},
        { imagen: "instagram.svg"},
        { imagen: "whatsapp.svg"},
        { imagen: "youtube.svg"},

    ]
    return (

        <>
            <Navbar collapseOnSelect expand="lg" className="footer">
                <Container className="footer-contenedor">
                    <Nav className="link-footer">
                        <Nav.Link className="hover-footer me-2 text-white" as={Link} to='/'>HOME</Nav.Link>
                        <Nav.Link className="hover-footer text-white" as={Link} to='/Cities' >CITIES</Nav.Link>
                    </Nav>
                    <Nav>
                        <p className="copyright m-auto">MYTINERAY | COPYRIGHT-ALL RIGHTS RESERVED</p>
                    </Nav>
                    <div>
                        {redes.map((red)=>{
                            let logo = `./assets/${red.imagen}`
                            return(
                                 <img src= {logo} alt="social networks" className="logos me-2 ms-2"/>
                            )
                        })}
                    </div>
                </Container>
            </Navbar>

        </>
    )
}

export default Footer
