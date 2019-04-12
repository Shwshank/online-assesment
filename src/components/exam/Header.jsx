import React from "react";
// import { Route, Router, Switch, Redirect } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="header" style={{ padding: "5px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <img className="logo" src="/images/logo.png" alt="" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
