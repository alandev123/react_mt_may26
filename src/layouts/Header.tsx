import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import {  faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: React.FC = () => {
  return (
    <>
      <div className="fixed-top-header">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">My Image Search</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#cart"> <FontAwesomeIcon icon={faHeart} /> Lightboxes</Nav.Link>
                <Nav.Link href="#wishlist"> <FontAwesomeIcon icon={faCartShopping} />Cart</Nav.Link>
                <Nav.Link href="#signin">Sign In</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Navbar bg="light" variant="light" expand="lg" className="d-none d-lg-block"> 
          <Container>
          <Nav.Link href="#image">All images</Nav.Link>
            <Form className="d-flex mx-auto">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
            </Form>
            <Nav className="ms-auto">
              <Nav.Link href="#signin">Search by image</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="fixed-top-placeholder"></div>
    </>
  );
};

export default Header;
