import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProviders";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-dark mb-5 my-4" id="navbar">
        <Container fluid>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="mx-3" href="">
                <Link to="/category/0">Home</Link>
              </Nav.Link>
              <Nav.Link className="mx-3" href="#action2">
                About
              </Nav.Link>
              <Nav.Link className="mx-3" href="#action2">
                Career
              </Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link href="#deets">
                  {" "}
                  <FaUserCircle style={{ fontSize: "", margin: "2px" }} />{" "}
                  {user.displayName}
                </Nav.Link>
              )}
              {user ? (
                <Button className="btn btn-secondary">Logout</Button>
              ) : (
                <Link to="/login"><Button className="btn btn-secondary">Login</Button></Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
