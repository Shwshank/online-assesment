import React, { Component } from "react";
import Table from "../common/table";
class UserTable extends Component {
  columns = [
    { id: 0, label: "#" },
    { id: 1, label: "Name" },
    { id: 2, label: "Email" },
    { id: 3, label: "Phone" },
    { id: 4, label: "Status" },
    { id: 5, label: "Marks" },
    { id: 6, label: "Exam Time" },
    { id: 7, label: "Action" }
  ];
  render() {
    const { onUserTable } = this.props;

    return (
      <React.Fragment>
        <Table data={onUserTable} columns={this.columns} />
      </React.Fragment>
    );
  }
}

export default UserTable;
