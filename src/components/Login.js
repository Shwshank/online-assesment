import React from 'react';
import Auth from './Auth';
import history from './history';
import {apiTest} from '../api/APIendpoint';

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
    apiTest().then( res=>{
      console.log(res);
    }, err=>{
      console.log("err "+err);
    })

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
