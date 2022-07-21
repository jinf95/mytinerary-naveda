import React from "react";
import {
  Navbar,
  NavDropdown,
  Container,
  Offcanvas,
  Nav,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";

const SideNav = (props) => {
  const logo = <img src="/assets/logosesion.svg" alt="logoSesion" />;
  const perfil = (
    <img
      className="foto-perfil"
      src={props.usuario && props.usuario.url}
      alt="profile-logo"
    />
  );
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-1">
          <Container fluid>
            <Navbar.Brand>
              <Link to="/">
                <img
                  width="50"
                  height="40"
                  className="logo"
                  src="/assets/logo.png"
                  alt="imagen"
                />
              </Link>
            </Navbar.Brand>
            <Nav className="nav justify-content-end flex-grow-1 pe-3">
                <Link to="/">HOME</Link>
                <Link to="/Cities">CITIES</Link>
              <NavDropdown
                title={props.usuario ? perfil : logo}
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                {!props.usuario && (
                  <NavDropdown.Item as={Link} to="/SignIn">
                    SIGN IN
                  </NavDropdown.Item>
                )}
                {!props.usuario && (
                  <NavDropdown.Item as={Link} to="/SignUp">
                    SIGN UP
                  </NavDropdown.Item>
                )}
                {props.usuario && (
                  <NavDropdown.Item onClick={() => props.cerrarSesion()}>
                    SIGN OUT
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="align-items-center flex-grow-1 pe-3">
                    <Link to="/">HOME</Link>
                    <Link to="/Cities">CITIES</Link>
                  <NavDropdown
                    title={props.usuario ? perfil : logo}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="d-flex flex-column align-items-center"
                  >
                    {!props.usuario && (
                      <NavDropdown.Item as={Link} to="/SignIn"  className="text-center">
                        SIGN IN
                      </NavDropdown.Item>
                    )}
                    {!props.usuario && (
                      <NavDropdown.Item as={Link} to="/SignUp"  className="text-center">
                        SIGN UP
                      </NavDropdown.Item>
                    )}
                    {/* <NavDropdown.Divider /> */}
                    {props.usuario && (
                      <NavDropdown.Item onClick={() => props.cerrarSesion()} className="text-center">
                        SIGN OUT
                      </NavDropdown.Item>
                    )}
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    usuario: state.authReducer.usuario,
  };
};
const mapDispatchToProps = {
  cerrarSesion: authActions.cerrarSesion,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);

