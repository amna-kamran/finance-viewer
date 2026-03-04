import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso, TableComponents } from "react-virtuoso";
import Chance from "chance";

interface Data {
  id: number;
  name: string;
  quantity: number;
  totalCost: number;
  currentValue: number;
  costPerUnit: number;
  currentCost: number;
  gainLoss: number;
}

interface ColumnData {
  dataKey: keyof Data;
  label: string;
  numeric?: boolean;
  width?: number;
}

const chance = new Chance(42);

function createData(id: number): Data {
  return {
    id,
    name: chance.first(),
    quantity: chance.age(),
    totalCost: chance.age(),
    currentValue: chance.age(),
    costPerUnit: chance.age(),
    currentCost: chance.age(),
    gainLoss: chance.age(),
  };
}

const columns: ColumnData[] = [
  {
    width: 100,
    label: "Name",
    dataKey: "name",
  },
  {
    width: 100,
    label: "Quantity",
    dataKey: "quantity",
  },
  {
    width: 100,
    label: "Total Cost",
    dataKey: "totalCost",
    numeric: true,
  },
  {
    width: 150,
    label: "Current Value",
    dataKey: "currentValue",
  },
  {
    width: 100,
    label: "Cost/Unit",
    dataKey: "costPerUnit",
  },
  {
    width: 130,
    label: "Current Cost",
    dataKey: "currentCost",
  },
  {
    width: 100,
    label: "Gain/Loss",
    dataKey: "gainLoss",
  },
];

const rows: Data[] = Array.from({ length: 200 }, (_, index) =>
  createData(index)
);

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{ backgroundColor: "background.paper" }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: Data) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ReactVirtualizedTable() {
  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
