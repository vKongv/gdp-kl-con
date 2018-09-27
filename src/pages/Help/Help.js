import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Call from "@material-ui/icons/Call";

import wawa from "./wawa.png";
import yingying from "./yingying.png";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    margin: "auto",
    backgroundColor: theme.palette.background.paper
  }
});

const wifis = [
  {
    title: "GDP KL Office",
    name: "5Hz-M",
    password: "fifa14tojs"
  },
  {
    title: "Slate @ The Row",
    name: "WiFi",
    password: "Slate444648"
  },
];

const contacts = [
  {
    name: "Wawa",
    avatar: wawa,
    phoneNumber: "0166998990"
  },
  {
    name: "Ying Ying",
    avatar: yingying,
    phoneNumber: "0163288386"
  }
];

const ContactUs = ({ classes }) => (
  <div
    style={{
      padding: "16px 32px"
    }}
  >
    <h3>Need Wifi?</h3>
    <div className={classes.root}>
      <List
        style={{
          marginBottom: "8px"
        }}
      >
        {wifis.map(wifi => (
          <ListItem divider>
            <ListItemText
              primary={wifi.title}
              secondary={
                <span>
                  <span style={{ display: "block" }}>{wifi.name}</span>
                  <span style={{ display: "block" }}>{wifi.password}</span>
                </span>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
    <h3>Need help?</h3>
    <p>You can reach out our <b>GDPedia</b> or contact one of our committees here:</p>
    <div className={classes.root}>
      <List
        style={{
          marginBottom: "8px"
        }}
      >
        {contacts.map(contact => (
          <ListItem dense>
            <Avatar alt={contact.name} src={contact.avatar} />
            <ListItemText primary={contact.name} />
            <ListItemSecondaryAction>
              <a href={`tel:${contact.phoneNumber}`}>
                <Call color="secondary" />
              </a>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
    <div>
      <Button
        fullWidth
        variant="contained"
        component={Link}
        to="/"
        color="primary"
      >
        Back to schedule page
      </Button>
    </div>
  </div>
);

export default withStyles(styles)(ContactUs);
