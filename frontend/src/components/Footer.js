import React from "react";
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


const Footer = () => {

    const redes = [
        { imagen: "facebook.svg", url: "https://www.facebook.com/"},
        { imagen: "instagram.svg", url: "https://www.instagram.com/"},
        { imagen: "linkedin.svg", url: "https://www.linkedin.com/in/juanignacionaveda"},
        { imagen: "youtube.svg", url: "https://www.youtube.com/"},

    ]
    return (

        <>
            <Navbar collapseOnSelect expand="lg" className="footer">
                    <Nav className="link-footer">
                        <Nav.Link className="hover-footer me-2 text-white" as={Link} to='/'>HOME</Nav.Link>
                        <Nav.Link className="hover-footer text-white" as={Link} to='/Cities' >CITIES</Nav.Link>
                    </Nav>
                    <Nav>
                        <p className="copyright m-auto">MYTINERAY | COPYRIGHT-ALL RIGHTS RESERVED</p>
                    </Nav>
                    <div>
                        {redes.map((red,index)=>{
                            let logo = `/assets/${red.imagen}`
                            return(
                                 <a key={index} href={red.url} target="_blank" rel="noopener noreferrer"><img key={red.imagen} src= {logo} alt="social networks" className="logos"/></a>
                            )
                        })}
                    </div>
            </Navbar>

        </>
    )
}

export default Footer
