import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Button from "@material-ui/core/Button";

import Filter1 from "@material-ui/icons/Filter1";
import Filter2 from "@material-ui/icons/Filter2";
import Filter3 from "@material-ui/icons/Filter3";
import Filter4 from "@material-ui/icons/Filter4";
import Filter5 from "@material-ui/icons/Filter5";

import Event from "@material-ui/icons/Event";
import LocationOn from "@material-ui/icons/LocationOn";
import Help from "@material-ui/icons/ContactSupport";

import Agenda from "../../components/Agenda/Agenda";
import { Typography } from "@material-ui/core";

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
    emergencyButton: {
      width: "48px",
      height: "48px",
      backgroundColor: theme.palette.grey[100],
    },
    emergencyButtonContainer: {
      bottom: "78px",
      right: "18px",
      left: "auto",
      zIndex: "2",
      top: "auto",
      position: "fixed",
      color: "#fff"
    },
    title: {
      color: "#000",
      marginLeft: "4px"
    },
    extraInfoContainer: {
      backgroundColor: theme.palette.background.default,
      padding: "16px 38px",
      display: "flex",
      justifyContent: "space-around"
    },
    extraInfoContent: {
      display: "flex",
      alignItems: "center"
    },
    extraInfoLocation: {
      color: "#000 !important"
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
      backgroundColor: "#fa0079"
    }
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      venue: {},
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
        5: dayFivePath
      };
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
      date: data.date,
      venue: data.venue,
      schedules: data.schedules
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
    const { schedules, venue, date } = this.state;
    return (
      <div>
        <div className={classes.extraInfoContainer}>
          <div className={classes.extraInfoContent}>
            <Event nativeColor="#000" />
            <Typography variant="body1" classes={{ body1: classes.title }}>
              {date}
            </Typography>
          </div>
          <div className={classes.extraInfoContent}>
            <LocationOn nativeColor="#000" />
            <Typography variant="body1" classes={{ body1: classes.title }}>
              <a
                className={classes.extraInfoLocation}
                href={`https://maps.google.com/?q=${venue.lng},${venue.lat}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {venue.name}
              </a>
            </Typography>
          </div>
        </div>
        <div style={{ marginBottom: "60px" }}>
          <Agenda schedules={schedules} />
        </div>
        <div className={classes.emergencyButtonContainer}>
          <Button
            component={Link}
            to="/help"
            variant="fab"
            aria-label="Need Help?"
            className={classes.emergencyButton}
          >
            <Help fontSize="default" />
          </Button>
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
