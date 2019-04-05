import React, { Component } from "react";
import Table from "./../common/table";
class ExamSetTable extends Component {
  columns = [
    { id: 0, label: "#" },
    { id: 1, label: "Set Name" },
    { id: 2, label: "Questions" },
    { id: 3, label: "Time" },
    { id: 4, label: "Marks" },
    { id: 5, label: "Details" }
  ];
  render() {
    const { onExamSetTable } = this.props;
    return <Table data={onExamSetTable} columns={this.columns} />;
  }
}

export default ExamSetTable;
