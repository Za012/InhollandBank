import Modal from 'react-bootstrap/Modal'
import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Cookies from 'universal-cookie';
import ReactTable from 'react-table';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopBar from "./HomeComponents/TopBar";
import NavBar from "./SearchComponents/NavBar";
import SearchBar from "./SearchComponents/SearchBar";
import MiddleBar from "./RegisterComponents/MiddleBar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

class modal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}