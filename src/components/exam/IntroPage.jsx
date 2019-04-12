import React from "react";
import { connect } from "react-redux";

import { getExamUserDetails, getExamSetForExam } from "../../actions";

class IntroPage extends React.Component {

  componentWillMount() {
    console.log(this.props.match.params.id);
    let id = this.props.match.params.id;
    id = id.substr(3)
    // console.log(id);
    this.props.getExamUserDetails(id);
  }

  componentDidMount() {
    console.log(this.props);
  }

  startExam(token, user_id) {
    if (user_id)
      if (window.confirm("Are you sure to start the exam now?")) {
        // console.log(token);
        // console.log(user_id);
        this.props.getExamSetForExam(token, user_id);
        // this.props.history.push("/exam/StartExam");
        window.location.replace("#/exam/StartExam/")
      }
  }

  userDetails() {
    if (this.props.examUser.token) {
      return (
        <main className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h5> Please confirm user details</h5>
                <p>
                  <strong>{this.props.examUser.user_details.name}</strong>
                </p>
                <p>{this.props.examUser.user_details.phone}</p>
                <p>{this.props.examUser.user_details.email}</p>
                <p>Exam set id: {this.props.examUser.user_details.set_id}</p>
                <p>Exam time: {this.props.examUser.user_details.time} Mins</p>
                <hr />
                <h5> Exam Details </h5>
                <p>
                  Here are the exam rules, please go-through the content. If
                  aggree, please click on the continue button. Display some
                  graphic informcation here
                </p>
                <hr />
                <button
                  className="btn btn-primary btn-sm"
                  onClick={this.startExam.bind(this, this.props.examUser.token, this.props.examUser.user_details.user_id)}
                  style={{ marginBottom: 30 }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </main>
      );
    } else {
      return <div>Unable to load details</div>;
    }
  }

  render() {
    return <div>{this.userDetails()}</div>;
  }
}

const mapStateToProps = state => {
  return { examUser: state.examUser, examSetForUser: state.examSetForUser  };
};

export default connect(
  mapStateToProps,
  { getExamUserDetails, getExamSetForExam }
)(IntroPage);
