import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {  Row, Col, Form, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import ProfileImageUpload from "../ProfileImageUpload";
const UserSignUpFormComponent =({handleValueUser})=>{
    const [validated, setValidated] = useState(false);
    const [userType, setUserType] = useState('regularUser');
    function handleUserTypeChange(event) {
        setUserType(event.target.value);
        handleValueUser(event.target.value);
      }

    const onChange = ()=>{
      const password = document.querySelector("input[name=password]")
      const confirm =document.querySelector("input[name=confirmPassword]")
      if(confirm.value===password.value){
  confirm.setCustomValidity("")
      }else{
        confirm.setCustomValidity("Password do not match")
      }
    }
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    return (

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your name"
            name="name"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Your last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your last name"
            name="lastName"
          />
          <Form.Control.Feedback type="invalid">
            Please enter your last name
          </Form.Control.Feedback>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>User Type</Form.Label>
          <Form.Select aria-label="Default select example" onChange={handleUserTypeChange} value={userType}>
                <option value="def">Select User Type</option>
                <option value="regularUser">Customer</option>
                <option value="pharmacyUser">Pharmacy</option>
            </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please enter your last name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            required
            type="email"
            placeholder="Enter email"
          />
          <Form.Control.Feedback type="invalid">
            Please anter a valid email address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            required
            type="password"
            placeholder="Password"
            minLength={6}
            onChange={onChange}
          />
          <Form.Control.Feedback type="invalid">
            Please anter a valid password
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Password should have at least 6 characters
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            name="confirmPassword"
            required
            type="password"
            placeholder="Repeat Password"
            minLength={6}
            onChange={onChange}
          />
          <Form.Control.Feedback type="invalid">
            Both passwords should match
          </Form.Control.Feedback>
        </Form.Group>

        <Row className="pb-2">
          <Col>
            Do you have an account already?
            <Link to={"../Signin"}> Sign In </Link>
          </Col>
        </Row>

        <div className="col-lg-12 col-md-12 text-center">
        <button type="submit" className="default-btn">
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Submit
        </button>
        </div>
        <Alert show={true} variant="danger">
            User with that email already exists!
        </Alert>
        <Alert show={true} variant="info">
            User created
        </Alert>
      </Form>

    )
}
export default UserSignUpFormComponent;