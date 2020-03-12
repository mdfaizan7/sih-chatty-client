import React, { Component, Fragment } from "react";

// mui stuff
import MuiTheme from "../util/Theme";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import CircularProgress from "@material-ui/core/CircularProgress";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

// redux stuff
import { connect } from "react-redux";
import { createConversation } from "../redux/actions/dataActions";

const styles = { ...MuiTheme };

class CreateConversation extends Component {
  state = {
    open: false,
    ConvName: "",
    createdWith: "",
    errors: {}
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
      errors: {}
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // if (this.state.ConvName.trim() === "") {
    //   this.setState({
    //     errors: {
    //       ConvName: "Must not be empty"
    //     }
    //   });
    //   if (this.state.createdWith.trim() === "") {
    //     this.setState({
    //       errors: {
    //         createdWith: "Must not be empty"
    //       }
    //     });
    //     return;
    //   }
    this.props.createConversation({
      ConvName: this.state.ConvName,
      createdWith: this.state.createdWith
    });
    setTimeout(this.handleClose, 850);
  };

  render() {
    const { errors } = this.state;
    const {
      classes,
      UI: { loading }
    } = this.props;
    return (
      <Fragment>
        <Button variant="contained" color="secondary" onClick={this.handleOpen}>
          Create a Conversation
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Create a Conversation</DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="ConvName"
                type="text"
                label="Name of Conversation"
                fullWidth
                multiline
                placeholder="Enter the name of the conversation"
                error={errors.body ? true : false}
                helperText={errors.ConvName}
                className={classes.textField}
                onChange={this.handleChange}
              />

              <TextField
                name="createdWith"
                type="text"
                label="Handle of the other person"
                fullWidth
                multiline
                placeholder="Enter the handle of the person you wanna create a conversation with."
                error={errors.body ? true : false}
                helperText={errors.createdWith}
                className={classes.textField}
                onChange={this.handleChange}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitButton}
              disabled={loading}
              onClick={this.handleSubmit}
            >
              SUBMIT
              {loading && (
                <CircularProgress
                  size={30}
                  className={classes.progressSpinner}
                />
              )}
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={this.handleClose}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  UI: state.UI
});

export default connect(mapStateToProps, { createConversation })(
  withStyles(styles)(CreateConversation)
);
