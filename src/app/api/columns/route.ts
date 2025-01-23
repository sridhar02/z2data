import { ColumnDef, FilterFn } from "@tanstack/react-table";
import { NextResponse } from "next/server";

interface RowData {
  name: string;
  createdBy: string;
  modified: string;
  created: string;
}

export async function GET() {
  const textFilter: FilterFn<RowData> = (row, columnId, filterValue) => {
    const cellValue = row.getValue(columnId) as string;
    return cellValue.toLowerCase().includes(filterValue.toLowerCase());
  };

  const includesFilter: FilterFn<RowData> = (row, columnId, filterValue) => {
    const cellValue = row.getValue(columnId) as string;
    return filterValue.includes(cellValue);
  };
  const columns: ColumnDef<RowData>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: (info) => info.getValue(),
      filterFn: textFilter,
      enableColumnFilter: true,
    },
    {
      accessorKey: "createdBy",
      header: "Created By",
      cell: (info) => info.getValue(),
      filterFn: includesFilter,
      enableColumnFilter: true,
    },
    {
      accessorKey: "modified",
      header: "Modified",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "created",
      header: "Created",
      cell: (info) => info.getValue(),
    },
  ];

  return NextResponse.json(columns);
}
