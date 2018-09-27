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
    backgroundColor: theme.palette.background.paper
  }
});

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
      padding: "0 32px"
    }}
  >
    <h3>Need help? Contact one of our committees here:</h3>
    <div className={classes.root}>
      <List>
        {contacts.map(contact => (
          <ListItem dense button>
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
      <Button component={Link} to="/" color="primary">
        Back
      </Button>
    </div>
  </div>
);

export default withStyles(styles)(ContactUs);
