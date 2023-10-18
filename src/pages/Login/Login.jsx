import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './logister.css';
import { AuthContext } from "../../providers/AuthProviders";


const Login = () => {

  const {signIn} = useContext(AuthContext);

  const navigate = useNavigate()

  const handleLogin = event =>{
    event.preventDefault();
    
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email ,password);

    signIn(email, password)
    .then(result =>{
      const loggedUser = result.user;
      // console.log(loggedUser);
      navigate('/');
      

    })
    .catch(error =>{
      console.log(error);
    })

  }

  return (
    <Container className="w-25 mx-auto" id="login-register-box">
      <h2 className="text-center mb-4">Please Login</h2>
      <hr className="mb-4" />
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email'/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password'/>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
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