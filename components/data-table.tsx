import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function DataTable({
  firstRow,
  dataRow,
}: {
  firstRow: { cells: string[] };
  dataRow: { cells: string[] }[];
}) {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            {firstRow.cells?.map((cell, index) => (
              <TableHead key={index} className="hidden md:table-cell">
                {cell}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataRow.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="flex flex-col md:table-row">
              {row.cells.map((cell, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  className="flex justify-between md:table-cell"
                >
                  <span className="font-medium md:hidden">
                    {firstRow.cells[cellIndex]}:
                  </span>
                  <span className="text-right md:text-left">{cell}</span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;
