import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import history from "../history";
import IntroPage from "./IntroPage";
import StartExam from "./StartExam";
import ExamResult from "./ExamResult";

class Exam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {redirect: true};
  }

  render() {
    return(
      <div>
        <Header/>
          <div>
            <Router history={history}>
              <Switch>
                <Route path="/exam/IntroPage/:id" exact component={IntroPage} />
                <Route path="/exam/StartExam" exact component={StartExam} />
                <Route path="/exam/ExamResult/:id" exact component={ExamResult} />
              </Switch>
            </Router>
          </div>
        <Footer/>
      </div>
    )
  }
}

export default Exam;
