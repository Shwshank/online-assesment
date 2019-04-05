import React from "react";

class ExamResult extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <React.Fragment>
        <div className="card col-lg-12">
          <div className="card-body">
            <strong>Total Marks:</strong> {this.props.match.params.id}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ExamResult;
