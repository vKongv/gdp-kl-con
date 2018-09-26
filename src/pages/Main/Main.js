import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Typography from '@material-ui/core/Typography';
import LooksOne from '@material-ui/icons/LooksOne'
import LooksTwo from '@material-ui/icons/LooksTwo'
import Looks3 from '@material-ui/icons/Looks3'
import Looks4 from '@material-ui/icons/Looks4'
import Looks5 from '@material-ui/icons/Looks5'

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
const dayThreePath = "/daythree";
const dayFourPath = "/dayfour";
const dayFivePath = "/dayfive";

const classes = theme => {
  console.log(theme);
  return {
    navBar: {
      bottom: "-2px",
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
      color: theme.palette.secondary.main,
    },
    navLabel: {
      color: '#fff',
      fontSize: theme.typography.subheading.fontSize
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
    this.fetchSchedule(location.pathname);
  }

  isDayOne = (pathname) => {
    return pathname === dayOnePath;
  };

  fetchSchedule = (pathname) => {
    let apiPath;
    switch(pathname) {
      case dayOnePath: 
        apiPath = '/data/dayone.json';
        break;
      case dayTwoPath: 
        apiPath = '/data/daytwo.json';
        break;
      default:
        break;
    }
    axios.get(apiPath).then(res => {
      this.setState({ schedules: res.data });
    });
  }

  handleChange = (event, value) => {
    const { history, location } = this.props;
    if (value !== location.pathname) {
      history.push(value);
      this.fetchSchedule(value);
    }
  };

  generateDayString = () => {
    const { location } = this.props;
    switch(location.pathname) {
      case dayOnePath: return 'Day One';
      case dayTwoPath: return 'Day Two';
      default: return 'Ah you must be from the future';
    }
  }

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
          <Typography variant="display2" gutterBottom align="center" color="primary">
            {this.generateDayString()}
          </Typography>
          <div style={{ marginBottom: '60px' }}>
          <Agenda schedules={schedules} />
          </div>
        <BottomNavigation
          className={classes.navBar}
          value={location.pathname}
          onChange={this.handleChange}
        >
          <BottomNavigationAction
            label="Day 1"
            value={dayOnePath}
            classes={{ label: classes.navLabel }}
            icon={<LooksOne nativeColor="#fff" fontSize="default"/>}
          />
          <BottomNavigationAction
            label="Day 2"
            value={dayTwoPath}
            classes={{ label: classes.navLabel }}
            icon={<LooksTwo color="secondary" fontSize="large"/>}
          />
          <BottomNavigationAction
            label="Day 3"
            value={dayThreePath}
            classes={{ label: classes.navLabel }}
            icon={<Looks3 nativeColor="#fff" fontSize="large"/>}
          />
          <BottomNavigationAction
            label="Day 4"
            value={dayFourPath}
            classes={{ label: classes.navLabel }}
            icon={<Looks4 nativeColor="#fff" fontSize="large" />}
          />
          <BottomNavigationAction
            label="Day 5"
            value={dayFivePath}
            classes={{ label: classes.navLabel }}
            icon={<Looks5 nativeColor="#fff" fontSize="large"/>}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(classes)(Main);
