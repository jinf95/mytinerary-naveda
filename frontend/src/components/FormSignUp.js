import React from "react";
import { Form, Row, Button, Col, NavLink,Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";


const FormSignUp = () => {

    return (
        <div className="form-contenedor">
                <Form className="formulario-signUp">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="FIRST NAME" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="FIRST LAST NAME" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="EMAIL" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="PASSWORD" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridImage">
                        <Form.Label>Url perfil</Form.Label>
                        <Form.Control type="text" placeholder="PHOTO URL" />
                    </Form.Group>

                    <Row className="mb-3">
                     
                    <Form.Group as={Col} className="mb-3" controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="CITY" />
                    </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>CHOOSE YOUR COUNTRY</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>                      
                    </Row>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Dale acepta los terminos" required="required"/>
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

