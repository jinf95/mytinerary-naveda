import React from "react"
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import authActions from "../redux/actions/authActions";


const SideNav = (props) => {
    console.log(props)
    const logo = <img src='/assets/logosesion.svg' alt = "logoSesion" />
    const perfil = <img className="foto-perfil" src={props.usuario ? props.usuario.url : ""} alt="logo-perfil"/>
    return (

        <>
            <Navbar collapseOnSelect expand="lg" className ="navbar">
                <Container>
                <img width="70" height="70" src="/assets/logo.png" alt="imagen"/>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/"  className="hover-nav">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/Cities"  className="hover-nav">CITIES</Nav.Link>
                                <NavDropdown title={props.usuario ? perfil : logo } id="collasible-nav-dropdown">
                                {!props.usuario && <NavDropdown.Item as={Link} to="/SignIn">Sign In</NavDropdown.Item>}
                                {!props.usuario && <NavDropdown.Item as={Link} to="/SignUp">Sign Up</NavDropdown.Item>}
                                {props.usuario && <NavDropdown.Item onClick={() => props.cerrarSesion()}>Sign Out</NavDropdown.Item>}
                            </NavDropdown>
                        </Nav>
                        {props.usuario ? <h1 className="bienvenida-sidenav">Welcome {props.usuario.nombre}</h1> : <h1 className="bienvenida-sidenav">You are not registered</h1>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )

}

const mapStateToProps = (state) => {
    
    return{
        usuario: state.authReducer.usuario,
                      
    }
}
const mapDispatchToProps = {
    cerrarSesion : authActions.cerrarSesion
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)