// import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { getExamSet, getQuestions, editExamSet } from '../../actions';

class ExamSettingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state={name:"", time:""}
    this.nonSetQuestions = [];
  }

  componentDidMount() {

    this.props.getQuestions();
    this.props.getExamSet();
    // console.log(this.props.match.params.id);
  }

  componentDidUpdate() {
    // console.log(this.props);
    this.displayExamDetails()
  }

  displayExamDetails() {
    if(this.props.exam) {
      return(
        <div>
          Name:
          <input  type="text" value={this.props.exam.name} onChange={this.setNameChanged} />
          <br/>
          Time:
          <input  type="text" value={this.props.exam.time} onChange={this.setTimeChanged} />
          <br/>
          Set ID: {this.props.exam.set_id}
          <hr/>
          {this.displayQuestions()}
        </div>
      );
    }
  }

  setNameChanged = async(event) => {
    console.log(event.target.value);
    this.props.exam.name = event.target.value
    await this.setState({
      name: event.target.value
    });
  }

  setTimeChanged = async(event) => {
    console.log(event.target.value);
    this.props.exam.time = event.target.value
    await this.setState({
      time: event.target.value
    });
  }

  displayQuestions() {
    return(
      <div style={{overflow: 'auto'}} >
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
            <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.renderSetQuestions()}
          </tbody>
        </table>
      </div>
    );
  }

  renderSetQuestions() {
    let set_questions = [];

    for(let i = 0; i < this.props.exam.question_array.length; i++) {

      for(let j=0; j < this.props.questions.length; j++) {

        if(this.props.exam.question_array[i] === this.props.questions[j].question_id) {
          set_questions.push(this.props.questions[j])
        }
      }
    }
    // console.log(set_questions);
    if(set_questions) {
      let i=0;
      return set_questions.map(ques=>{
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
            <td>
              <button onClick={this.deleteQuestion.bind(this, ques, (i-1))}>
                Delete
              </button>
            </td>
          </tr>
        )
      });
    }
  }

  deleteQuestion(ques, pos) {
    if(this.props.exam.question_array.length>1) {
      if(window.confirm(" Are you sure to delete this question?")){
        this.props.exam.question_array.splice(pos, 1)
        // console.log(this.props.exam);
        this.props.editExamSet(this.props.exam)
      }
    } else {
      alert("Unable to delete! There should be atleast one question in the set!")
    }
  }

  displayNonSetQuestions() {

    if(this.nonSetQuestions) {

      return(
      <div style={{overflow: 'auto'}} >
        <h4>All other questions</h4>
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
            <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.renderNonSetQuestions()}
          </tbody>
        </table>
      </div>
    );

    } else {

      return(
        <div>
         asfd
        </div>
      )

    }
  }

  renderNonSetQuestions() {
    let setQuestions = [];
    for(let i = 0; i < this.props.exam.question_array.length; i++) {
      for(let j=0; j < this.props.questions.length; j++) {
        if(this.props.exam.question_array[i] === this.props.questions[j].question_id) {
          setQuestions.push(this.props.questions[j])
        }
      }
    }
    // console.log(setQuestions);
    let arr1 = this.props.questions
    let arr2 = setQuestions
    let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
    let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);
    this.nonSetQuestions = unique1.concat(unique2);
    // console.log(this.nonSetQuestions);

    if(this.nonSetQuestions) {
      let i=0;
      return this.nonSetQuestions.map(ques=>{
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
            <td>
              <button onClick={this.addQuestion.bind(this, ques, (i-1))}>
                Add
              </button>
            </td>
          </tr>
        )
      });
    }

  }

  addQuestion(ques, pos) {
    this.props.exam.question_array.push(ques.question_id)
    // console.log(this.props.exam);
    this.props.editExamSet(this.props.exam)
  }

  updateExamSet = () => {
    // console.log(this.props.exam);
    if(window.confirm("Are you sure to save the changes?")) {
      this.props.editExamSet(this.props.exam);
      this.props.history.push('/home/examSet');
    }
  }

  render() {
    return(
      <div>
        <h3>Exam setting form</h3>
        <div className="row">

          <div className="col-6">
            {this.displayExamDetails()}
          </div>

          <div className="col-6" >
            {this.displayNonSetQuestions()}
          </div>
        </div>

        <br/>
          <button onClick={this.updateExamSet} > Update Exam Set </button>
        <br/>

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return { questions: state.question, exam: state.oneExamSet};
};

export default connect(
  mapStateToProps,
  { getQuestions, getExamSet, editExamSet }
)(ExamSettingForm);
