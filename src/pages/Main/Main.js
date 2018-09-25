import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOneSchedule: []
    };
  }

  componentDidMount() {
    this.fetchDayOneSchedule();
  }

  fetchDayOneSchedule = () => {
    axios.get("/data/dayone.json").then(res => {
      this.setState({ dayOneSchedule: res.data });
    });
  };

  render() {
    console.log(this.state);
    return (
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    );
  }
}

export default Main;
