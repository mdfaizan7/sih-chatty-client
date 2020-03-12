import React, { Component, Fragment } from "react";

// mui stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// redux stuff
import { connect } from "react-redux";
import { getUserHandle } from "../redux/actions/userActions";

const styles = {
  user: {
    paddingLeft: 60,
    margin: "4px auto 4px auto"
  },
  rightBubble: {
    padding: "2px 10px 2px 10px",
    borderRadius: "10px",
    backgroundColor: "rgba(177, 9, 235, 0.58)"
  },
  leftBubble: {
    padding: "4px 10px 4px 10px",
    borderRadius: "10px",
    backgroundColor: "rgba(255, 160, 0, 0.63)"
  },
  other: {
    paddingRight: 60,
    margin: "6px auto 7px auto"
  },
  container: {
    border: "2px solid #dedede",
    padding: 10,
    margin: "10px 0"
  }
};

class Messages extends Component {
  componentDidMount() {
    this.props.getUserHandle();
  }

  render() {
    const {
      messages,
      classes,
      credentials: { handle }
    } = this.props;
    return (
      <div className={classes.container}>
        {messages.map(mes => {
          const { time, author, message } = mes;

          return !handle ? (
            ""
          ) : handle === author ? (
            <Grid
              container
              direction="column"
              // justify="space-evenly"
              alignItems="flex-end"
              className={classes.user}
            >
              <div className={classes.rightBubble}>
                <Typography variant="body2">{message}</Typography>
              </div>
            </Grid>
          ) : (
            <div className={classes.other}>
              <Typography variant="body2">
                <span className={classes.leftBubble}>{message}</span>
              </Typography>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  credentials: state.user.credentials
});

export default connect(mapStateToProps, { getUserHandle })(
  withStyles(styles)(Messages)
);
