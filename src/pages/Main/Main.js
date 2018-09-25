import React, { Component } from "react";

import axios from "axios";

import Agenda from '../../components/Agenda/Agenda';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: []
    };
  }

  componentDidMount() {
    const { location } = this.props;
    if (location.pathname === '/dayone') {
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
      <div style={{ padding: '0' }}>
        <Agenda schedules={schedules} />
      </div>
    );
  }
}

export default Main;
