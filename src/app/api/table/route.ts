import { NextResponse } from "next/server";

export async function GET() {
  const tableData = [
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
    },
    {
      name: "Client Meeting Notes",
      createdBy: "dev.patel2024@gmail.com",
      modified: "Dec 25, 2024",
      created: "Dec 25, 2024",
    },
  ];

  return NextResponse.json(tableData);
}
