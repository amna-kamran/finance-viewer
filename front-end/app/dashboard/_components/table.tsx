"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso, TableComponents } from "react-virtuoso";
import Link from "next/link";

export interface Column<T> {
  dataKey: keyof T;
  label: string;
  numeric?: boolean;
  width?: number;
  // Optional function to render custom cell
  render?: (value: any, row: T) => React.ReactNode;
}

interface ReactVirtualizedTableProps<T> {
  columns: Column<T>[];
  data: T[];
  height?: number;
}

export function ReactVirtualizedTable<T extends Record<string, any>>({
  columns,
  data,
  height = 400,
}: ReactVirtualizedTableProps<T>) {
  // Virtuoso Table Components
  const VirtuosoTableComponents: TableComponents<T> = {
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

  // Header
  const fixedHeaderContent = () => (
    <TableRow>
      {columns.map((col) => (
        <TableCell
          key={String(col.dataKey)}
          variant="head"
          align={col.numeric ? "right" : "left"}
          style={{ width: col.width }}
          sx={{ backgroundColor: "background.paper" }}
        >
          {col.label}
        </TableCell>
      ))}
    </TableRow>
  );

  // Row content
  const rowContent = (_index: number, row: T) => (
    <React.Fragment>
      {columns.map((col) => (
        <TableCell
          key={String(col.dataKey)}
          align={col.numeric ? "right" : "left"}
        >
          {col.label === "Name" ? (
            <Link className="hover:text-gray-00" href="/detail">
              {" "}
              {row[col.dataKey]}{" "}
            </Link>
          ) : (
            row[col.dataKey]
          )}
        </TableCell>
      ))}
    </React.Fragment>
  );

  return (
    <Paper style={{ height, width: "100%" }}>
      <TableVirtuoso
        data={data}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
