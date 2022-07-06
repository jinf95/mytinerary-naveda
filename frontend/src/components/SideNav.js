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
                  height="50"
                  className="logo"
                  src="/assets/logo.png"
                  alt="imagen"
                />
              </Link>
            </Navbar.Brand>
            <Nav className="nav justify-content-end flex-grow-1 pe-3">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Cities">Cities</Link>
              </Nav.Link>
              <NavDropdown
                title={props.usuario ? perfil : logo}
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                {!props.usuario && (
                  <NavDropdown.Item as={Link} to="/SignIn">
                    Sign In
                  </NavDropdown.Item>
                )}
                {!props.usuario && (
                  <NavDropdown.Item as={Link} to="/SignUp">
                    Sign Up
                  </NavDropdown.Item>
                )}
                {/* <NavDropdown.Divider /> */}
                {props.usuario && (
                  <NavDropdown.Item onClick={() => props.cerrarSesion()}>
                    Sign Out
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
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/Cities">Cities</Link>
                  </Nav.Link>
                  <NavDropdown
                    title={props.usuario ? perfil : logo}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {!props.usuario && (
                      <NavDropdown.Item as={Link} to="/SignIn">
                        Sign In
                      </NavDropdown.Item>
                    )}
                    {!props.usuario && (
                      <NavDropdown.Item as={Link} to="/SignUp">
                        Sign Up
                      </NavDropdown.Item>
                    )}
                    {/* <NavDropdown.Divider /> */}
                    {props.usuario && (
                      <NavDropdown.Item onClick={() => props.cerrarSesion()}>
                        Sign Out
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

