import React, { Component } from "react";
import "./Home.css";
import TopBar from "./HomeComponents/TopBar";
import PictureWheel from "./HomeComponents/PictureWheel";
import Cards from "./HomeComponents/Cards";
import _ from "lodash";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


const styles = {
  jumbo:{
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
  }
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chores: [
        {
          id: 1,
          name: "Take out trash",
          description: "Trash removal from both bins",
          completed: true
        },
        {
          id: 2,
          name: "Do the Dishes",
          description: "Wash and dry the dishes",
          completed: false
        },
        {
          id: 3,
          name: "Walk the Dog",
          description: "Take dog around the block 2 times",
          completed: true
        }
      ]
    };
  }

  handleOnClick = id => {
    const chores = _.cloneDeep(this.state.chores);

    for (let chore of chores) {
      if (chore.id === id) {
        chore.completed = !chore.completed;
        break;
      }
    }

    this.setState({ chores });
  };

  render() {
    const { chores } = this.state;

    return (
    <div className="Header">
		<TopBar/>
		<PictureWheel/>



		<Cards/>
	</div>
    )
  }
}

export default Home