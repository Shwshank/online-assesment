import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

import Home from "./home/Home";
import User from "./home/User";
import ExamSet from "./home/ExamSet";
import Questions from "./home/Questions";
import ExamSettingForm from "./home/ExamSettingForm";

import Exam from "./exam/Exam";
import IntroPage from "./exam/IntroPage";
import StartExam from "./exam/StartExam";
import ExamResult from "./exam/ExamResult";

class App extends React.Component {
  render() {
    return (
      <div data-test="app_fragment">
        <HashRouter  data-test="router_with_history">

            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />

            <Route path="/home/user"  component={User} />
            <Route path="/home/questions"  component={Questions} />
            <Route path="/home/examSet"  component={ExamSet} />
            <Route path="/home/examSetSettingForm/:id" exact component={ExamSettingForm} />

            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/exam/IntroPage/:id" exact component={IntroPage} />
            <Route path="/exam/StartExam" exact component={StartExam} />
            <Route path="/exam/ExamResult/:id" exact component={ExamResult}/>

        </HashRouter>
      </div>
    );
  }
}

export default App;
