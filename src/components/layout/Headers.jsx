import { NavLink, Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";

function Headers() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <img
          src="https://png.pngtree.com/png-vector/20190528/ourlarge/pngtree-fast-food-typographical-logo-design-concept-for-label-template-packaging-png-image_1111325.jpg"
          className="logo"
          alt="logo"
        />

        <Container className="p-3 mx-6">
          <Nav className="me-auto fs-5">
            <NavLink as={Link} to="/">Home</NavLink>
            <NavLink as={Link} to="/ingredients">Ingredients</NavLink>
            <NavLink as={Link} to="/recipes">Recipes</NavLink>
            <NavLink as={Link} to="/shopping-list">Shopping List</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Headers;
