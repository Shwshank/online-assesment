import React, { Component } from "react";
import Table from "./../common/table";
class ExamSettingFormAllQuesionsTable extends Component {
  columns = [
    { id: 0, label: "#" },
    { id: 1, label: "Question" },
    { id: 2, label: "Option1" },
    { id: 3, label: "Option2" },
    { id: 4, label: "Option3" },
    { id: 6, label: "Option4" },
    { id: 7, label: "Option5" },
    { id: 8, label: "Answer/s" },
    { id: 9, label: "Level" },
    { id: 10, label: "Marks" },
    { id: 11, label: "Section" },
    { id: 12, label: "Delete" }
  ];
  render() {
    const { onExamSettingFormAllQuesionsTable } = this.props;
    return (
      <Table data={onExamSettingFormAllQuesionsTable} columns={this.columns} id="examSettingFormAllQuesionsTable"/>
    );
  }
}

export default ExamSettingFormAllQuesionsTable;
