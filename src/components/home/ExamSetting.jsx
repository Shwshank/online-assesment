import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getQuestions } from "../../actions";

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

          <p>
            <strong>Name :</strong> {this.props.examSetDetails.name}
          </p>
          <p>
            <strong>Time :</strong> {this.props.examSetDetails.time}
          </p>
          <p>
            <strong>Marks:</strong>
            {this.props.examSetDetails.total_marks}
          </p>

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
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Question</th>
                <th>Option1</th>
                <th>Option2</th>
                <th>Option3</th>
                <th>Option4</th>
                <th>Option5</th>
                <th>Answer/s</th>
                <th>Level</th>
                <th>Marks</th>
                <th>Section</th>
              </tr>
            </thead>
            <tbody>{this.renderQuestions(questionsOnSet)}</tbody>
          </table>
        </div>
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
      <React.Fragment>
        <h4>Setting</h4>
        {this.renderView()}
      </React.Fragment>
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
