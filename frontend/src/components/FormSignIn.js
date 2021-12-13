import React, {useState} from "react";
import { Form, Button, Nav, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import authActions from "../redux/actions/authActions";
import GoogleLogin from 'react-google-login';

const FormSignIn = (props) => {

        const [ingresarUsuario, setIngresarUsuario] = useState ({
            email: "", 
            contraseña: "",
        })
    
        const inputHandler = (e) => {
            console.log(e.target.value)
            setIngresarUsuario({
                ...ingresarUsuario, 
                [e.target.name]: e.target.value
            })
        }

        const responseGoogle = (res) => {
            let googleUser = {
                email: res.profileObj.email, 
                contraseña: res.profileObj.googleId,
                google: true
            }
    
            props.iniciarSesion(googleUser)
            .then((response) => response.data.success)
            .catch((error) => console.log(error))
          }

        const submitForm = (e) => {
            e.preventDefault()
            props.iniciarSesion(ingresarUsuario)
        }

    return (
        <div className="signIn-contenedor">
            <img className="fondo-signIn" src="./assets/fondo-signIn.jpg" alt="fund-signIn" />
            <Form className="form-signIn">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onChange={inputHandler} placeholder="EMAIL" required="required" autoComplete="off"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={inputHandler} placeholder="PASSWORD" required="required" />
                </Form.Group>
                <div className="mb-2">
                <Button variant="primary" type="submit" onChange={submitForm}>
                    Get in
                </Button>
                </div>              
               
                <GoogleLogin
                    clientId="31750726580-hd0f94k1n8pudt2igabf9l9mp13vr7m1.apps.googleusercontent.com"
                    buttonText="Log In with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                /> 
                <Nav className="d-flex align-items-center">
                    Don't have an account?
                    <NavLink as={Link} to="/SignUp">Register here !</NavLink>
                </Nav>
            </Form>
        </div>
    )
}
const mapStateToProps = (state) =>{

    return{
            usuario : state.authReducer.usuario   
    } 

}

const mapDispatchToProps = {
    iniciarSesion : authActions.iniciarSesion
}

export default connect(mapStateToProps, mapDispatchToProps) (FormSignIn)