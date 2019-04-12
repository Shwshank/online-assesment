import React from "react";
import { connect } from "react-redux";
import Countdown from 'react-countdown-now';
import { examResponse } from "../../actions";
import MiddleLayer from "./MiddleLayer";

class StartExam extends React.Component {

  totalMarks = 0;
  resultArray = [];

  componentDidMount() {
    // console.log(this.props.examSetForUser);
  }

  // componentWillUnmount() {
  //   if(window.confirm("Are you sure to quit the exam?")) {}
  // }

  renderTime = () => {
    // console.log(this.props);
    if(this.props.examSetForUser.set_data){
      if(this.props.examSetForUser.set_data.time) {
        let timeAllowted = parseInt(this.props.examSetForUser.set_data.time) * 60  * 1000;
        // console.log(timeAllowted);
        return(
          <Countdown date={Date.now() + timeAllowted} >
            <MiddleLayer resultArray={this.resultArray}/>
          </Countdown>
        )
      }
    }
  }

  onSiteChanged=(i, question, ans, marks, selected)=>{
    // console.log(i);
    // console.log(selected);
    // console.log(ans);
    // console.log(parseInt(marks));
    let result = {
      sno: i,
      question: question,
      ans: ans,
      selected: selected,
      marks: marks
    }

    let presentFlag = false;
    let pos = 0;
    for(let j=0; j<this.resultArray.length; j++) {
        if(this.resultArray[j].sno === i) {
          presentFlag = true;
          pos = j;
          break;
        }
    }

    if(presentFlag) {
      this.resultArray[pos].selected = selected
    } else {
      this.resultArray.push(result);
    }

    // console.log(this.resultArray);
  }

  renderOptions = (i, question, ans, marks, options)=>{
    let y=0;

    return options.map(option=>{
      y++;
      return (
        <div key={y}>
          &nbsp; &nbsp; {y}.
          <input type="radio"
                name={i}
                value={option}
                onChange={this.onSiteChanged.bind(this,i, question, ans, marks, option)}
                />
          {option}

        </div>
      )
    })
  }

  renderQuestion = ()=>{
    let i=0;

    if(this.props.examSetForUser.template_data) {

      return this.props.examSetForUser.template_data.map(ques=>{
        i++;
        return(
          <div key={i}>
            {i}. {ques.question}
              <br/>
                <b> Marks: {ques.marks} </b>
              <br/>
              {this.renderOptions(i, ques.question, ques.ans, ques.marks, ques.options)}
              <br/>
            <hr/>
          </div>
        )
      })

    } else {
      return(
        <div>
         <h4>Opps! seems like you have completed the exam. Please contact administrator</h4>
        </div>
      )
    }

  }

  submitExam=()=>{
    if(window.confirm("Are you sure to submit the exam?")) {
      for(let j=0; j<this.resultArray.length; j++) {
        if(this.resultArray[j].ans === this.resultArray[j].selected) {
          this.totalMarks += parseInt(this.resultArray[j].marks)
        }
      }
      // console.log(this.totalMarks);
      // this.props.history.push("/exam/ExamResult/"+this.totalMarks);
      window.location.replace("#/exam/ExamResult/"+this.totalMarks)
    }
  }

  displaySubmitButton() {
    if(this.props.examSetForUser.template_data){
      return(
        <div>
        <button onClick={this.submitExam}>
        Submit
        </button>
        </div>
      )
    }
  }

  componentWillUnmount() {
    this.props.examResponse(this.resultArray)
    // console.log(this.props);
  }

  render() {
    // console.log(Countdown);
    return (
      <main style={{ minHeight: 500 }}>
      {this.renderTime()}
        <div className="container">
          <div className="row">
            <div className="col-lg-12" />
              {this.renderQuestion()}
            </div>
        </div>

        {this.displaySubmitButton()}

      </main>
    );
  }
}

const mapStateToProps = state => {
  return { examUser: state.examUser, examSetForUser: state.examSetForUser, responseArray: state.responseArray };
};

export default connect(
  mapStateToProps,
  {examResponse}
)(StartExam);
