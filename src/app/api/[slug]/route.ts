import { NextResponse } from "next/server";

const data = {
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

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  if (!slug || !data[slug]) {
    return NextResponse.json(
      { error: "Sidebar data not found for this slug" },
      { status: 404 }
    );
  }

  return NextResponse.json(data?.[slug]);
}
