import React, { useState, useRef } from "react";
import { Form, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";
import GoogleLogin from "react-google-login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormSignIn = (props) => {
  const [ingresarUsuario, setIngresarUsuario] = useState({
    email: "",
    contraseña: ""
  });

  const email = useRef();
  const contraseña = useRef();

  const inputHandler = (ref, input) => {
    setIngresarUsuario({
      ...ingresarUsuario,
      [input]: ref.current.value
    });
  };

  const responseGoogle = (res) => {
    let googleUser = {
      email: res.profileObj.email,
      contraseña: res.profileObj.googleId,
    };

    props.iniciarSesion(googleUser.email, googleUser.contraseña);
  };

  const submitForm = async (e) => {
    e.preventDefault();
   await props.iniciarSesion(ingresarUsuario)   
  }

  return (
    <div className="signIn-contenedor">
        <ToastContainer/>
      <Form className="form-signIn" onSubmit={submitForm}>
        <Form.Group className="col-12 mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={() => inputHandler(email, "email")}
            ref={email}
            placeholder="EMAIL"
            required="required"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="col-12 mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={() => inputHandler(contraseña, "contraseña")}
            ref={contraseña}
            placeholder="PASSWORD"
            required="required"
            autoComplete="off"
          />
        </Form.Group>
        <div className="boton-contenedor mb-2">
          <button className="boton-form" type="submit">
            Get in
          </button>
        </div>

        <GoogleLogin
          className="google "
          clientId="31750726580-hd0f94k1n8pudt2igabf9l9mp13vr7m1.apps.googleusercontent.com"
          buttonText="Log In with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <Nav className="d-flex align-items-center">
          Don't have an account?
          <NavLink as={Link} to="/SignUp">
            Register here !
          </NavLink>
        </Nav>
      </Form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    usuario: state.authReducer.usuario,
  };
};

const mapDispatchToProps = {
  iniciarSesion: authActions.iniciarSesion,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSignIn);
