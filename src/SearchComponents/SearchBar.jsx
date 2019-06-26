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
    top : "300px",
    width : "70%",
    'border-radius' : "8px",
    '-moz-border-radius' : "8px",
    '-webkit-border-radius' : "8px",
  },
};

export default class TopBar extends Component {
  constructor() {
    super();
  } 

  render() {
    return (
      <div>
      <Form style={styles.Form}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridQuery">
            <Form.Label>Criteria</Form.Label>
            <Form.Control as="select" name="query" onChange={event => this.handleChange(event)}>
              <option value="username">Username</option>
              <option value="email">Email</option>
              <option value="roles">Role</option>
              <option value="firstName">First name</option>
              <option value="lastName">Last name</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridValue">
            <Form.Label>Value</Form.Label>
            <Form.Control type="text" name="value" placeholder="Enter search value" onChange={event => this.handleChange(event)} />
          </Form.Group>
        </Form.Row>

        <Button variant="success" type="submit">
          Search
        </Button>
      </Form>
      </div>
);
}
}