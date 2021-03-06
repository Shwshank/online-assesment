import React from "react";
import { connect } from "react-redux";
import { getExamSet, getQuestions, editExamSet, editExamSetTemp,
getExamSets } from "../../actions";
import ExamSettingFormAllQuesionsTable from "./examSettingFormAllQuestionsTable";
import ExamSettingFormQuestionTable from "./examSettingFormQuestionsTable";
import $ from 'jquery'

class ExamSettingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", time: "" };
    this.nonSetQuestions = [];
  }

  componentDidMount() {
    this.props.getQuestions();
    this.props.getExamSet();
    // console.log(this.props.match.params.id);
  }

  componentDidUpdate() {
    // console.log(this.props);
    this.displayExamDetails();
  }

  componentWillUnmount() {
    this.props.getExamSets();
  }

  displayExamDetails() {
    if (this.props.exam) {
      return (
        <div>
          <form className="col-lg-6 offset-lg-3">
            <div className="card">
              <div className="card-header">
                <h4>Exam setting form</h4>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    id="name"
                    className="form-control"
                    type="text"
                    value={this.props.exam.name}
                    onChange={this.setNameChanged}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Time:</label>
                  <input
                    id="time"
                    type="text"
                    className="form-control"
                    value={this.props.exam.time}
                    onChange={this.setTimeChanged}
                  /> mins
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Set ID:</label>
                  {this.props.exam.set_id}
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <label>Marks:</label>
                  {this.props.exam.total_marks}
                </div>
              </div>
            </div>
          </form>
          <hr />
          {this.displayQuestions()}
        </div>
      );
    }
  }

  setNameChanged = async event => {
    // console.log(event.target.value);
    this.props.exam.name = event.target.value;
    await this.setState({
      name: event.target.value
    });
  };

  setTimeChanged = async event => {
    // console.log(event.target.value);
    this.props.exam.time = event.target.value;
    await this.setState({
      time: event.target.value
    });
  };

  displayQuestions() {
    return (
      <React.Fragment>
        <h4>Questions</h4>
        <ExamSettingFormQuestionTable
          onExamSettingFormQuestionTable={this.renderSetQuestions()}
        />
      </React.Fragment>
    );
  }

  renderSetQuestions() {
    let set_questions = [];

    for (let i = 0; i < this.props.exam.question_array.length; i++) {
      for (let j = 0; j < this.props.questions.length; j++) {
        if (
          this.props.exam.question_array[i] ===
          this.props.questions[j].question_id
        ) {
          set_questions.push(this.props.questions[j]);
        }
      }
    }
    // console.log(set_questions);
    if (set_questions) {
      let i = 0;
      return set_questions.map(ques => {
        $('#examSettingFormAllQuesionsTable').DataTable();
        i++;
        return (
          <tr key={ques.question + i + ""}>
            <td>{i}</td>
            <td>{ques.question}</td>
            <td>{ques.option_a}</td>
            <td>{ques.option_b}</td>
            <td>{ques.option_c}</td>
            <td>{ques.option_d}</td>
            <td>{ques.option_e}</td>
            <td>{ques.ans}</td>
            <td>{ques.difficulty_level}</td>
            <td>{ques.marks}</td>
            <td>{ques.section}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={this.deleteQuestion.bind(this, ques, i - 1)}
              >
                <i className="fa fa-trash" aria-hidden="true" />
                Delete
              </button>
            </td>
          </tr>
        );
      });
    }
  }

  deleteQuestion(ques, pos) {
    if (this.props.exam.question_array.length > 1) {
      if (window.confirm(" Are you sure to delete this question?")) {
        this.props.exam.question_array.splice(pos, 1);
        this.props.exam.total_marks -= parseInt(ques.marks);
        this.props.editExamSetTemp(this.props.exam);


      }
    } else {
      alert(
        "Unable to delete! There should be atleast one question in the set!"
      );
    }
  }

  displayNonSetQuestions() {
    if (this.nonSetQuestions) {
      return (
        <React.Fragment>
          <button
            onClick={this.updateExamSet}
            className="btn btn-primary btn-sm"
            style={{ marginBottom: 15 }}
          >
            <i className="fa fa-wrench" aria-hidden="true" />
            Update Exam Set
          </button>

          <h4>All other questions</h4>
          <ExamSettingFormAllQuesionsTable
            onExamSettingFormAllQuesionsTable={this.renderNonSetQuestions()}
          />
        </React.Fragment>
      );
    } else {
      return <div>asfd</div>;
    }
  }

  renderNonSetQuestions() {
    let setQuestions = [];
    for (let i = 0; i < this.props.exam.question_array.length; i++) {
      for (let j = 0; j < this.props.questions.length; j++) {
        if (
          this.props.exam.question_array[i] ===
          this.props.questions[j].question_id
        ) {
          setQuestions.push(this.props.questions[j]);
        }
      }
    }
    // console.log(setQuestions);
    let arr1 = this.props.questions;
    let arr2 = setQuestions;
    let unique1 = arr1.filter(o => arr2.indexOf(o) === -1);
    let unique2 = arr2.filter(o => arr1.indexOf(o) === -1);
    this.nonSetQuestions = unique1.concat(unique2);
    // console.log(this.nonSetQuestions);

    if (this.nonSetQuestions) {
      let i = 0;
      return this.nonSetQuestions.map(ques => {
        i++;
        $('#examSettingFormQuestionTable').DataTable();
        return (
          <tr key={ques.question + i + ""}>
            <td>{i}</td>
            <td>{ques.question}</td>
            <td>{ques.option_a}</td>
            <td>{ques.option_b}</td>
            <td>{ques.option_c}</td>
            <td>{ques.option_d}</td>
            <td>{ques.option_e}</td>
            <td>{ques.ans}</td>
            <td>{ques.difficulty_level}</td>
            <td>{ques.marks}</td>
            <td>{ques.section}</td>
            <td>
              <button
                className="btn btn-primary btn-sm"
                onClick={this.addQuestion.bind(this, ques, i - 1)}
              >
                <i className="fa fa-plus" aria-hidden="true" />
                Add
              </button>
            </td>
          </tr>
        );
      });
    }
  }

  addQuestion(ques, pos) {
    // console.log(ques, pos);
    // console.log(this.props.exam);

    this.props.exam.question_array.push(ques.question_id);
    this.props.exam.total_marks += parseInt(ques.marks);
    this.props.editExamSetTemp(this.props.exam);
  }

  updateExamSet = () => {
    // console.log(this.props.exam);
    if (window.confirm("Are you sure to save the changes?")) {
      this.props.editExamSet(this.props.exam);
      // this.props.history.push("/home/examSet");
      window.location.replace("#/home/examSet")
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {this.displayExamDetails()}
            <hr />
            {this.displayNonSetQuestions()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { questions: state.question, exam: state.oneExamSet, temp: state.oneExamSet };
};

export default connect(
  mapStateToProps,
  { getQuestions, getExamSet, editExamSet, editExamSetTemp, getExamSets }
)(ExamSettingForm);
