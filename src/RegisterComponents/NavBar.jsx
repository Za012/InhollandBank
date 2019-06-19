import React, { PureComponent } from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

const styles = {
  Nav:{
    position : "absolute",
    left : "0px",
    top : "120px",
    width : "100%",
    height : "6px",
  },
};

export default class TopBar extends PureComponent {
  render() {
    return (
      <div>
      <Nav fill variant="tabs" defaultActiveKey="/Employee/RegisterUser" style={styles.Nav}>
        <Nav.Item>
          <Nav.Link href="/Employee/RegisterUser">Register User</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Employee/Search">Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Employee/RegisterAccount" disabled>
          Register Account
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
      );
  }
}