import React from "react";
import { Route, Router, Redirect, Switch } from "react-router-dom";
// import SetName from './SetName';
// import Login from './Login';
import Login from "./Login";
import Logout from "./Logout";
import Home from "./home/Home";
import history from "./history";
import Exam from "./exam/Exam";

class App extends React.Component {
  render() {
    return (
      <div data-test="app_fragment">
        <Router history={history} data-test="router_with_history">
          <Switch>
            <Route data-test="/" path="/" exact component={Home} />
            <Route data-test="home" path="/home" component={Home} />
            <Route data-test="login" path="/login" component={Login} />
            <Route data-test="logout" path="/logout" component={Logout} />
            <Route data-test="exam" path="/exam" component={Exam} />
            <Redirect from="*" to="/login" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
