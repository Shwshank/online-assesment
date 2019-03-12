import React from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';

import Auth from '../Auth';
import history from '../history';
import Header from './Header';
import Footer from './Footer';
import Demo from './Demo';
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
              <Route path="/" exact component={Dashboard} />
              <Route path="/home/" exact component={Dashboard} />
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
