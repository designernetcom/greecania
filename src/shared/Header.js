import React, { Fragment } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from ".././greecania-logo.png";

const Header = () => {
  return (
    <div>
      <Fragment>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} width="120px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#features">About Us</Nav.Link>
                <NavDropdown title="Product Range" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">
                    Greek Yogurt
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Ice-Cream
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Pudding
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Fruit Preserve
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Fruit Spread
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Sauces</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Drinking Water
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Cheese</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Franchise" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">
                    Franchise Model
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Franchise Form
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Locate Us
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#features">Events</Nav.Link>
                <Nav.Link href="#features">Faq's</Nav.Link>
                <Nav.Link href="#features">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    </div>
  );
};

export default Header;
