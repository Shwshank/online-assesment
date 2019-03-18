import React from "react";
// import { Router, BrowserRouter } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <p>
              &copy; powered by <strong>QCI</strong>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
