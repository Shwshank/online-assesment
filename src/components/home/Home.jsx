import React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";

import Demo from "./Demo";
import User from "./User";
import Auth from "../Auth";
import Header from "./Header";
import Footer from "./Footer";
import ExamSet from "./ExamSet";
import history from "../history";
import Questions from "./Questions";
import Dashboard from "./Dashboard";
import ExamSettingForm from "./ExamSettingForm";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: true };
  }

  componentWillMount() {
    if (!Auth()) {
      history.push("/login");
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Router history={history}>
          <main className="content">
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={User} />
                  <Route path="/home/" exact component={User} />
                  <Route path="/home/user" exact component={User} />
                  <Route path="/home/questions" exact component={Questions} />
                  <Route path="/home/examSet" exact component={ExamSet} />
                  <Route path="/home/dashboard" exact component={Dashboard} />
                  <Route path="/home/demo" exact component={Demo} />
                  <Route path="/home/examSetSettingForm/:id" exact component={ExamSettingForm} />
                  <Redirect from="/home/*" to="/home" />
                </Switch>
              </div>
            </div>
          </main>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
