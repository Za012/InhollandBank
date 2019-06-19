import React, { PureComponent } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Picture1 from '../Resources/img/HomeRobot.jpg';
import Picture2 from '../Resources/img/HomeFami.jpg';
import Picture3 from '../Resources/img/HomeDeveloper.jpg';



const styles = {
  wheel:{
    background : "#E3027E",
    position : "absolute",
    'padding-left' : "0px",
    'padding-top' : "5px",
    'padding-bottom' : "5px",
    'margin-top' : "100px",
    width : "100%",
  },
  image:{
    width : "100%",
    height: "400px",
    overflow: "hidden",
    'object-fit': "cover"
  },
  h3:{
    'foreground-color': "black"
  },
  p:{
     'foreground-color': "black"
  }
};

export default class TopBar extends PureComponent {
  render() {
    return (
      <Carousel style={styles.wheel}>
        <Carousel.Item>
          <img
            src={Picture2}
            alt="First slide"
            style={styles.image}
          />
          <Carousel.Caption>
            <h3 >Spend time with your family</h3>
            <p >Always know when you have to save, or when you can spend.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={Picture3}
            alt="Second slide"
            style={styles.image}

          />
          <Carousel.Caption>
            <h3>We will keep you secure</h3>
            <p>With our motivated, always improving student developers, you have nothing to worry about.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={Picture1}
            alt="Third slide"
            style={styles.image}
          />
          <Carousel.Caption>
            <h3>Always receive the assistance you need</h3>
            <p>No matter day or night, our smart assistant Juvo is always here to help you.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}