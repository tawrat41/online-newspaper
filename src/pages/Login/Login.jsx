import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './logister.css';

const Login = () => {
  return (
    <Container className="w-25 mx-auto" id="login-register-box">
      <h2 className="text-center mb-4">Please Login</h2>
      <hr className="mb-4" />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="btn btn-secondary w-100 mt-4" variant="primary" type="submit">
          Login
        </Button>
        <Form className="text mt-2">
          New to this website? Please <Link to="/register">Register</Link>
        </Form>
      </Form>
    </Container>
  );
};

export default Login;
