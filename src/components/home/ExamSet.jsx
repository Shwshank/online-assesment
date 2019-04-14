import React from "react";
import { connect } from "react-redux";

import { getExamSet, getExamSets } from "../../actions";
import ExamSetting from "./ExamSetting";
import ExamSetTable from "../../components/home/examSetTable";
import Footer from "./Footer";

class ExamSet extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = { examset: {} };
  }

  componentDidMount() {
    this.props.getExamSets();
    // console.log(this.props);
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
            <td>{exam.time} mins</td>
            <td>{exam.total_marks}</td>
            <td align="right">
              <button
                className="btn btn-primary btn-sm"
                onClick={this.examDetails.bind(this, exam, exam.set_id, i)}
              >
                <i className="fa fa-info-circle" aria-hidden="true" />
                Details
              </button>
            </td>
          </tr>
        );
      });
    }
  }

  examDetails = async (exam, set_id, i) => {
    // console.log(exam);
    this.props.getExamSet(exam);
    this.setState({
      examSet: exam
    });
  };

  newExamSet = () => {
    // New Exam Set
    let set_id = Math.floor(Math.random() * 8999) + 1000;
    let exam = {
      set_id: "" + set_id,
      name: "Exam set " + set_id,
      time: "30",
      question_array: [],
      total_marks: 0
    };
    this.props.getExamSet(exam);
    // this.props.history.push("/home/examSetSettingForm/123");
    window.location.replace("#/home/examSetSettingForm/set_id");
  };

  render() {
    return (
      <main>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h4>
                  Exam Set
                  <button
                    onClick={this.newExamSet}
                    className="btn btn-primary btn-sm float-right"
                    style={{ marginBottom: 15 }}
                  >
                    <i className="fa fa-cog" aria-hidden="true" />
                    New Set
                  </button>
                </h4>

                <div className="exam-set-table">
                  <ExamSetTable onExamSetTable={this.renderExamSets()} />
                </div>
              </div>

              <div className="col-lg-12">
                <ExamSetting examSetDetails={this.state.examSet} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}

const mapStateToProps = state => {
  return { examSet: state.examSet };
};

export default connect(
  mapStateToProps,
  { getExamSet, getExamSets }
)(ExamSet);
