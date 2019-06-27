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

function SearchBar(props){
    return (
      <div>
      <Form style={styles.Form} onSubmit={props.handleForm}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridQuery">
            <Form.Label>Criteria</Form.Label>
            <Form.Control as="select" name="query" onChange={event => props.handleChange(event)}>
              <option name="username">Username</option>
              <option name="email">Email</option>
              <option name="roles">Role</option>
              <option name="firstName">First name</option>
              <option name="lastName">Last name</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridValue">
            <Form.Label>Value</Form.Label>
            <Form.Control type="text" name="value" placeholder="Enter search value" onChange={event => props.handleChange(event)} />
          </Form.Group>
        </Form.Row>

        <Button variant="success" type="submit">
          Search
        </Button>
      </Form>
      </div>
);
}