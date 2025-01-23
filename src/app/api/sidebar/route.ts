import { NextResponse } from "next/server";

export async function GET() {
  const sidebarData = [
    {
      name: "Home",
      link: "/home",
      icon: "HomeIcon", // Can map to the actual icon in the frontend
    },
    {
      name: "Part Risk Manager",
      submenus: [
        { name: "My Data", link: "/my-data" },
        { name: "Basic", link: "/basic" },
        { name: "Strategic Sourcing", link: "/strategic-sourcing" },
        { name: "Environmental Compliance", link: "/environmental-compliance" },
        { name: "Market", link: "/market" },
        { name: "One Risk", link: "/one-risk" },
        { name: "Alerts", link: "/alerts" },
      ],
      icon: "ChartBarIcon",
    },
    {
      name: "Supply Chain Watch",
      link: "/supply-chain-watch",
      icon: "ChartBarIcon",
    },
    {
      name: "Supplier Insights",
      link: "/supplier-insights",
      icon: "ChartBarIcon",
    },
    {
      name: "Applications",
      isCategory: true,
    },
    {
      name: "Supplier Management",
      link: "/supplier-management",
      icon: "ChartBarIcon",
    },
    {
      name: "PCN Manager",
      link: "/pcn-manager",
      icon: "ChartBarIcon",
    },
    {
      name: "Frameworks",
      link: "/frameworks",
      icon: "ChartBarIcon",
    },
  ];

  return NextResponse.json(sidebarData);
}
