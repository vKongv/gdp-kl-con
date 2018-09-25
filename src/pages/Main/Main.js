import Button from "@material-ui/core/Button";
import React, { Component, Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

  constructTime = (time) => {
    return time.split(' ');
  }

  render() {
    const { dayOneSchedule } = this.state;
    return (
      <div style={{ padding: '0' }}>
        <List>
          {dayOneSchedule.map((schedule, index) => (
              <Fragment key={index}>
                <ListItem style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                  <div style={{ flexShrink: '0', padding: '0 28px', textAlign: 'center' }}>
                    <p>{this.constructTime(schedule.time)[0]}</p>
                    <p>{this.constructTime(schedule.time)[1]}</p>
                  </div>
                  <ListItemText
                    primary={schedule.title}
                    secondary={
                      <div>
                        {schedule.speakers.length > 0 && <p>{schedule.speakers.join(' • ')}</p>}
                        {schedule.note && <p style={{ color: 'rgb(71, 104, 253, 0.8)' }}>{schedule.note}</p>}
                      </div>
                    } 
                  />
                </ListItem>

                <Divider style={{ margin: '0 20px' }} />
              </Fragment>
          ))}
        </List>
      </div>
    );
  }
}

export default Main;
