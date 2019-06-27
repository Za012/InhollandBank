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
    padding: "0px",
    position : "absolute",
    left : "64px",
    top : "520px",
    width : "25%",
    height : "553px",
    'border-radius' : "10px",
    '-moz-border-radius' : "16px",
    '-webkit-border-radius' : "16px",
  },
    backCard2:{
    position : "absolute",
    left : "35%",
    top : "520px",
    width : "30%",
    height : "573px",
    'border-radius' : "10px",
    '-moz-border-radius' : "16px",
    '-webkit-border-radius' : "16px",
        padding: "0px",
    'margin-bottom': "40px"

  },
    backCard3:{
    position : "absolute",
    left : "70%",
    top : "520px",
    width : "25%",
    height : "543px",
    'border-radius' : "10px",
    '-moz-border-radius' : "16px",
    '-webkit-border-radius' : "16px",
    padding: "0px",

  },
  cardImage:{
    width: "100%",
    'border-radius' : "0px",
    '-moz-border-radius' : "0px",
    '-webkit-border-radius' : "0px",
  },
  cardHeader:{
    'background-color' : "#E3027E",
    'border-top-left-radius' : "16px",
    '-moz-border-top-left-radius' : "16px",
    '-webkit-border-top-left-radius' : "16px",
    'border-top-right-radius' : "16px",
    '-moz-border-top-right-radius' : "16px",
    '-webkit-border-top-right-radius' : "16px",
    'font-size': "20px",
    'color': "white"
  }
};

export default class TopBar extends PureComponent {
  render() {
    return (
      <div>
        <Card style={styles.backCard1}>
        <Card.Header style={styles.cardHeader}>Featured</Card.Header>
        <Card.Img variant="top" src={CardHouse} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>Investing in the future</Card.Title>
            <Card.Text>
            Are you about to make a big purchase? Or still saving to reach your dreams? With IHB Investors,
            you can be sure your money won't lose value.
            </Card.Text>
          <Button variant="primary">Check it out!</Button>
          </Card.Body>
        </Card>

        <Card style={styles.backCard2}>
         <Card.Header style={styles.cardHeader}>Good to know</Card.Header>
        <Card.Img variant="top" src={CardLaptop} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>Safety guaranteerd</Card.Title>
            <Card.Text>
            We take pride in our hard working employees. They are always following the latest updates on security, to make sure your data is safe!
            </Card.Text>
          <Button variant="primary">More info</Button>
          </Card.Body>
        </Card>

        <Card style={styles.backCard3}>
         <Card.Header style={styles.cardHeader}>Traveling soon?</Card.Header>
        <Card.Img variant="top" src={CardMoney} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>Creditcard fraud</Card.Title>
            <Card.Text>
            We all know we should not forget to bring a toothbrush and underwear on holiday. 
            We believe knowledge to prevent Creditcard fraud, should be added to this list.
            Make sure you are prepared before you go!
            </Card.Text>
          <Button variant="primary">Stay safe on holiday</Button>
          </Card.Body>
        </Card>


      </div>
      );
  }
}