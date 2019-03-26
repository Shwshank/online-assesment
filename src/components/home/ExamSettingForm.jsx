import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { getExamSet, getQuestions } from '../../actions';

class ExamSettingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state={exam:{}, questions:[]}
  }

  componentDidMount() {
    this.props.getQuestions();
    this.props.getExamSet();
    console.log(this.props.match.params.id);
  }

  componentDidUpdate() {
    console.log(this.props);
    console.log(this.props.exam);
    console.log(this.props.questions);
  }

  displayExamDetails() {
    if(this.props.exam) {

      return(
        <div>
          Exam Details <br/>
          Name: {this.props.exam.name}
        </div>
      );

    }
  }

  displayQuestions() {
    return(
      <div>
        Question Details
      </div>
    )
  }

  render() {
    return(
      <div>
        <h3>Exam setting form</h3>
        {this.displayExamDetails()}
        <hr/>
        {this.displayQuestions()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { questions: state.questionReducer, exam: state.oneExamSetReducer};
};

export default connect(
  mapStateToProps,
  { getQuestions, getExamSet }
)(ExamSettingForm);
