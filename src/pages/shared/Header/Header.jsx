/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import './Header.css'

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img className="img-fluid mt-3" src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>

      <div className="d-flex" style={{border:'2px solid pink'}}>
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" pauseOnHover={true} gradient={true}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut a vel
          explicabo cum omnis ratione quasi quo ducimus asperiores, consequatur
          dicta modi adipisci aut quis labore debitis recusandae. Voluptate,
          laudantium!
        </Marquee>
      </div>
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
              <Nav.Link className="mx-3" href="#action1">Home</Nav.Link>
              <Nav.Link className="mx-3" href="#action2">About</Nav.Link>
              <Nav.Link className="mx-3" href="#action2">Career</Nav.Link>
            </Nav>
              
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
