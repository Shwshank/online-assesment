import React from 'react';
import { connect } from 'react-redux';

import { getExamSet, getExamSets } from '../../actions';
import ExamSetting from './ExamSetting';

class ExamSet extends React.Component {

  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {examset:{}}
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
        return(
          <tr key={exam.set_id+i+""} >
            <td>{i}</td>
            <td>{exam.name}</td>
            <td>{exam.question_array.length}</td>
            <td>{exam.time}hr</td>
            <td>
              <button onClick={this.examDetails.bind(this, exam, exam.set_id, i)}> Details </button>
            </td>
          </tr>
        )
      })
    }
  }

  examDetails = async(exam, set_id, i )=> {
    // console.log(exam);
    this.props.getExamSet(exam);
    this.setState({
      examSet: exam
    })
  }

  newExamSet = () => {
    // New Exam Set
    let set_id = Math.floor(Math.random() *  8999) + 1000;
    let exam = {set_id:""+set_id, name: "Exam set "+set_id, time: "1", question_array:[]}
    this.props.getExamSet(exam);
    this.props.history.push('/home/examSetSettingForm/123');
  }

  render() {
    return(
      <div>
         <div className="container-fluid" >
            <div className="row" >

              <div className="col-12">
              <h4>Exam Set</h4>
              <br/>
                <button onClick={this.newExamSet} > New Set </button>
              <br/>
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
                <tbody>
                  {this.renderExamSets()}
                </tbody>
               </table>
              </div>

              <div className="col-12" >
                <ExamSetting examSetDetails={this.state.examSet}></ExamSetting>
              </div>
            </div>
         </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return { examSet: state.examSetReducer};
};

export default connect(
  mapStateToProps,
  { getExamSet, getExamSets }
)(ExamSet);
