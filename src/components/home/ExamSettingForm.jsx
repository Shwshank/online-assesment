import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ExamSettingForm extends React.Component {

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return(
      <div>
        <h4>Exam Setting Form</h4>
      </div>
    )
  }
}

export default reduxForm()(ExamSettingForm);
