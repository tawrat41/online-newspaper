/* eslint-disable no-unused-vars */
import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Qzone from "../pages/Qzone/Qzone";

const RightNav = () => {
  return (
    <div>
      <h3 className="text-center my-2">Login with</h3>
      <Button className="my-2" variant="outline-secondary">
        <FaGoogle /> Login with Google
      </Button>
      <br />
      <Button className="mb-5" variant="outline-success">
        <FaGithub /> Login with GitHub
      </Button>

        <h3>Find Us On</h3>
      <ListGroup>
        <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
        <ListGroup.Item><FaLinkedinIn/>LinkedIn</ListGroup.Item>
        <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
      </ListGroup>
      <Qzone></Qzone>
    </div>
  );
};

export default RightNav;
