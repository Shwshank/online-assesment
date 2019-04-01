import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getQuestions } from "../../actions";

class ExamSetting extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = { set_id: "", name: "", time: "", question: [], total_marks: 0 };
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
        <div>
          <Link
            onClick={this.handleLinkClick.bind(
              this,
              this.props.examSetDetails.set_id
            )}
            to={`/home/examSetSettingForm/${this.props.examSetDetails.set_id}`}
            className="btn btn-danger btn-sm"
            style={{ width: 70 }}
          >
            <i className="fa fa-pencil" aria-hidden="true" />
            Edit
          </Link>
          <p>Name : {this.props.examSetDetails.name} </p>
          <p>Time: {this.props.examSetDetails.time}</p>
          <p>Marks: {this.props.examSetDetails.total_marks}</p>
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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Question</th>
              <th scope="col">Option1</th>
              <th scope="col">Option2</th>
              <th scope="col">Option3</th>
              <th scope="col">Option4</th>
              <th scope="col">Option5</th>
              <th scope="col">Answer/s</th>
              <th scope="col">Level</th>
              <th scope="col">Marks</th>
              <th scope="col">Section</th>
            </tr>
          </thead>
          <tbody>{this.renderQuestions(questionsOnSet)}</tbody>
        </table>
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
    return (
      <div>
        <h4>Setting</h4>
        {this.renderView()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { questions: state.question };
};

export default connect(
  mapStateToProps,
  { getQuestions }
)(ExamSetting);
