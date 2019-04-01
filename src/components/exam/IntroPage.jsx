import React from "react";
import { connect } from "react-redux";

import { getExamUserDetails } from "../../actions";

class IntroPage extends React.Component {
  componentDidMount() {
    this.props.getExamUserDetails();
  }

  startExam(user) {
    console.log(user);
    if (user.user_id)
      if (window.confirm("Are you sure to start the exam now?")) {
        this.props.history.push("/exam/StartExam");
      }
  }

  userDetails() {
    if (this.props.examUser.user_id) {
      return (
        <main className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h5> Please confirm user details</h5>
                <p>
                  <strong>{this.props.examUser.name}</strong>
                </p>
                <p>{this.props.examUser.phone}</p>
                <p>{this.props.examUser.email}</p>
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
                  onClick={this.startExam.bind(this, this.props.examUser)}
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
  return { examUser: state.examUser };
};

export default connect(
  mapStateToProps,
  { getExamUserDetails }
)(IntroPage);
