import React from "react";
// import history from "../history";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearStore } from "../../actions";
// import { Router, BrowserRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = { value: "" };
  }

  logout = () => {
    this.props.clearStore();
    window.location.replace("#/login");
  };

  goToUser() {
    // history.push("/user");
    console.log("user");
    window.location.replace("#/home/user");
  }
  goToQuestions() {
    // history.push("/questions");
    window.location.replace("#/home/questions");
  }
  goToExamSet() {
    // history.push("/examSet");
    window.location.replace("#/home/examSet");
  }

  render() {
    return (
      <header className="header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <img className="logo" src="/images/logo.png" alt="logo" />
            </div>
            <div className="col">
              <nav>
                <ul className="nav float-right">
                  <li className="nav-item">
                    <NavLink to="/home/user" className="nav-link">
                      User
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/home/questions" className="nav-link">
                      Questions
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/home/examSet" className="nav-link">
                      Exam Sets
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/logout" className="nav-link">
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.userReducer };
};

export default connect(
  mapStateToProps,
  { clearStore }
)(Header);
