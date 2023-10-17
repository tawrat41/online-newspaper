import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './logister.css';

const Register = () => {
  return (
    <Container className="w-25 mx-auto" id="login-register-box">
      <h2 className="text-center mb-4">Please Register</h2>
      <hr className="mb-4" />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="" placeholder="Photo URL" />
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox" id="tnc">
          <Form.Check type="checkbox" label="Accept terms & conditions"  />
        </Form.Group>
        <Button className="btn btn-secondary w-100 mt-4" variant="primary" type="submit">
          Register
        </Button>
        <Form className="text mt-2">
          Already have an account? Please <Link to="/login">Login</Link>
        </Form>
      </Form>
    </Container>
  );
};

export default Register;
