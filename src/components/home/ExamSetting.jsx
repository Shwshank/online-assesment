import React from 'react';
// import { connect } from 'react-redux';

class ExamSetting extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  newSet(){
    console.log("Magic yet to be happen");
  }

  render() {
    return(
      <div>
        <h4>Setting</h4>
        <button onClick={this.newSet} > + Exam Set </button>
      </div>
    )
  }
};

export default ExamSetting
