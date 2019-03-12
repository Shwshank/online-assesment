import React from 'react';
// import { Router, BrowserRouter } from 'react-router-dom';
import Auth from './Auth';
import history from './history';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email:"", password:""};
  }

  componentWillMount() {
    if(Auth()) {
      history.push('/home');
    }
  }

  onLogin = () => {
    console.log(this.state);
  }

  emailChanged = async(event) => {
    await this.setState({
      email: event.target.value
    })
  }

  passwordChanged = async(event) => {
    await this.setState({
      password: event.target.value
    })
  }

  render() {
    return(
      <div>
        <h3>Login</h3>
        <br/>
        <input type="email" value={this.state.email} onChange={this.emailChanged} />
        <br/>
        <input type="password" value={this.state.password} onChange={
          this.passwordChanged}/>
        <br/>
        <button onClick={this.onLogin} > Login </button>
      </div>
    )
  }
}

export default Login;
