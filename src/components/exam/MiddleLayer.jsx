import React from "react";
import history from "../history";
import { connect } from "react-redux";
import { clearExamSetForExam } from "../../actions";
// import ExamResult from "./ExamResult";

class MiddleLayer extends React.Component {

  totalMarks = 0;

  componentDidMount() {

    // console.log(this.props.resultArray);

    alert("Seem like u've run out of time!")
    if(this.props.resultArray.length) {
      for(let j=0; j<this.props.resultArray.length; j++) {
        if(this.props.resultArray[j].ans === this.props.resultArray[j].selected) {
          this.totalMarks += parseInt(this.props.resultArray[j].marks)
        }
      }
    } else {
      this.totalMarks = 0;
    }
      this.props.clearExamSetForExam()
      // console.log(this.totalMarks);
      history.push("/exam/ExamResult/"+this.totalMarks);


  }

  render() {
    return(
      <div>
        Out of time
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { examSetForUser: state.examSetForUser };
};

export default connect(
  mapStateToProps,
  {clearExamSetForExam}
)(MiddleLayer);

// export default MiddleLayer
