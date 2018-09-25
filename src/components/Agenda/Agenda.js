import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const constructTime = time => {
  return time.split(" ");
};

const Agenda = ({ schedules }) => {
  const listTextStyle = {display: 'block', margin: '14px 0'};
  return (
  <List>
    {schedules.map((schedule, index) => (
      <Fragment key={index}>
        <ListItem style={{ paddingTop: "30px", paddingBottom: "30px" }}>
          <div
            style={{ flexShrink: "0", padding: "0 28px", textAlign: "center" }}
          >
            <p>{constructTime(schedule.time)[0]}</p>
            <p>{constructTime(schedule.time)[1]}</p>
          </div>
          <ListItemText
            primary={<span style={listTextStyle}>{schedule.title}</span>}
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

export default Agenda;
