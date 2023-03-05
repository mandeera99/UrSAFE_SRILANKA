import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Fragment } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

function SignUp() {
    const [validated, setValidated] = useState(false);

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
            <Fragment>
                <div>

                    {/* <!-- Inner Banner --> */}
        <div className="inner-banner inner-bg7 ">
            <div className="container">
                <div className="inner-title">
                    <h3>Sign Up</h3>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>Sign Up</li>
                    </ul>
                </div>
            </div>
            <div className="inner-banner-shape">
                <div className="shape1">
                    <img src="assets/img/inner-banner/inner-banner-shape1.png" alt="Images"/>
                </div>
                <div className="shape2">
                    <img src="assets/img/inner-banner/inner-banner-shape2.png" alt="Images"/>
                </div>
            </div>
        </div>
        {/* <!-- Inner Banner End -->
           

        <!-- Sign Up Area --> */}
        <div classNameName="sign-up-area pt-100 pb-70 ">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="user-all-form">
                            <div className="contact-form">
                                <div className="section-title text-center">
                                    {/* <span className="span-bg">Sign Up</span> */}
                                    <h2>Create an Account!</h2>
                                </div>
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
              <Form.Select aria-label="Default select example">
                    <option>Select User Type</option>
                    <option value="regularUser">Customer</option>
                    <option value="pharmacyUser">Pharmacy</option>
                    <option value="adminUser">Admin</option>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Sign Up Area End --> */}

                </div>
            </Fragment>
        )
    }

export default SignUp;