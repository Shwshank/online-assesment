import React from "react";
import { connect } from "react-redux";
import { getQuestions } from "../../actions";
import QuestionTable from "./questionTable";
import { uploadQuestionFile } from "../../api/APIendpoint";
import Footer from "./Footer";
import $ from 'jquery'

class Questions extends React.Component {
  componentDidMount() {
    this.props.getQuestions();
    // console.log(this.props);
    $('#questionTable').DataTable();
  }

  renderQuestions() {
    if (this.props.questions) {
      let i = 0;
      return this.props.questions.map(ques => {
        i++;
        $('#questionTable').DataTable();
        return (
          <tr key={ques.question + i + ""}>
            <td>{i}</td>
            <td>{ques.question}</td>
            <td>{ques.option_a}</td>
            <td>{ques.option_b}</td>
            <td>{ques.option_c}</td>
            <td>{ques.option_d}</td>
            <td>{ques.option_e}</td>
            <td>{ques.ans}</td>
            <td>{ques.difficulty_level}</td>
            <td>{ques.marks}</td>
            <td>{ques.section}</td>
          </tr>
        );
      });
    }
  }

  uploadQuestionsViaFile = $event => {
    let files = $event.target.files || $event.srcElement.files;
    let file = files[0];
    console.log(file);
    let formData = new FormData();
    formData.append("file", file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
       uploadQuestionFile({file : reader.result}).then(res=>{
         console.log(res);
         alert("Success "+res.success)
       })
    }
  };

  render() {
    return (
      <main>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 text-right">
                <span className="upload">
                  <i className="fa fa-upload" />
                  <input
                    type="file"
                    onChange={this.uploadQuestionsViaFile}
                    className="fileUpload"
                  />
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <h4>Questions</h4>
                <QuestionTable onQuestionTable={this.renderQuestions()} />
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
  return { questions: state.question, users: state.user };
};

export default connect(
  mapStateToProps,
  { getQuestions }
)(Questions);
