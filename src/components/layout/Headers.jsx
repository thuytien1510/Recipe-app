import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="text-center">
          <Navbar.Brand
            as={Link} to="/"
          >
            <img
              src="https://png.pngtree.com/png-vector/20190528/ourlarge/pngtree-fast-food-typographical-logo-design-concept-for-label-template-packaging-png-image_1111325.jpg"
              className="logo rounded-circle"
              alt="logo"
              width="100px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fs-5  nav-link ">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/recipes">
                Recipes
              </Nav.Link>
              <Nav.Link as={Link} to="/ingredients">
                Ingredients
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
