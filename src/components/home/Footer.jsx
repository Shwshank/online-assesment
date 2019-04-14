import React from "react";
// import { Router, BrowserRouter } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <p className="col-lg-12">
              &copy; powered by <strong>QCI</strong>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
