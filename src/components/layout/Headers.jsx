// import { NavLink, Navbar, Nav, Container } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import "../../App.css";

function Headers() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <img
          src="https://png.pngtree.com/png-vector/20190528/ourlarge/pngtree-fast-food-typographical-logo-design-concept-for-label-template-packaging-png-image_1111325.jpg"
          className="logo"
          alt="logo"
        />
        <Container className="p-3 flex-row-reverse w-75">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='text-end'>
            <Nav className="me-auto fs-5 ms-5">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/ingredients">
                Ingredients
              </Nav.Link>
              <Nav.Link as={Link} to="/recipes">
                Recipes
              </Nav.Link>
              <Nav.Link as={Link} to="/shopping-list">
                Shopping List
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Headers;
