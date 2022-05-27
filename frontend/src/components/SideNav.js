import React from "react"
import { NavDropdown } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import authActions from "../redux/actions/authActions";


const SideNav = (props) => {
    const logo = <img src='/assets/logosesion.svg' alt = "logoSesion" />
    const perfil = <img className="foto-perfil" src={props.usuario && props.usuario.url } alt="logo-perfil"/>
    return (

        <>
            <div collapseOnSelect expand="lg" className ="navbar">
                <img width="50" height="50" src="/assets/logo.png" alt="imagen"/>
                    <div className="responsive-navbar">
                    
                        <div className="links">
                            <Link as={Link} to="/"  className="link">HOME</Link>
                            <Link as={Link} to="/Cities"  className="link">CITIES</Link>
                                <NavDropdown title={props.usuario ? perfil : logo } id="collasible-nav-dropdown">
                                {!props.usuario && <NavDropdown.Item as={Link} to="/SignIn">Sign In</NavDropdown.Item>}
                                {!props.usuario && <NavDropdown.Item as={Link} to="/SignUp">Sign Up</NavDropdown.Item>}
                                {props.usuario && <NavDropdown.Item onClick={() => props.cerrarSesion()}>Sign Out</NavDropdown.Item>}
                            </NavDropdown>
                        {/* {props.usuario && <h1 className="bienvenida-sidenav">Welcome {props.usuario.nombre}</h1>} */}
                        </div>
                    </div>
            </div>

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

