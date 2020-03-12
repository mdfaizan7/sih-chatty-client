const MuiTheme = {
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    background: {
      paper: "#fff",
      default: "#fafafa"
    },
    primary: {
      light: "rgba(177, 9, 235, 0.58)",
      main: "rgba(176, 6, 235, 1)",
      dark: "rgba(109, 9, 143, 1)",
      contrastText: "#fff"
    },
    secondary: {
      light: "rgba(255, 160, 0, 0.63)",
      main: "rgba(255, 160, 0, 1)",
      dark: "rgba(207, 133, 5, 1)",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  },
  form: {
    textAlign: "center "
  },
  appLogo: {
    maxWidth: 300,
    margin: "1px auto 15px auto"
  },
  pageTitle: {
    margin: "10px auto 10px auto"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  button: {
    marginTop: 20,
    position: "relative"
  },
  customError: {
    fontSize: "0.8rem",
    fontWeight: 600,
    margin: 10
  },
  progress: {
    position: "absolute"
  }
};

export default MuiTheme;
