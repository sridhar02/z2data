/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";

const data: SidebarData = {
  dashboard: [
    { name: "Overview", link: "/dashboard/overview" },
    { name: "Reports", link: "/dashboard/reports" },
    { name: "Settings", link: "/dashboard/settings" },
  ],
  reports: [
    { name: "Monthly Report", link: "/reports/monthly" },
    { name: "Quarterly Report", link: "/reports/quarterly" },
  ],
};

type SidebarData = {
  [key: string]: { name: string; link: string }[];
};

export async function GET(request: NextRequest, context: any) {
  const { slug } = context.params;

  if (!slug || (!data[slug] as any)) {
    return NextResponse.json(
      { error: "Sidebar data not found for this slug" },
      { status: 404 }
    );
  }

  return NextResponse.json(data[slug] as any);
}
