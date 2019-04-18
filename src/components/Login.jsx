import React from "react";
import Auth from "./Auth";
// import history from "./history";
import { login } from "../api/APIendpoint";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getExamSets,
  setUsers1
} from "../actions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  componentWillMount() {
    if (Auth()) {
      window.location.replace("#/home/user")
    }
  }

  onLogin = () => {

    login(this.state.email, this.state.password).then(res => {

      if (res) {
        this.props.getExamSets();
        this.props.setUsers1();

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
                  <i className="fa fa-sign-in" aria-hidden="true" />
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

const mapStateToProps = state => {
  return {
    users: state.user,
    questions: state.question,
    examSet: state.examSet
  };
};

export default connect(
  mapStateToProps,
  { setUsers1, getExamSets}
)(Login);
