import React, { Component } from "react";
import "./Home.css";
import TopBar from "./HomeComponents/TopBar";
import PictureWheel from "./HomeComponents/PictureWheel";
import Cards from "./HomeComponents/Cards";
import _ from "lodash";

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
    );
  }
}

export default Home;