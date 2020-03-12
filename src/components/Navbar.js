import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import AppIcon from "../images/logo-via-logohub.png";
import "../App.css";

// Mui stuff
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// redux stuff
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/userActions";

const styles = {
  navbarLogo: {
    width: 200
  },
  loginButton: {
    float: "right",
    left: "75%"
  },
  signupButton: {
    float: "right",
    left: "77%"
  },
  logoutButton: {
    float: "right",
    left: "77%"
  }
};

class Navbar extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    const { authenticated, classes } = this.props;

    let renderButtons = authenticated ? (
      <Fragment>
        <Link to="/">
          <img src={AppIcon} alt="App Icon" className={classes.navbarLogo} />
        </Link>

        <Button
          className={classes.logoutButton}
          color="inherit"
          onClick={this.handleLogout}
        >
          <Typography variant="body1">Logout</Typography>
        </Button>
      </Fragment>
    ) : (
      <Fragment>
        <Link to="/">
          <img src={AppIcon} alt="App Icon" className={classes.navbarLogo} />
        </Link>

        <Button
          className={classes.loginButton}
          color="inherit"
          component={Link}
          to="/login"
        >
          <Typography variant="body1">Login</Typography>
        </Button>
        <Button
          className={classes.signupButton}
          color="inherit"
          component={Link}
          to="/signup"
        >
          <Typography variant="body1">SignUp</Typography>
        </Button>
      </Fragment>
    );

    return (
      <AppBar>
        <Toolbar className="nav-container">{renderButtons}</Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps, { logoutUser })(
  withStyles(styles)(Navbar)
);
