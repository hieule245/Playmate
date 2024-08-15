import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/2x/logo@2x.png';

const Header = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo}
            height="40"
            alt="Playmates Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Store</Nav.Link>
            <Nav.Link href="#">Game event</Nav.Link>
            <Nav.Link href="#">About us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#"><i className="fas fa-shopping-cart"></i></Nav.Link>
            <Nav.Link href="#"><i className="fas fa-bell"></i></Nav.Link>
            <Nav.Link href="#"><i className="fas fa-user-circle"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
