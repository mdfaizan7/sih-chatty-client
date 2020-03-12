import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import AppIcon from "../images/logo-via-logohub.png";

// Mui stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MuiTheme from "../util/Theme";

// redux stuff
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

const styles = MuiTheme;

class login extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData, this.props.history);
  };

  render() {
    const {
      classes,
      UI: { loading }
    } = this.props;
    const { errors } = this.state;

    return (
      <Fragment>
        <Grid container className={classes.form}>
          <Grid item sm />
          <Grid item sm>
            <img src={AppIcon} alt="App Icon" className={classes.appLogo} />
            <Typography variant="h2" className={classes.pageTitle}>
              Login
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                value={this.state.email}
                helperText={errors.email}
                error={errors.email ? true : false}
                onChange={this.handleChange}
                fullWidth
              />

              <TextField
                id="password"
                name="password"
                type="password"
                label="Password"
                variant="outlined"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                value={this.state.password}
                helperText={errors.password}
                error={errors.password ? true : false}
                onChange={this.handleChange}
                fullWidth
              />

              {errors.general && (
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.customError}
                >
                  {errors.general}
                </Typography>
              )}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={loading}
              >
                LOGIN
                {loading && (
                  <CircularProgress size={30} className={classes.progress} />
                )}
              </Button>
              <br />
              <br />
              <Typography variant="body2">
                Don't have an account? Sign Up{" "}
                <Typography
                  variant="body2"
                  color="primary"
                  component={Link}
                  to="/signup"
                >
                  here
                </Typography>
              </Typography>
            </form>
          </Grid>
          <Grid item sm />
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

export default connect(mapStateToProps, { loginUser })(
  withStyles(styles)(login)
);
