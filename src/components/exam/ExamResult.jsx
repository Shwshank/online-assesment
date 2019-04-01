import React from "react";

class ExamResult extends React.Component {

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return(
      <div>
        <h4> Result: {this.props.match.params.id} </h4>
      </div>
    )
  }
}

export default ExamResult
