import { Menu } from "@/app/types";
import { NextResponse } from "next/server";

export async function GET() {
  const sidebarData: Menu[] = [
    {
      name: "Sandbox",
      icon: "",
      link: "/",
      submenus: [
        {
          name: "Folders",
          link: "/my-data",
          icon: "Folder",
        },
        {
          name: "BOMs",
          link: "/basic",
          icon: "Folder",
        },
        {
          name: "Sandbox Master",
          link: "/strategic-sourcing",
          icon: "Folder",
        },
        {
          name: "Settings",
          link: "/environmental-compliance",
          icon: "Settings",
        },
      ],
    },
    {
      name: "PLM Vault",
      icon: "",
      link: "/home",
      submenus: [
        {
          name: "Entire PLM Vault",
          link: "/my-data",
          icon: "CircleStack",
        },
        {
          name: "PLM Master",
          link: "/basic",
          icon: "CircleStack2",
        },
        {
          name: "Hierarchy",
          link: "/basic",
          icon: "CircleStack2",
        },
        {
          name: "Suplliers",
          link: "/strategic-sourcing",
          icon: "CircleStack2",
        },
        {
          name: "Settings",
          link: "/environmental-compliance",
          icon: "CircleStack2",
        },
      ],
    },
    {
      name: "Preferred",
      icon: "",
      link: "/home",
      submenus: [
        {
          name: "Parts",
          link: "/my-data",
          icon: "CircleStack",
        },
        {
          name: "Suppliers",
          link: "/basic",
          icon: "CircleStack",
        },
      ],
    },
  ];
  return NextResponse.json(sidebarData);
}
