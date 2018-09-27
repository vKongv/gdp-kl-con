import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import grid from "./pages/Main/grid_seamless.png";
import red from "@material-ui/core/colors/red";

import Main from "./pages/Main/Main";
import ContactUs from "./pages/ContactUs/ContactUs";

// NOTE: This is the default theme, we can change it to suit us. Ref: https://material-ui.com/customization/themes/
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#0d3880',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#e60278'
    },
    typography: {
      body3: {
        color: "rgba(0, 0, 0, 0.87)",
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: "1.46429em",
      }
    },
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div
          style={{
            textAlign: "center",
            backgroundPosition: "right 1px top -4px",
            backgroundRepeat: "repeat",
            backgroundImage: `url(${grid})`,
            height: "100%"
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              height: "100%",
              paddingTop: "10px",
              paddingBottom: "10px"
            }}
          >
            <h2>Schedule</h2>
            <p>KL CON 2018</p>
          </div>
        </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/dayone" component={Main} />
          <Route path="/daytwo" component={Main} />
          <Route path="/daythree" component={Main} />
          <Route path="/dayfour" component={Main} />
          <Route path="/dayfive" component={Main} />
          <Route path="/contact-us" component={ContactUs} />
          <Redirect from="*" to="/dayone" />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
