import React, { Component } from "react";
import Table from "./../common/table";
class QuestionTable extends Component {
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
    { id: 10, label: "Section" }
  ];
  render() {
    const { onQuestionTable } = this.props;
    return <Table data={onQuestionTable} columns={this.columns}  id="questionTable"/>;
  }
}

export default QuestionTable;
