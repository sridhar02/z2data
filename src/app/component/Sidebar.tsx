// export default Sidebar;
"use client";

import React, { useState } from "react";
import {
  HomeIcon,
  ChartBarIcon,
  BellIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubMenu = (menu: string) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const activateSubmenu = (submenu: string) => {
    setActiveSubmenu(submenu);
  };

  const menus = [
    {
      name: "Home",
      icon: <HomeIcon className="w-5 h-5" />,
      link: "/home",
    },
    {
      name: "Part Risk Manager",
      icon: <ChartBarIcon className="w-5 h-5" />,
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
      icon: <ChartBarIcon className="w-5 h-5" />,
      link: "/supply-chain-watch",
    },
    {
      name: "Supplier Insights",
      icon: <ChartBarIcon className="w-5 h-5" />,
      link: "/supplier-insights",
    },
    {
      name: "Reporting & Dashboards",
      icon: <ChartBarIcon className="w-5 h-5" />,
      link: "/reporting",
    },
    {
      name: "Events & Alerts",
      icon: <BellIcon className="w-5 h-5" />,
      link: "/events-alerts",
    },
    {
      name: "Applications",
      isCategory: true,
    },
    {
      name: "Supplier Management",
      icon: <ChartBarIcon className="w-5 h-5 text-blue-500" />,
      link: "/supplier-management",
    },
    {
      name: "PCN Manager",
      icon: <ChartBarIcon className="w-5 h-5 text-red-500" />,
      link: "/pcn-manager",
    },
    {
      name: "Frameworks",
      icon: <ChartBarIcon className="w-5 h-5 text-purple-500" />,
      link: "/frameworks",
    },
    {
      name: "Traceability",
      icon: <ChartBarIcon className="w-5 h-5 text-green-500" />,
      link: "/traceability",
    },
    {
      name: "Responsible Minerals",
      icon: <ChartBarIcon className="w-5 h-5 text-blue-500" />,
      link: "/responsible-minerals",
    },
  ];

  return (
    <div className="flex flex-col w-64 bg-[#2a384d] h-screen p-4 text-white">
      <div className="font-bold text-lg mb-6">Part Risk Manager</div>
      <ul className="flex-1 overflow-y-auto">
        {menus.map((menu, idx) => (
          <li key={idx} className="mb-4">
            {/* Category Header */}
            {menu.isCategory ? (
              <div className="text-gray-400 uppercase text-sm tracking-wide">
                {menu.name}
              </div>
            ) : (
              <div>
                {/* Main Menu */}
                <div
                  className={`flex items-center justify-between cursor-pointer ${
                    menu.submenus
                      ? "hover:text-gray-300"
                      : "hover:text-blue-400"
                  }`}
                  onClick={() =>
                    menu.submenus ? toggleSubMenu(menu.name) : null
                  }
                >
                  <div className="flex items-center">
                    {menu.icon}
                    <span className="ml-3">{menu.name}</span>
                  </div>
                  {menu.submenus && (
                    <>
                      {openSubMenu === menu.name ? (
                        <ChevronDownIcon className="w-4 h-4" />
                      ) : (
                        <ChevronRightIcon className="w-4 h-4" />
                      )}
                    </>
                  )}
                </div>

                {/* Submenus */}
                {menu.submenus && openSubMenu === menu.name && (
                  <ul className="mt-2 ml-6 border-l border-gray-600 pl-2">
                    {menu.submenus.map((submenu, subIdx) => (
                      <li
                        key={subIdx}
                        className={`mb-2 pl-4 text-gray-300 hover:text-blue-400 ${
                          activeSubmenu === submenu.name
                            ? "text-blue-400 font-semibold"
                            : ""
                        }`}
                      >
                        <a
                          href={submenu.link}
                          onClick={() => activateSubmenu(submenu.name)}
                        >
                          {submenu.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
