import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";
import Person from "@material-ui/icons/Person";

const styles = theme => {
  return {
    time: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: "16px"
    },
    contentDefault: {
      display: "block",
    },
    note: {
      color: theme.palette.grey[600],
      marginBottom: '16px',
    },
    speakers: {
      color: theme.palette.grey[600],
      marginBottom: "8px"
    },
    speakerIcon: {
      fontSize: theme.typography.fontSize
    },
    questionLink: {
      color: theme.palette.primary.light,
      textDecoration: 'none',
      fontWeight: "500",
      marginBottom: "8px"
    },
    questionIcon: {
      fontSize: theme.typography.fontSize
    }
  };
};

const Agenda = ({ schedules, classes }) => {
  return (
    <List>
      {schedules.map((schedule, index) => (
        <Fragment key={index}>
          <ListItem style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <div
              style={{
                flexShrink: "0",
                padding: "0 16px",
                textAlign: "center",
                flex: "0 0 58px"
              }}
            >
              <Typography
                variant="body1"
                gutterBottom
                color="secondary"
                classes={{ body1: classes.time }}
              >
                {schedule.time}
              </Typography>
            </div>
            <ListItemText
              primary={
                <Typography variant="title" gutterBottom color="primary">
                  {schedule.title}
                </Typography>
              }
              secondary={
                <span style={{
                  display: 'block',
                  marginTop: '16px'
                }}>
                  {schedule.note && (
                    <span
                      className={`${classes.contentDefault} ${classes.note}`}
                    >
                      {schedule.note}
                    </span>
                  )}
                  {schedule.speakers.length > 0 && (
                    <span
                      className={`${classes.contentDefault} ${
                        classes.speakers
                      }`}
                    >
                      <Person
                        fontSize="small"
                        classes={{ fontSizeSmall: classes.speakerIcon }}
                      />{" "}
                      {schedule.speakers.join(" • ")}
                    </span>
                  )}

                  {schedule.slido && (
                    <a
                      href={schedule.slido}
                      rel="noopener noreferrer"
                      target="_blank"
                      className={`${classes.contentDefault} ${
                        classes.questionLink
                      }`}
                    >
                      <QuestionAnswer
                        fontSize="small"
                        classes={{ fontSizeSmall: classes.questionIcon }}
                      />{" "}
                      Ask a question
                    </a>
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
};

export default withStyles(styles)(Agenda);
