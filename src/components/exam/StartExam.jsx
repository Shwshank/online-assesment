import React from "react";
import { connect } from "react-redux";
import Countdown from "react-countdown-now";
import { examResponse } from "../../actions";
import MiddleLayer from "./MiddleLayer";
import  Header  from "./Header";

class StartExam extends React.Component {

  time1 = 0;
  time2 = 0;

  constructor(props) {
    super();
    this.state = {
      toggle: false
    };
  }

  handleToggle = event => {
    event.preventDefault();
    let toggle = !this.state.toggle;
    this.setState({ toggle });
  };

  toggleClassesHandler = () => {
    const classes = this.state.toggle ? "active accodian" : "accodian";
    return classes;
  };
  totalMarks = 0;
  resultArray = [];

  componentDidMount() {
    // if (window.performance) {
    //   if (performance.navigation.type === 1) {
    //     this.time2 = performance.now();
    //     console.log(this.time1);
    //     console.log(this.time2);
    //     console.log(this.time2 - this.time1);
    //   }
    // }
  }

  renderTime = () => {
    // console.log(this.props);
    if (this.props.examSetForUser.set_data) {
      if (this.props.examSetForUser.set_data.time) {
        let timeAllowted =
          parseInt(this.props.examSetForUser.set_data.time) * 60 * 1000;

        // console.log(timeAllowted);
        return (
          <div>
            <Header />
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 text-center">
                  <strong
                    onClick={event => this.handleToggle(event)}
                    className={this.toggleClassesHandler()}
                    style={{ position: "relative" }}
                  >
                    <span id="triangle-down" />
                    <Countdown date={Date.now() + timeAllowted}>
                      <MiddleLayer resultArray={this.resultArray} />
                    </Countdown>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  };

  onSiteChanged = (i, question, ans, marks, selected) => {
    let result = {
      sno: i,
      question: question,
      ans: ans,
      selected: selected,
      marks: marks
    };

    let presentFlag = false;
    let pos = 0;
    for (let j = 0; j < this.resultArray.length; j++) {
      if (this.resultArray[j].sno === i) {
        presentFlag = true;
        pos = j;
        break;
      }
    }

    if (presentFlag) {
      this.resultArray[pos].selected = selected;
    } else {
      this.resultArray.push(result);
    }
  };

  renderOptions = (i, question, ans, marks, options) => {
    let y = 0;

    return options.map(option => {
      y++;
      return (
        <div key={y}>
          <strong>{y}. </strong>
          <input
            type="radio"
            name={i}
            value={option}
            onChange={this.onSiteChanged.bind(
              this,
              i,
              question,
              ans,
              marks,
              option
            )}
          />
          {option}
        </div>
      );
    });
  };

  renderQuestion = () => {
    let i = 0;

    if (this.props.examSetForUser.template_data) {
      return this.props.examSetForUser.template_data.map(ques => {
        i++;
        return (
          <React.Fragment key={i}>
            <div className="card" style={{ marginBottom: 30 }}>
              <div
                className="card-body card-body-question"
                style={{ width: "90%" }}
              >
                <div className="">
                  <strong>Q.{i} </strong> {ques.question}
                  {this.renderOptions(
                    i,
                    ques.question,
                    ques.ans,
                    ques.marks,
                    ques.options
                  )}
                  <p className="single-question-marks">
                    <strong> Marks: {ques.marks} </strong>
                  </p>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      });
    } else {
      return (
        <React.Fragment>
          <h4>
            Opps! seems like you have completed the exam. Please contact
            administrator
          </h4>
        </React.Fragment>
      );
    }
  };

  submitExam = () => {
    if (window.confirm("Are you sure to submit the exam?")) {
      for (let j = 0; j < this.resultArray.length; j++) {
        if (this.resultArray[j].ans === this.resultArray[j].selected) {
          this.totalMarks += parseInt(this.resultArray[j].marks);
        }
      }
      // console.log(this.totalMarks);
      // this.props.history.push("/exam/ExamResult/"+this.totalMarks);
      window.location.replace("#/exam/ExamResult/" + this.totalMarks);
    }
  };

  displaySubmitButton() {
    if (this.props.examSetForUser.template_data) {
      return (
        <div className="row">
          <div className="col-lg-12">
            <button
              className="btn btn-primary btn-sm"
              onClick={this.submitExam}
              style={{ marginBottom: 30 }}
            >
              Submit
            </button>
          </div>
        </div>
      );
    }
  }

  componentWillUnmount() {
    this.props.examResponse(this.resultArray);
    // console.log(this.props);
  }

  render() {
    // console.log(Countdown);

    return (
      <div className="content">
        {this.renderTime()}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">{this.renderQuestion()}</div>
          </div>
          {this.displaySubmitButton()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    examUser: state.examUser,
    examSetForUser: state.examSetForUser,
    responseArray: state.responseArray
  };
};

export default connect(
  mapStateToProps,
  { examResponse }
)(StartExam);
