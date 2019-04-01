import React from "react";
// import { Route, Router, Switch, Redirect } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                © powered by <strong>QCI</strong>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
