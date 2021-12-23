import React, {useState, useRef} from "react";
import { Form, Button, Nav, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import authActions from "../redux/actions/authActions";
import GoogleLogin from 'react-google-login';
import Swal from "sweetalert2";



const FormSignIn = (props) => {


        const [ingresarUsuario, setIngresarUsuario] = useState ({
            email: "", 
            contraseña: "",
        })
    
        const email = useRef();
        const contraseña = useRef();

        const inputHandler = (ref, input) => {
            setIngresarUsuario({
                ...ingresarUsuario,
                [input]: ref.current.value
            })
        }

        const responseGoogle = (res) => {
            let googleUser = {
                email: res.profileObj.email, 
                contraseña: res.profileObj.googleId,
            }
    
            props.iniciarSesion(googleUser.email, googleUser.contraseña)
           
          }



          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })


        const submitForm = async (e) => {
            e.preventDefault()
        const usuario = await props.iniciarSesion(ingresarUsuario)
            if(usuario.success && !usuario.error){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You are successfully logged in!',
                    showConfirmButton: false,
                    timer: 8500
                  })
                }else{
                    // Toast.fire({
                    //     icon: 'error',
                    //     html:  usuario.response.map(
                    //         e => `<p>${e.message}</p>`
                    //     )
                    //   }) 
                   
                }
        }


    return (
        <div className="signIn-contenedor">
            <img className="fondo-signIn" src="./assets/fondo-signIn.jpg" alt="fund-signIn" />
            <Form className="form-signIn" onSubmit={submitForm}>
                <Form.Group className="col-12 mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onChange={()=>inputHandler(email, "email")} ref={email} placeholder="EMAIL" required="required" autoComplete="off"/>
                </Form.Group>
                <Form.Group className="col-12 mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={()=>inputHandler(contraseña, "contraseña")} ref={contraseña} placeholder="PASSWORD" required="required" autoComplete="off" />
                </Form.Group>
                <div className="boton-contenedor mb-2">
                <Button className="boton-form" variant="primary" type="submit" >
                    Get in
                </Button>
                </div>              
               
                <GoogleLogin className="google "
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