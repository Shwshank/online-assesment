import React from "react";
import { connect } from 'react-redux';
import { getQuestions } from '../../actions';

class Questions extends React.Component {

  // constructor(props) {
  //   super(props);
  //   console.log(props);
  // }

  componentDidMount() {
    this.props.getQuestions();
    // console.log(this.props);
  }

  renderQuestions() {
    if(this.props.questions) {
      let i=0;
      return this.props.questions.map(ques=>{
        i++;
        return(
          <tr key={ques.question+i+""} >
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
        )
      });
    }
  }

  render() {
    return (
      <div className="col-lg-12">
        <h4>Questions</h4>
        <table className="table">
          <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Question</th>
            <th scope="col">Answer/s</th>
            <th scope="col">Option1</th>
            <th scope="col">Option2</th>
            <th scope="col">Option3</th>
            <th scope="col">Option4</th>
            <th scope="col">Marks</th>
            <th scope="col">Section</th>
            </tr>
          </thead>
          <tbody>
            {this.renderQuestions()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return { questions: state.questionReducer, users: state.userReducer};
};

export default connect(
  mapStateToProps,
  { getQuestions }
)(Questions);
