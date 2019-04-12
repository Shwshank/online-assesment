import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { getQuestions } from "../../actions";
import QuestionOnSetTable from "./questionOnSetTable";
class ExamSetting extends React.Component {
  constructor(props) {
    super(props);
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
  }

  componentDidUpdate = () => {
    console.log(this.props);
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
        <div>
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
                  <strong>Time :</strong> {this.props.examSetDetails.time} Mins
                </p>
                <p className="margin-zero">
                  <strong>Marks:</strong>
                  {this.props.examSetDetails.total_marks}
                </p>
              </div>
            </div>
          </div>

          {this.displaySetQuestions(questionsOnSet)}
        </div>
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

ExamSetting.propTypes = {
  examSetDetails: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    question_array: PropTypes.array,
    set_id: PropTypes.string,
    time: PropTypes.string,
    total_marks: PropTypes.number,
  })),

  getQuestions:PropTypes.func,

  questions: PropTypes.arrayOf(PropTypes.shape({
    ans: PropTypes.string,
    difficulty_level: PropTypes.string,
    image_url: PropTypes.string,
    marks: PropTypes.string,
    option_a: PropTypes.string,
    option_b: PropTypes.string,
    option_c: PropTypes.string,
    option_d: PropTypes.string,
    option_e: PropTypes.string,
    question: PropTypes.string,
    question_id: PropTypes.string
  }))
}
