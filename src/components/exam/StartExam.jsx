import React from "react";
import { connect } from "react-redux";

import { clearExamSetForExam } from "../../actions";

class StartExam extends React.Component {
  constructor(props) {
    super(props);
    let examJSON = {
      set_id: "101",
      name: "Some name1 here",
      time: "1",
      question: [
        {
          ans: "97",
          difficulty_level: "Easy",
          marks: "1",
          option: ["129", "64", "48", "97", "None"],
          q_id: "16d2746b48494275944c551768ccbe62",
          question:
            "6 different sweet varieties of count 32, 216, 136, 88, 184, 120 were ordered for a particular occasion. They need to be packed in such a way that each box has the same variety of sweet and the number of sweets in each box is also the same. What is the minimum number of boxes required to pack?",
          section: "Quantitative"
        },
        {
          ans: "90",
          difficulty_level: "Easy",
          marks: "2",
          option: ["120", "60", "40", "90", "None"],
          q_id: "16d2746b48494275944c551768ccbe60",
          question:
            "5 different sweet varieties of count 32, 216, 136, 88, 184, 120 werer of boxes required to pack?",
          section: "Quantitative"
        }
      ]
    };
    this.state = { examJSON: examJSON };
  }

  totalMarks = 0;
  resultArray = [];

  componentDidMount() {
    console.log(this.props.examSetForUser);
  }

  // componentWillUnmount() {
  //   if(window.confirm("Are you sure to quit the exam?")) {}
  // }

  onSiteChanged = (i, question, ans, marks, selected) => {
    console.log(i);
    console.log(selected);
    console.log(ans);
    console.log(parseInt(marks));
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

    console.log(this.resultArray);
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
      this.props.clearExamSetForExam();
      console.log(this.totalMarks);
      this.props.history.push("/exam/ExamResult/" + this.totalMarks);
    }
  };

  displaySubmitButton() {
    if (this.props.examSetForUser.template_data) {
      return (
        <div className="col-lg-12">
          <button
            className="btn btn-primary btn-sm"
            onClick={this.submitExam}
            style={{ marginBottom: 30 }}
          >
            Submit
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-lg-12">{this.renderQuestion()}</div>

        {this.displaySubmitButton()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { examUser: state.examUser, examSetForUser: state.examSetForUser };
};

export default connect(
  mapStateToProps,
  { clearExamSetForExam }
)(StartExam);
