import React, { PureComponent } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import CardHouse from '../Resources/img/CardHouse.jpg';
import LogoTitle from '../Resources/img/LogoTitle.png';
import CardLaptop from '../Resources/img/CardLaptop.jpg';
import CardMoney from '../Resources/img/CardMoney.jpg';




const styles = {
  backCard1:{
    background : "#F2F2F2",
    background : "rgba(255, 255, 255, 1)",
    'border-style' : "Solid",
    'border-color' : "#B7B7B7",
    'border-color' : "rgba(183, 183, 183, 1)",
    'border-width' : "1px",
    'border-top-style': "solid",
    'border-top-width': "40px",
    'border-top-color': "#E3027E",
    position : "absolute",
    left : "64px",
    top : "582px",
    width : "25%",
    height : "553px",
    'border-radius' : "16px",
    '-moz-border-radius' : "16px",
    '-webkit-border-radius' : "16px",
  },
    backCard2:{
    background : "#F2F2F2",
    background : "rgba(255, 255, 255, 1)",
    'border-style' : "Solid",
    'border-color' : "#B7B7B7",
    'border-color' : "rgba(183, 183, 183, 1)",
    'border-width' : "1px",
    'border-top-style': "solid",
    'border-top-width': "40px",
    'border-top-color': "#E3027E",
    position : "absolute",
    left : "35%",
    top : "582px",
    width : "30%",
    height : "573px",
    'border-radius' : "16px",
    '-moz-border-radius' : "16px",
    '-webkit-border-radius' : "16px",
  },
    backCard3:{
    background : "#F2F2F2",
    background : "rgba(255, 255, 255, 1)",
    'border-style' : "Solid",
    'border-color' : "#B7B7B7",
    'border-color' : "rgba(183, 183, 183, 1)",
    'border-width' : "1px",
    'border-top-style': "solid",
    'border-top-width': "40px",
    'border-top-color': "#E3027E",
    position : "absolute",
    left : "70%",
    top : "582px",
    width : "25%",
    height : "543px",
    'border-radius' : "16px",
    '-moz-border-radius' : "16px",
    '-webkit-border-radius' : "16px",
  },
  cardImage:{
    width: "100%"
  }
};

export default class TopBar extends PureComponent {
  render() {
    return (
      <div>
        <Card style={styles.backCard1}>
        <Card.Img variant="top" src={CardHouse} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={styles.backCard2}>
        <Card.Img variant="top" src={CardLaptop} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={styles.backCard3}>
        <Card.Img variant="top" src={CardMoney} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>


      </div>
      );
  }
}