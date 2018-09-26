import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import Filter1 from "@material-ui/icons/Filter1";
import Filter2 from "@material-ui/icons/Filter2";
import Filter3 from "@material-ui/icons/Filter3";
import Filter4 from "@material-ui/icons/Filter4";
import Filter5 from "@material-ui/icons/Filter5";

import grid from "./grid_seamless.png";
import Agenda from "../../components/Agenda/Agenda";

const dayOnePath = "/dayone";
const dayTwoPath = "/daytwo";
const dayThreePath = "/daythree";
const dayFourPath = "/dayfour";
const dayFivePath = "/dayfive";

const classes = theme => {
  return {
    navBar: {
      bottom: "0px",
      height: "60px",
      right: "0px",
      zIndex: "2",
      // width: "auto",
      top: "auto",
      backgroundColor: theme.palette.primary.main,
      position: "fixed",
      width: "100%",
      color: "#fff"
    },
    title: {
      color: theme.palette.secondary.main
    },
    navRoot: {
      padding: "10px",
      minWidth: "0"
    },
    navLabel: {
      color: "#fff"
    },
    navSelected: {
      color: "#fff",
      backgroundColor: '#fa0079',
    }
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: []
    };
  }

  componentDidMount() {
    const { location } = this.props;
    if (location.pathname === "/") {
      this.redirectToCurrentDate();
    } else {
      this.fetchSchedule(location.pathname);
    }
  }

  redirectToCurrentDate = () => {
    const { history } = this.props;
    const today = new Date();
    let newPath = dayOnePath;
    // If it is October
    if (today.getMonth() === 9) {
      const todayDate = today.getDate();
      const dateToPath = {
        1: dayOnePath,
        2: dayTwoPath,
        3: dayThreePath,
        4: dayFourPath,
        5: dayFivePath,
      }
      newPath = dateToPath[todayDate] || newPath;
    }
    history.replace(newPath);
    this.fetchSchedule(newPath);
  };

  isDayOne = pathname => {
    return pathname === dayOnePath;
  };

  fetchSchedule = pathname => {
    let data = [];
    switch (pathname) {
      case dayOnePath:
        data = require("../../data/dayone.json");
        break;
      case dayTwoPath:
        data = require("../../data/daytwo.json");
        break;
      case dayThreePath:
        data = require("../../data/daythree.json");
        break;
      case dayFourPath:
        data = require("../../data/dayfour.json");
        break;
      case dayFivePath:
        data = require("../../data/dayfive.json");
        break;
      default:
        break;
    }
    this.setState({
      schedules: data
    });
  };

  handleChange = (event, value) => {
    const { history, location } = this.props;
    if (value !== location.pathname) {
      history.push(value);
      this.fetchSchedule(value);
    }
  };

  render() {
    const { classes, location } = this.props;
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
        <div style={{ marginBottom: "60px" }}>
          <Agenda schedules={schedules} />
        </div>
        <BottomNavigation
          className={classes.navBar}
          value={location.pathname}
          onChange={this.handleChange}
          showLabels
        >
          <BottomNavigationAction
            label="Day"
            value={dayOnePath}
            classes={{
              label: classes.navLabel,
              selected: classes.navSelected,
              root: classes.navRoot
            }}
            icon={<Filter1 nativeColor="#fff" />}
          />
          <BottomNavigationAction
            label="Day"
            value={dayTwoPath}
            classes={{
              label: classes.navLabel,
              selected: classes.navSelected,
              root: classes.navRoot
            }}
            icon={<Filter2 nativeColor="#fff" />}
          />
          <BottomNavigationAction
            label="Day"
            value={dayThreePath}
            classes={{
              label: classes.navLabel,
              selected: classes.navSelected,
              root: classes.navRoot
            }}
            icon={<Filter3 nativeColor="#fff" />}
          />
          <BottomNavigationAction
            label="Day"
            value={dayFourPath}
            classes={{
              label: classes.navLabel,
              selected: classes.navSelected,
              root: classes.navRoot
            }}
            icon={<Filter4 nativeColor="#fff" />}
          />
          <BottomNavigationAction
            label="Day"
            value={dayFivePath}
            classes={{
              label: classes.navLabel,
              selected: classes.navSelected,
              root: classes.navRoot
            }}
            icon={<Filter5 nativeColor="#fff" />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(classes)(Main);
