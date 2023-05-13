import React from 'react'
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";

const UserProfilePage = () => {
  const [validated, setValidated] = useState(false);

  const onChange = () => {
      const password = document.querySelector("input[name=password]")
      const confirm = document.querySelector("input[name=confirmPassword]")
      if(confirm.value === password.value) {
          confirm.setCustomValidity("")
      } else {
          confirm.setCustomValidity("Passwords do not match")
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
    <Container >
    <Row className="mt-5 justify-content-md-center">
      <Col md={6}>
        <h1>Profile</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Your name</Form.Label>
            <Form.Control
              required
              type="text"
              defaultValue="Anjana"
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
              defaultValue="Biju"
              name="lastName"
            />
            <Form.Control.Feedback type="invalid">
              Please enter your last name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            disabled
              name="email"
              value="anjana@gmail.com"  
            />
            <Form.Control.Feedback type="invalid">
              Please anter a valid email address
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label> Phone</Form.Label>
            <Form.Control
              required
              defaultValue=""
              name="text"
              placeholder="Enter your phone number"  
            />
            <Form.Control.Feedback type="invalid">
              Please enter your phone number
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              defaultValue=""
              name="text"
              placeholder="Enter your Street Name & House Number"  
            />
            <Form.Control.Feedback type="invalid">
            Enter your Street Name & House Number
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control
              required
              defaultValue=""
              name="text"
              placeholder="Enter your Country"  
            />
            <Form.Control.Feedback type="invalid">
            Enter your Country
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicZip">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              required
              defaultValue=""
              name="text"
              placeholder="Enter your Zip Code"  
            />
            <Form.Control.Feedback type="invalid">
            Enter your Zip Code
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label> City</Form.Label>
            <Form.Control
              required
              defaultValue=""
              name="text"
              placeholder="Enter your City "  
            />
            <Form.Control.Feedback type="invalid">
            Enter your City
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicState">
            <Form.Label>State</Form.Label>
            <Form.Control
              required
              defaultValue=""
              name="text"
              placeholder="Enter your State "  
            />
            <Form.Control.Feedback type="invalid">
            Enter your State
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

          
          <Button variant='primary' type="submit">
            Update
          </Button>
          <Alert show={true} variant="danger">
              User with that email already exists!
          </Alert>
          <Alert show={true} variant="info">
              User updated
          </Alert>
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

export default UserProfilePage
