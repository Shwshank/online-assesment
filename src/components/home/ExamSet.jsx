import React from "react";
import { connect } from "react-redux";

import { getExamSets } from "../../actions";
import ExamSetting from "./ExamSetting";

class ExamSet extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.getExamSets();
    console.log(this.props);
  }

  renderExamSets() {
    if (this.props.examSet) {
      let i = 0;
      return this.props.examSet.map(exam => {
        i++;
        return (
          <tr key={exam.set_id + i + ""}>
            <td>{i}</td>
            <td>{exam.name}</td>
            <td>{exam.question_array.length}</td>
            <td>{exam.time}hr</td>
            <td>
              <button
                className="btn btn-success"
                onClick={this.examDetails.bind(this, exam.set_id, i)}
              >
                Details
              </button>
            </td>
          </tr>
        );
      });
    }
  }

  examDetails = async (set_id, i) => {
    console.log(i);
    console.log(set_id);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <form style={{ width: "100%" }}>
            <input
              type="file"
              multiple=""
              className="fileUpload float-right"
              style={{ width: 100 }}
            />
          </form>

          <div className="col-lg-6">
            <h4>Exam Set</h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Set Name</th>
                  <th scope="col">Questions</th>
                  <th scope="col">Time</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>{this.renderExamSets()}</tbody>
            </table>
          </div>

          <div className="col-lg-6">
            <ExamSetting />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { examSet: state.examSetReducer };
};

export default connect(
  mapStateToProps,
  { getExamSets }
)(ExamSet);
