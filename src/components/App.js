import React from 'react';
import { Route, Router, Redirect, Switch } from 'react-router-dom';

// import SetName from './SetName';
// import Login from './Login';
import Logout from './Logout';
import Home from './home/Home';
import history from './history';
import Login from './Login';

class App extends React.Component {

  render() {
    return(
      <div>
        <Router  history={history}>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home"  component={Home} />
              <Route path="/login"  component={Login} />
              <Route path="/logout"  component={Logout} />
              <Redirect from='*' to='/login' />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
