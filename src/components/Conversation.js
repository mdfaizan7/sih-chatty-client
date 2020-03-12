import React, { Component, Fragment } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";

// mui stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 15
  },
  content: {
    padding: 15,
    objectWidth: "cover"
  },
  title: {
    marginBottom: 2,
    paddingLeft: 5
  },
  deatils: {
    marginTop: 4,
    paddingLeft: 5
  },
  button: {
    fontSize: "0.8rem",
    fontWeight: 550,
    color: "rgba(0, 0, 0, 0.65)",
    marginTop: 25
  }
};

class Conversation extends Component {
  render() {
    dayjs.extend(relativeTime);

    const {
      classes,
      conversation: { ConvId, creator, time, ConvName, createdWith }
    } = this.props;

    return (
      <Fragment>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography
              variant="h4"
              component={Link}
              to={`/conversation/${ConvId}`}
              color="primary"
              className={classes.title}
            >
              {ConvName}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.deatils}
            >
              Created by {creator} with {createdWith} {dayjs(time).fromNow()}
            </Typography>
            <Button
              className={classes.button}
              size="small"
              component={Link}
              to={`/conversation/${ConvId}`}
            >
              Open this Conversation
            </Button>
          </CardContent>
        </Card>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Conversation);

// ConvId(pin): "MbNvWp8RaJ1On42zyLtc"
// creator(pin): "user1"
// time(pin): "2020-03-09T18:41:56.400Z"
// ConvName(pin): "Conversation 1"
// createdWith(pin): "jane"
