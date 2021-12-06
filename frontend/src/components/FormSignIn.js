import React from "react";
import { Form, Button, Nav, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const FormSignIn = () => {

    return (
        <div className="signIn-contenedor">
            <Form className="form-signIn">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required="required" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Get in
                </Button>
                <Nav className="d-flex align-items-center">
                    Don't have an account?
                    <NavLink as={Link} to="/SignUp">Register here !</NavLink>
                </Nav>
            </Form>
        </div>
    )
}

export default FormSignIn