import { ColumnDef } from "@tanstack/react-table";
import { SelectColumnFilter, TextColumnFilter } from "../component/Filters";

export interface RowData {
  name: string;
  createdBy: string;
  modified: string;
  created: string;
}

export const columns: ColumnDef<RowData>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => info.getValue(),
    filterFn: "text",
    enableColumnFilter: true,
    Filter: TextColumnFilter,
  },
  {
    accessorKey: "createdBy",
    header: "Created By",
    cell: (info) => info.getValue(),
    filterFn: "includes",
    enableColumnFilter: true,
    Filter: SelectColumnFilter,
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

export const data = [
  {
    name: "Q4 Reports 2024",
    createdBy: "alimamedgasanov3@gmail.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },
  {
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },{
    name: "Project Alpha Documentation",
    createdBy: "sarah.chen892@outlook.com",
    modified: "Dec 25, 2024",
    created: "Dec 25, 2024",
  },
];
