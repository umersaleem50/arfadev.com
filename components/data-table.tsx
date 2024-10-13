import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

function DataTable({
  firstRow,
  dataRow,
}: {
  firstRow: { cells: string[] };
  dataRow: { cells: string[] }[];
}) {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          {firstRow.cells?.map((cell, key: number) => {
            return (
              <TableHead className="md:table-cell" key={key}>
                {cell}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataRow.map(({ cells }: any, key: number) => {
          return (
            <TableRow>
              {cells.map((cell: string, key: number) => {
                return (
                  <TableCell className="md:table-cell" key={key}>
                    {cell}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default DataTable;
