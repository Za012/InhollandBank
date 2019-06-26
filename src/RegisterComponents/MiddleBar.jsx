import React, { PureComponent } from "react";

const styles = {
  bar:{
	background : "#E3027E",
	background : "rgba(227, 2, 126, 1)",
	position : "absolute",
	left : "0px",
	top : "100px",
	width : "100%",
	height : "6px"
  }
};

export default class TopBar extends PureComponent {
  render() {
    return (
      <div>
      <div style={styles.bar}> </div>
      </div>
      );
  }
}