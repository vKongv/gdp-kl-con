import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    );
  }
}

export default Main;
