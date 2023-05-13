import React from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand Link to="/">
            ONLINE SHOP
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton
                id="dropdown-basic-button"
                title="All"
              >
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Grocery</Dropdown.Item>
                <Dropdown.Item>Books</Dropdown.Item>
                <Dropdown.Item>Electronics</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Normal text" />
              <Button variant="warning">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                Admin
                <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
              </Nav.Link>
            </LinkContainer>
            
            <NavDropdown title="Anjana" id="collasible-nav-dropdown">
              <NavDropdown.Item to="/user/order" as={Link} >My Orders</NavDropdown.Item>
              <NavDropdown.Item to="/user/profile" as={Link} >My Account</NavDropdown.Item>
              <NavDropdown.Item eventKey="/user/logout" as={Link} >Logout</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/login">
              <Nav.Link>
                Login
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>
                Register
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/user/cart">
            <Nav.Link >
              <Badge pill bg="danger">
                2
              </Badge>
              <i class="bi bi-cart-fill"></i> 
              <span className="ms-1">Cart</span>
            </Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
