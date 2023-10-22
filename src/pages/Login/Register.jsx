import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './logister.css';
import Header from "../shared/Header/Header";
import { AuthContext } from "../../providers/AuthProviders";
import { useState } from "react";

const Register = () => {

  const {createUSer} = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false)

  const handleRegister = event =>{
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, email, photo,password);

    createUSer(email, password)
    .then(result =>{
      const createdUser = result.user;
      console.log(createdUser);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  const handleAccepted = event => {
    setAccepted(event.target.checked);
  }



  return (
    <>
    {/* <Header></Header> */}
    <Container className="w-25 mx-auto" id="login-register-box">
      <h2 className="text-center mb-4">Please Register</h2>
      <hr className="mb-4" />
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" name='name' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="" placeholder="Photo URL" name='photo'/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email'/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password'/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox" id="tnc">
          <Form.Check name="accept"  onClick={handleAccepted}  type="checkbox" label={<>Accept <Link to='/terms'>Terms & Condition</Link></>}  />
        </Form.Group>
        <Button className="btn btn-secondary w-100 mt-4" variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
        <Form className="text mt-2">
          Already have an account? Please <Link to="/login">Login</Link>
        </Form>
      </Form>
    </Container>
    </>
  );
};

export default Register;
