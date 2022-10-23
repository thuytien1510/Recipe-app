import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../App.css";
function Headers() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <img
          src="https://png.pngtree.com/png-vector/20190528/ourlarge/pngtree-fast-food-typographical-logo-design-concept-for-label-template-packaging-png-image_1111325.jpg"
          className="logo "
        />

        <Container className="p-3 mx-6">
          <Nav className="me-auto fs-5">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/ingredients">Ingredients</Nav.Link>
            <Nav.Link href="/Recipes">Recipes</Nav.Link>
            <Nav.Link href="/shopping-list">Shopping List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Headers;
