import React from "react";
import Auth from "./Auth";
import history from "./history";
import { login } from "../api/APIendpoint";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  componentWillMount() {
    if (Auth()) {
      history.push("/home");
    }
  }

  onLogin = () => {
    // console.log(this.state);
    login(this.state.email, this.state.password).then(res => {
      // console.log(res);
      if (res) {
        history.push("/home");
      } else {
        alert("Invalid credentials!");
      }
    });
  };

  emailChanged = async event => {
    await this.setState({
      email: event.target.value
    });
  };

  passwordChanged = async event => {
    await this.setState({
      password: event.target.value
    });
  };

  render() {
    return (
      <div className="col-lg-4 offset-lg-4" style={{ marginTop: "100px" }}>
        <div className="card">
          <div className="card-header">
            <h3>Login</h3>
          </div>
          <div className="card-body">
            <div className="login">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.emailChanged}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    className="form-control"
                    id="pwd"
                    type="password"
                    value={this.state.password}
                    onChange={this.passwordChanged}
                  />
                </div>
                <Link
                  to="/login"
                  className="btn btn-primary"
                  onClick={this.onLogin}
                >
                  Login
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
