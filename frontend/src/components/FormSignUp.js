import React, { useEffect, useState, useRef } from "react";
import { Form, Button, NavLink, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import axios from "axios";
import authActions from "../redux/actions/authActions";
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login';



const FormSignUp = (props) => {

    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: "",
        apellido: "",
        email: "",
        contraseña: "",
        url: "",
        ciudad: "",
        pais: ""
    })

        const nombre = useRef();
        const apellido = useRef();
        const email = useRef();
        const contraseña = useRef();
        const url = useRef();
        const ciudad = useRef();


    const inputHandler = (ref, input) => {
        setNuevoUsuario({
            ...nuevoUsuario,
            [input]: ref.current.value
        })
    }

    const handlerSelect = (e) =>{
        setNuevoUsuario({
            ...nuevoUsuario,
            "pais" : e.target.value
        })
    }   

const responseGoogle = (res) => {
    console.log(res)
        let googleUser = {
            nombre: res.profileObj.givenName,
            apellido: res.profileObj.familyName,
            email: res.profileObj.email, 
            contraseña: res.profileObj.googleId,
            url: res.profileObj.imageUrl,
            ciudad: "San Juan",
            pais: "Argentina",
            google: true,
        }

        props.registrarUsuario(googleUser)
        .then((res) => console.log(res.data.success))
        .catch((error) => console.log(error))
      }

    const submitForm = (e) => {
        e.preventDefault()
        props.registrarUsuario(nuevoUsuario)
        
    }

    const [paises, setPaises] = useState([])

    useEffect(() => {
        axios.get(`https://restcountries.com/v2/all?fields=name`)
            .then(res => setPaises(res.data))

        }, [])

        return (

        <div className="form-contenedor">
            <img className="fondo-signUp" src="./assets/fondo-signUp.jpg" alt="fund-signUp" />

            <Form className="formulario-signUp" onSubmit={submitForm}>                
             <div className="row">
                 <Form.Group className="col-12 col-sm-6 mb-3" controlId="formFirstName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={()=>inputHandler(nombre, "nombre")} ref={nombre} placeholder="FIRST NAME" required="required" autoComplete="off" />
            </Form.Group>
            <Form.Group className="col-12 col-sm-6 mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                         <Form.Control type="text" onChange={()=>inputHandler(apellido, "apellido")} ref={apellido} placeholder="FIRST LAST NAME" required="required" autoComplete="off" />
                </Form.Group>
             </div>
            <div className="row">
                <Form.Group className="col-12 col-sm-6 mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={()=>inputHandler(email, "email")} ref={email} type="email" placeholder="EMAIL" required="required" />
            </Form.Group>
            <Form.Group className="col-12 col-sm-6 mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={()=>inputHandler(contraseña, "contraseña")} ref={contraseña} type="password" placeholder="PASSWORD" rows={3} required="required"/>
            </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formUrl">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control onChange={()=>inputHandler(url, "url")} ref={url} type="text" placeholder="PHOTO URL" rows={3} required="required"/>
            </Form.Group>
            <div className="row">
            <Form.Group className="col-12 col-sm-6 mb-3" controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={()=>inputHandler(ciudad, "ciudad")} ref={ciudad} type="text" placeholder="CITY" rows={3} />
            </Form.Group>
            <Form.Group className="col-12 col-sm-6 mb-3" controlId="formState">
                         <Form.Label>State</Form.Label>
                         <Form.Select onChange={handlerSelect} required="required" defaultValue="-">
                             <option value="-" disabled>CHOOSE YOUR COUNTRY</option>
                             {paises.map(pais => {
                                return (
                                    <option key={pais.name}>{pais.name}</option>
                                )
                            })}
                        </Form.Select >
                    </Form.Group>
            </div>
          
                <div className="boton-contenedor">
                     <Button className="boton-Up" variant="primary" type="submit" >
                     Sign Up
                 </Button> 
                 </div>               
            <GoogleLogin className="google mt-2"
                    clientId="31750726580-hd0f94k1n8pudt2igabf9l9mp13vr7m1.apps.googleusercontent.com"
                    buttonText="Sign Up with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'} 
                /> 
                 <Nav className="d-flex align-items-center">
                     Already have an account?
                     <NavLink as={Link} to="/SignIn">Sign in here !</NavLink>
                 </Nav>
            </Form>
            
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        usuario: state.authReducer.usuario
    }
}

const mapDispatchToProps = {
    registrarUsuario: authActions.registrarUsuario
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSignUp)



// <Form className="formulario-signUp">
//                 <h3 className="d-flex justify-content-center">Create an Account</h3>
//                 <Row className="">
//                     <Form.Group as={Col} controlId="formGridFirstName">
//                         <Form.Label>Name</Form.Label>
//                         <Form.Control type="text" onChange={inputHandler} placeholder="FIRST NAME" required="required" autoComplete="off" />
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formGridLastName">
//                         <Form.Label>Last Name</Form.Label>
//                         <Form.Control type="text" onChange={inputHandler} placeholder="FIRST LAST NAME" required="required" autoComplete="off" />
//                     </Form.Group>
//                 </Row>
//                 <Row className="">
//                     <Form.Group as={Col} controlId="formGridEmail">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" onChange={inputHandler} placeholder="EMAIL" required="required" autoComplete="off" />
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formGridPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" onChange={inputHandler} placeholder="PASSWORD" required="required" autoComplete="off" />
//                     </Form.Group>
//                 </Row>
//                 <Form.Group className="mb-3" controlId="formGridImage">
//                     <Form.Label>Profile Picture (URL)</Form.Label>
//                     <Form.Control type="text" onChange={inputHandler} placeholder="PHOTO URL" autoComplete="off" />
//                 </Form.Group>
//                 <Row className="">
//                     <Form.Group as={Col} className="mb-3" controlId="formGridCity">
//                         <Form.Label>City</Form.Label>
//                         <Form.Control type="text" onChange={inputHandler} placeholder="CITY" autoComplete="off" />
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formGridState">
//                         <Form.Label>State</Form.Label>
//                         <Form.Select required="required" defaultValue="-">
//                             <option value="-" disabled>CHOOSE YOUR COUNTRY</option>
//                             {paises.map(pais => {
//                                 return (
//                                     <option key={pais.name} >{pais.name}</option>
//                                 )
//                             })}
//                         </Form.Select >
//                     </Form.Group>
//                 </Row>
//                 <Form.Group className="mb-3" id="formGridCheckbox">
//                     <Form.Check type="checkbox" label="Accept terms and conditions" required="required" />
//                 </Form.Group>
//                 <div className="boton-contenedor">
//                     <Button className="boton-Up" variant="primary" type="submit" onClick={submitForm} >
//                     Sign Up
//                 </Button> 
//                 </div>               
              
//                 <GoogleLogin className="google mt-2"
//                     clientId="31750726580-hd0f94k1n8pudt2igabf9l9mp13vr7m1.apps.googleusercontent.com"
//                     buttonText="Sign Up with Google"
//                     onSuccess={responseGoogle}
//                     onFailure={responseGoogle}
//                     cookiePolicy={'single_host_origin'} 
//                 />  
//                 <Nav className="d-flex align-items-center">
//                     Already have an account?
//                     <NavLink as={Link} to="/SignIn">Sign in here !</NavLink>
//                 </Nav>
//             </Form> 