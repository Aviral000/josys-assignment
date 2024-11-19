import React from "react";
import withGridData from "./UserTable.hoc";

interface TableProps {
  data: any[];
  properties: string[];
}

const Table: React.FC<TableProps> = () => {
  return null;
};

const GridTable = withGridData("https://jsonplaceholder.typicode.com/users", [
  "name",
  "email",
])(Table);

export default GridTable;
