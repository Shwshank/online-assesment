import React from "react";
import { connect } from "react-redux";

class StartExam extends React.Component {
  render() {
    return (
      <main style={{ minHeight: 500 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12" />
            {this.props.examUser.name}
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return { examUser: state.examUser };
};

export default connect(mapStateToProps)(StartExam);
