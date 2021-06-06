import React from "react";
import { Navbar, Button, Container } from "react-bootstrap";
import { FiLogIn } from "react-icons/fi";
import "./index.css";

export default function Header() {
  return (
    <React.Fragment>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/assets/blonk-blue.png" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
            {/* <Form inline className="">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            <div className="ml-auto">
              <Button className="navbarLoginBtn">
                <FiLogIn />
                Login
              </Button>
              <img src="/assets/user.png" className="userImage" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
