import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
const Table = ({ data, columns }) => {
  return (
    <div className="table-responsive">
      <table className="table ">
        <TableHeader columns={columns} />
        <TableBody data={data} />
      </table>
    </div>
  );
};

export default Table;
