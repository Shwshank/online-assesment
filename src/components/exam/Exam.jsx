import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import history from "../history";
import IntroPage from "./IntroPage";
import StartExam from "./StartExam";

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
                <Route path="/exam/" exact component={IntroPage} />
                <Route path="/exam/IntroPage" exact component={IntroPage} />
                <Route path="/exam/StartExam" exact component={StartExam} />
              </Switch>
            </Router>
          </div>
        <Footer/>
      </div>
    )
  }
}

export default Exam;
