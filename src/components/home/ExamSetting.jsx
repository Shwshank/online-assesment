import React from "react";
// import { connect } from 'react-redux';

class ExamSetting extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  newSet() {
    console.log("Magic yet to be happen");
  }

  render() {
    return (
      <React.Fragment>
        <h4>Setting</h4>
        <button className="btn btn-primary" onClick={this.newSet}>
          + Exam Set
        </button>
      </React.Fragment>
    );
  }
}

export default ExamSetting;
