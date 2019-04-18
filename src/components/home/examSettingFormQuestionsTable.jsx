import React, { Component } from "react";
import Table from "./../common/table";
class ExamSettingFormQuestionTable extends Component {
  columns = [
    { id: 0, label: "#" },
    { id: 1, label: "Question" },
    { id: 2, label: "Option1" },
    { id: 3, label: "Option2" },
    { id: 4, label: "Option3" },
    { id: 5, label: "Option4" },
    { id: 6, label: "Option5" },
    { id: 7, label: "Answer/s" },
    { id: 8, label: "Level" },
    { id: 9, label: "Marks" },
    { id: 10, label: "Section" },
    { id: 11, label: "Delete" }
  ];
  render() {
    const { onExamSettingFormQuestionTable } = this.props;
    return (
      <Table data={onExamSettingFormQuestionTable} columns={this.columns}  id="examSettingFormQuestionTable"/>
    );
  }
}

export default ExamSettingFormQuestionTable;
