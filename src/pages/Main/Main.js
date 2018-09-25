import React, { Component } from "react";
import axios from "axios";

import grid from "./grid_seamless.png";
import Agenda from "../../components/Agenda/Agenda";

const activeDayStyle = {
  backgroundColor: "rgba(71, 104, 253, 0.8)",
  color: "#fff",
  padding: "30px",
  textAlign: "center",
  width: "100%",
  cursor: "pointer"
};

const inactiveDayStyle = {
  backgroundColor: "rgba(71, 104, 253, 0.3)",
  color: "#fff",
  padding: "30px",
  textAlign: "center",
  width: "100%",
  cursor: "pointer"
};

const dayOnePath = "/dayone";
const dayTwoPath = "/daytwo";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: []
    };
  }

  componentDidMount() {
    if (this.isDayOne()) {
      this.fetchDayOneSchedule();
    } else {
      this.fetchDayTwoSchedule();
    }
  }

  isDayOne = () => {
    const { location } = this.props;
    return location.pathname === dayOnePath;
  };

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

  handleOnDayOneClick = () => {
    const { history } = this.props;
    history.push(dayOnePath);
    this.fetchDayOneSchedule();
  };

  handleOnDayTwoClick = () => {
    const { history } = this.props;
    history.push(dayTwoPath);
    this.fetchDayTwoSchedule();
  };

  render() {
    const { schedules } = this.state;
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            backgroundPosition: "right 1px top -4px",
            backgroundRepeat: "repeat",
            backgroundImage: `url(${grid})`,
            height: "100%"
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              height: "100%",
              paddingTop: "10px",
              paddingBottom: "10px"
            }}
          >
            <h2>Schedule</h2>
            <p>KL CON 2018</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={this.isDayOne() ? activeDayStyle : inactiveDayStyle}
            onClick={this.handleOnDayOneClick}
          >
            02
            <br />
            <br />
            October
          </div>
          <div
            style={!this.isDayOne() ? activeDayStyle : inactiveDayStyle}
            onClick={this.handleOnDayTwoClick}
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
