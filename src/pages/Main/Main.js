import React, { Component } from "react";

import testImage from "./test-image.jpg";

import axios from "axios";

import Agenda from "../../components/Agenda/Agenda";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: []
    };
  }

  componentDidMount() {
    const { location } = this.props;
    if (location.pathname === "/dayone") {
      this.fetchDayOneSchedule();
    } else {
      this.fetchDayTwoSchedule();
    }
  }

  fetchDayOneSchedule = () => {
    axios.get("/data/dayone.json").then(res => {
      this.setState({ schedules: res.data });
    });
  };

  fetchDayTwoSchedule = () => {
    axios.get("/data/daytwo.json").then(res => {
      this.setState({ schedules: res.data });
    });
  };

  render() {
    const { schedules } = this.state;
    return (
      <div style={{ padding: "10px 0" }}>
      <div style={{ textAlign: "center" }}>
          <h2>Schedule</h2>
          <p>KL CON 2018</p>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "rgb(71, 104, 253, 0.8)",
              color: "#fff",
              padding: "30px",
              textAlign: "center",
              width: "100%"
            }}
          >
            02
            <br />
            <br />
            October
          </div>
          <div
            style={{
              backgroundColor: "rgb(71, 104, 253, 0.3)",
              color: "#fff",
              padding: "30px",
              textAlign: "center",
              width: "100%"
            }}
          >
            03
            <br />
            <br />
            October
          </div>
        </div>
        <Agenda schedules={schedules} />
      </div>
    );
  }
}

export default Main;
