/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaUser, FaUserCircle } from "react-icons/fa";

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

      <div className="d-flex" style={{ border: "2px solid pink" }}>
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" pauseOnHover={true} gradient={true}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut a vel
          explicabo cum omnis ratione quasi quo ducimus asperiores, consequatur
          dicta modi adipisci aut quis labore debitis recusandae. Voluptate,
          laudantium!
        </Marquee>
      </div>
      
    </Container>
  );
};

export default Header;
