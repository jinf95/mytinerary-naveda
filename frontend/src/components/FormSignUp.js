import React, { useEffect, useState } from "react";
import { Form, Row, Button, Col, NavLink, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import axios from "axios";

const FormSignUp = () => {

 const [paises, setPaises] = useState([])
 
 useEffect(() => {
    axios.get(`https://restcountries.com/v2/all?fields=name`)
            .then(res => setPaises(res.data))
 }, [])

    return(
        <div className="form-contenedor">
                <img className="fondo-signUp" src="./assets/fondo-signUp.jpg" alt="fund-signUp"/>

                <Form className="formulario-signUp">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="FIRST NAME" required="required" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="FIRST LAST NAME" required="required"/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="EMAIL" required="required"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="PASSWORD" required="required"/>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGridImage">
                        <Form.Label>Profile Picture (URL)</Form.Label>
                        <Form.Control type="text" placeholder="PHOTO URL" />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="CITY" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select  required="required" defaultValue="Choose...">
                                <option>CHOOSE YOUR COUNTRY</option>
                                {paises.map(pais => {
                                    return (
                                        <option>{pais.name}</option>
                                    )
                                })}
                            </Form.Select >
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Accept terms and conditions" required="required" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                    <Nav className="d-flex align-items-center">
                        Already have an account?
                        <NavLink as={Link} to="/SignIn">Sign in here !</NavLink>
                    </Nav>
                </Form>
            </div>
    )
        
}

export default FormSignUp