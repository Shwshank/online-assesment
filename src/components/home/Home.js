import React from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';

import Demo from './Demo';
import User from './User';
import Auth from '../Auth';
import Header from './Header';
import Footer from './Footer';
import ExamSet from './ExamSet';
import history from '../history';
import Questions from './Questions';
import Dashboard from './Dashboard';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { redirect: true };
  }

  componentWillMount() {
    if(!Auth()) {
      history.push('/login');
    }
  }

  render() {
    return(
      <div>
        <Header/>
        <Router  history={history}>
          <div>
            <Switch history={history}>
              <Route path="/" exact component={User} />
              <Route path="/home/" exact component={User} />
              <Route path="/home/user" exact component={User} />
              <Route path="/home/questions" exact component={Questions} />
              <Route path="/home/examSet" exact component={ExamSet} />
              <Route path="/home/dashboard" exact component={Dashboard} />
              <Route path="/home/demo" exact component={Demo} />
              <Redirect from='/home/*' to='/home' />
            </Switch>
          </div>
        </Router>
        <Footer/>
      </div>
    )
  }
}

export default Home;
