import React from "react";
import { connect } from "react-redux";
import { clearExamSetForExam } from "../../actions";
import { submitExamSetAPI } from "../../api/APIendpoint";

class ExamResult extends React.Component {

  componentDidUpdate() {
    // console.log(this.props.match.params.id);
    // console.log(this.props);
    let result = {}
    result.token = this.props.examUser.token;
    result.user_id = this.props.examUser.user_details.user_id;
    result.total_marks_obtained = this.props.match.params.id;
    result.time_stamp = Date.now();
    result._list = this.props.responseArray;
    // console.log(result);

    submitExamSetAPI(result).then(res=>{
      console.log(res);
      this.props.clearExamSetForExam()
    })

  }

  render() {
    return(
      <div>
        <h5> Name: {this.props.examUser.user_details.name} </h5>
        <h5> Email: {this.props.examUser.user_details.email} </h5>
        <h5> Phone: {this.props.examUser.user_details.phone} </h5>
        <h4> Result: {this.props.match.params.id} </h4>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { examUser: state.examUser, responseArray: state.responseArray  };
};

export default connect(
  mapStateToProps,
  {clearExamSetForExam}
)(ExamResult);
