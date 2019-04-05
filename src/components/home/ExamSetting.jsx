import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getQuestions } from "../../actions";
import QuestionOnSetTable from "./questionOnSetTable";
class ExamSetting extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      set_id: "",
      name: "",
      time: "",
      question: [],
      total_marks: 0
    };
  }

  componentDidMount() {
    this.props.getQuestions();
    // console.log(this.props);
  }

  componentDidUpdate = () => {
    // console.log(this.props.examSetDetails);
  };

  handleLinkClick(set_id) {
    // console.log(set_id);
  }

  renderView() {
    if (this.props.examSetDetails) {
      // filter questions from question reducer
      let questionsOnSet = _.filter(this.props.questions, v =>
        _.includes(this.props.examSetDetails.question_array, v.question_id)
      );

      return (
        <React.Fragment>
          <div className="card" style={{ marginBottom: 30 }}>
            <div className="card-body">
              <strong className="card-title" style={{ fontSize: 20 }}>
                Setting
              </strong>
              <Link
                onClick={this.handleLinkClick.bind(
                  this,
                  this.props.examSetDetails.set_id
                )}
                to={`/home/examSetSettingForm/${
                  this.props.examSetDetails.set_id
                }`}
                className="btn btn-primary btn-sm float-right"
                style={{ width: 70 }}
              >
                <i className="fa fa-pencil" aria-hidden="true" />
                Edit
              </Link>
              <div className="card-text">
                <p>
                  <strong>Name :</strong> {this.props.examSetDetails.name}
                </p>
                <p>
                  <strong>Time :</strong> {this.props.examSetDetails.time}
                </p>
                <p className="margin-zero">
                  <strong>Marks:</strong>
                  {this.props.examSetDetails.total_marks}
                </p>
              </div>
            </div>
          </div>

          {this.displaySetQuestions(questionsOnSet)}
        </React.Fragment>
      );
    } else {
      return (
        <div>
          <p> Select a set </p>
        </div>
      );
    }
  }

  displaySetQuestions(questionsOnSet) {
    if (questionsOnSet.length) {
      return (
        <QuestionOnSetTable
          onQuestionOnSetTable={this.renderQuestions(questionsOnSet)}
        />
      );
    }
  }

  renderQuestions(questionsOnSet) {
    let i = 0;
    return questionsOnSet.map(ques => {
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
        </tr>
      );
    });
  }

  render() {
    return <React.Fragment>{this.renderView()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return { questions: state.question };
};

export default connect(
  mapStateToProps,
  { getQuestions }
)(ExamSetting);
