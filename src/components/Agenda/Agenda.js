import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  time: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: '16px',
  }
})

const Agenda = ({ schedules, classes }) => {
  const listTextStyle = {display: 'block', margin: '14px 0'};
  return (
  <List>
    {schedules.map((schedule, index) => (
      <Fragment key={index}>
        <ListItem style={{ paddingTop: "30px", paddingBottom: "30px" }}>
          <div
            style={{ flexShrink: "0", padding: "0 16px", textAlign: "center", flex: "0 0 58px"}}
          >
            <Typography variant="body1" gutterBottom color="secondary" classes={{body1: classes.time}}>
              {schedule.time}
            </Typography>
          </div>
          <ListItemText
            primary={
              <Typography variant="title" gutterBottom color="primary">
                {schedule.title}
              </Typography>
            }
            // primary={<span style={listTextStyle}>{schedule.title}</span>}
            secondary={
              <span>
                {schedule.speakers.length > 0 && (
                  <span style={listTextStyle}>{schedule.speakers.join(" • ")}</span>
                )}
                {schedule.note && (
                  <span style={{ ...listTextStyle, color: "rgba(71, 104, 253, 0.8)" }}>
                    {schedule.note}
                  </span>
                )}
              </span>
            }
          />
        </ListItem>

        <Divider style={{ margin: "0 20px" }} />
      </Fragment>
    ))}
  </List>
);
}

export default withStyles(styles)(Agenda);
