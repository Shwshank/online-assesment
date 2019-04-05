import React from "react";
import { connect } from "react-redux";
import { getQuestions } from "../../actions";
import QuestionTable from "./questionTable";

class Questions extends React.Component {
  componentDidMount() {
    this.props.getQuestions();
    // console.log(this.props);
  }

  renderQuestions() {
    if (this.props.questions) {
      let i = 0;
      return this.props.questions.map(ques => {
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
  }

  render() {
    return (
      <React.Fragment>
        <form className="col-lg-12">
          <div className="upload">
            <i className="fa fa-upload" aria-hidden="true" />
            <input
              type="file"
              multiple=""
              className="fileUpload"
              style={{ width: 100 }}
            />
          </div>
        </form>

        <div className="col-lg-12">
          <h4>Questions</h4>
          <QuestionTable onQuestionTable={this.renderQuestions()} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { questions: state.question, users: state.user };
};

export default connect(
  mapStateToProps,
  { getQuestions }
)(Questions);
