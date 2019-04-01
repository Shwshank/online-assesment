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
      <React.Fragment>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/exam" component={Exam} />
            <Redirect from="*" to="/login" />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
