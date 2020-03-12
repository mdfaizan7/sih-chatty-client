import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Navbar from "./components/Navbar";

// Mui stuff
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiTheme from "./util/Theme";

// redux stuff
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser } from "./redux/actions/userActions";

// pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import conversation from "./pages/conversation";

const theme = createMuiTheme(MuiTheme);

axios.defaults.baseURL =
  "https://us-central1-sih2020-dc9d8.cloudfunctions.net/api";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <Router>
              <Navbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={home} />
                  <Route exact path="/login" component={login} />
                  <Route exact path="/signup" component={signup} />
                  <Route
                    exact
                    path="/conversation/:ConvId"
                    component={conversation}
                  />
                </Switch>
              </div>
            </Router>
          </Provider>
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default App;
