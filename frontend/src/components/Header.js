import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Row style={{ width: "100%" }}>
            <Col xs={8}>
              <Navbar.Brand href="#home">Swift Basket</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Col>
            <Col xs={4}>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/cart">
                    <i className="fas fa-shopping-cart"></i>Cart
                  </Nav.Link>
                  <Nav.Link href="/login">
                    <i className="fas fa-user"></i>Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
