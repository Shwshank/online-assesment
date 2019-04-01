import React from "react";
import { connect } from "react-redux";
import { getQuestions } from "../../actions";

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
            <td>{ques.ans}</td>
            <td>{ques.option1}</td>
            <td>{ques.option2}</td>
            <td>{ques.option3}</td>
            <td>{ques.option4}</td>
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
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Question</th>
                <th>Answer/s</th>
                <th>Option1</th>
                <th>Option2</th>
                <th>Option3</th>
                <th>Option4</th>
                <th>Marks</th>
                <th>Section</th>
              </tr>
            </thead>
            <tbody>{this.renderQuestions()}</tbody>
          </table>
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
