import { NextResponse } from "next/server";

export async function GET() {
  const sidebarData = [
    {
      name: "Home",
      icon: "Home", // Reference the key in the icons map
      link: "/home",
    },
    {
      name: "Part Risk Manager",
      icon: "ChartBar",
      submenus: [
        { name: "My Data", link: "/my-data" },
        { name: "Basic", link: "/basic" },
        { name: "Strategic Sourcing", link: "/strategic-sourcing" },
        { name: "Environmental Compliance", link: "/environmental-compliance" },
        { name: "Market", link: "/market" },
        { name: "One Risk", link: "/one-risk" },
        { name: "Alerts", link: "/alerts" },
      ],
    },
    {
      name: "Supply Chain Watch",
      icon: "ChartBar",
      link: "/supply-chain-watch",
    },
    {
      name: "Supplier Insights",
      icon: "ChartBar",
      link: "/supplier-insights",
    },
    {
      name: "Reporting & Dashboards",
      icon: "ChartBar",
      link: "/reporting",
    },
    {
      name: "Events & Alerts",
      icon: "Bell",
      link: "/events-alerts",
    },
    {
      name: "Applications",
      isCategory: true,
    },
    {
      name: "Supplier Management",
      icon: "ChartBar",
      link: "/supplier-management",
    },
    {
      name: "PCN Manager",
      icon: "ChartBar",
      link: "/pcn-manager",
    },
    {
      name: "Frameworks",
      icon: "ChartBar",
      link: "/frameworks",
    },
    {
      name: "Traceability",
      icon: "ChartBar",
      link: "/traceability",
    },
    {
      name: "Responsible Minerals",
      icon: "ChartBar",
      link: "/responsible-minerals",
    },
  ];

  return NextResponse.json(sidebarData);
}
