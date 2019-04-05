import React from "react";
import { connect } from "react-redux";

import { getExamUserDetails, getExamSetForExam } from "../../actions";

class IntroPage extends React.Component {
  componentDidMount() {
    this.props.getExamUserDetails();
  }

  startExam(user) {
    this.props.getExamSetForExam();
    console.log(user);
    if (user.user_id)
      if (window.confirm("Are you sure to start the exam now?")) {
        this.props.history.push("/exam/StartExam");
      }
  }

  userDetails() {
    if (this.props.examUser.user_id) {
      return (
        <div className="col-lg-12">
          <h5> Please confirm user details</h5>
          <p>{this.props.examUser.name}</p>
          <p>{this.props.examUser.phone}</p>
          <p>{this.props.examUser.email}</p>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Exam Details</h5>
              <p className="card-text">
                Here are the exam rules, please go-through the content. If
                aggree, please click on the continue button. Display some
                graphic informcation here
              </p>
            </div>
          </div>

          <button
            className="btn btn-primary btn-sm"
            onClick={this.startExam.bind(this, this.props.examUser)}
            style={{ margin: "30px 0" }}
          >
            Continue
          </button>
        </div>
      );
    } else {
      return <div>Unable to load details</div>;
    }
  }

  render() {
    return <React.Fragment>{this.userDetails()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return { examUser: state.examUser, examSetForUser: state.examSetForUser };
};

export default connect(
  mapStateToProps,
  { getExamUserDetails, getExamSetForExam }
)(IntroPage);
