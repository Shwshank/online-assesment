import React from "react";
import { connect } from "react-redux";
import { clearExamSetForExam } from "../../actions";
import { submitExamSetAPI } from "../../api/APIendpoint";

class ExamResult extends React.Component {
  componentDidUpdate() {
    // console.log(this.props.match.params.id);
    // console.log(this.props);
    let result = {};
    result.token = this.props.examUser.token;
    result.user_id = this.props.examUser.user_details.user_id;
    result.total_marks_obtained = this.props.match.params.id;
    result.time_stamp = Date.now();
    result._list = this.props.responseArray;
    // console.log(result);

    submitExamSetAPI(result).then(res => {
      console.log(res);
      this.props.clearExamSetForExam();
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-lg-12">
            <div className="card-body">
              <p className="cart-text">
                <strong>Name:</strong> {this.props.examUser.user_details.name}
              </p>
              <p className="cart-text">
                <strong>Email:</strong> {this.props.examUser.user_details.email}
              </p>
              <p className="cart-text">
                <strong>Phone:</strong> {this.props.examUser.user_details.phone}
              </p>
              <strong>Total Marks:</strong> {this.props.match.params.id}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { examUser: state.examUser, responseArray: state.responseArray };
};

export default connect(
  mapStateToProps,
  { clearExamSetForExam }
)(ExamResult);
