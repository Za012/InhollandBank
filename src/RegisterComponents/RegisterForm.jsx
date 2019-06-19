import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const styles = {
  Form:{
    background : "#FDE4F2",
    'border-style' : "Solid",
    'border-color' : "#F9CEE7",
    'border-width' : "1px",
    position : "absolute",
    padding: "20px",
    left : "15%",
    top : "250px",
    width : "70%",
    'border-radius' : "8px",
    '-moz-border-radius' : "8px",
    '-webkit-border-radius' : "8px",
  },
};

export default class TopBar extends Component {
  render() {
    return (
      <div>
      <Form style={styles.Form}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridRole">
            <Form.Label>Role</Form.Label>
            <Form.Control as="select" name="roles" onChange={event => this.props.handleChange(event)}>
              <option>ROLE_CUSTOMER</option>
              <option>ROLE_EMPLOYEE</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" name="firstName" placeholder="Enter first name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" name="lastName" placeholder="Enter last name" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" name="phone" placeholder="Enter phone number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridBirth">
            <Form.Label>Birthday</Form.Label>
            <Form.Control type="date" name="birthday" placeholder="Enter birthday" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
         <Form.Group as={Col} controlId="formGridUserame">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" placeholder="Enter username" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
           </Form.Group>
        </Form.Row>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      </div>
);
}
}