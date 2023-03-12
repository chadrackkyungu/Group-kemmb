import React, { useEffect } from "react";
import './App.css';
import routes from "./routes";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

//Animation
import AOS from "aos"
import "aos/dist/aos.css"

// Import Bootstrap Scss
import "./theme.scss";

// Import Material Ico
import "./assets/css/materialdesignicons.min.css";

// Import Bootstrap Css
import "./assets/css/mobiriseicons.css";

// Import Custom Css
import "./assets/css/menu.css";
import "./assets/css/style.css";

//Colors
import "./assets/css/colors/default.css";





function App() {


  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
    AOS.refresh()
  }, [])

  return (
    <React.Fragment>
      <Router>
        <Switch>
          {routes.map((route, idx) => (
            <Route path={route.path} component={route.component} key={idx} />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );

}

export default withRouter(App);