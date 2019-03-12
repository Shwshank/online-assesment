import React from 'react';
// import { Router, BrowserRouter } from 'react-router-dom';
import Auth from './Auth';
import history from './history';

class Login extends React.Component {

  componentWillMount() {
    if(Auth()) {
      history.push('/home');
    }
  }

  render() {
    return(
      <div>
        <h3>Login</h3>
      </div>
    )
  }
}

export default Login;
