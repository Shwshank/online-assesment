import React from "react";
import { connect } from "react-redux";

class StartExam extends React.Component {

  render() {
    return(
      <div>
      {this.props.examUser.name}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
return { examUser: state.examUser }
}

export default connect(
mapStateToProps
)(StartExam);
