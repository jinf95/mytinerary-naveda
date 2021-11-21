import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {

    const redes = [
        { imagen: "facebook.svg", alt: "facebook" },
        { imagen: "instagram.svg", alt: "instagram" },
        { imagen: "whatsapp.svg", alt: "whatsapp" },
        { imagen: "youtube.svg", alt: "youtube" },

    ]
    return (

        <>
            <Navbar collapseOnSelect expand="lg" className="footer">
                <Container >
                    <Nav>
                        <Nav.Link className="hover-nav text-dark" href="">HOME</Nav.Link>
                        <Nav.Link className="hover-nav text-dark" href="">CITIES</Nav.Link>
                    </Nav>
                    <Nav>
                        <p className="copyright m-auto">MYTINERAY | COPYRIGHT-ALL RIGHTS RESERVED</p>
                    </Nav>
                    {redes.map((red) => {
                        let logos = `./assets/${red.imagen}`
                        return (
                            <Nav className="redes p-1" src={logos}>

                            </Nav>
                        )
                    })
                    }
                </Container>
            </Navbar>

        </>
    )
}

export default Footer
