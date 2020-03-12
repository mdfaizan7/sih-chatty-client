import React, { Component, Fragment } from "react";

// Mui stuff
import MuiTheme from "../util/Theme";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

// Mui icons
// import PublishIcon from "@material-ui/icons/Publish";

// Redux stuff
import { connect } from "react-redux";
import { submitMessage } from "../redux/actions/dataActions";

const styles = {
  ...MuiTheme
};

class MessageForm extends Component {
  state = {
    body: "",
    errors: {},
    ConvId: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }

    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: "" });
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ errors: {} });
    this.props.submitMessage(this.props.ConvId, {
      message: this.state.body
    });
  };

  render() {
    const { classes, authenticated } = this.props;
    const errors = this.state.errors;

    const renderMessageForm = authenticated ? (
      <Fragment>
        <Grid item sm={12} style={{ textAlign: "center" }}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item sm={10}>
              {" "}
              <form onSubmit={this.handleSubmit}>
                <TextField
                  name="body"
                  type="text"
                  label="Write a Message..."
                  error={errors.comment ? true : false}
                  helperText={errors.comment}
                  value={this.state.body}
                  onChange={this.handleChange}
                  fullWidth
                  multiline
                  className={classes.textField}
                />
              </form>
            </Grid>
            <Grid item sm={2}>
              <Button
                type="submit"
                onClick={this.handleSubmit}
                color="primary"
                className={classes.button}
                // startIcon={<PublishIcon fontSize="large" />}
                size="large"
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    ) : null;

    return renderMessageForm;
  }
}

const mapStateToProps = state => ({
  UI: state.UI,
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps, { submitMessage })(
  withStyles(styles)(MessageForm)
);
