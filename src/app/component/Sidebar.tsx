"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { icons } from "./icons";
import Link from "next/link";

type SidebarData = {
  name: string;
  icon?: string;
  link: string;
  submenus?: SidebarData[];
  isCategory?: boolean;
};

type OwnProps = {
  menus: SidebarData[];
};

const Sidebar = (props: OwnProps) => {
  const { menus } = props;
  const [openDrawer, setOpenDrawer] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubMenu = (menu: string) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const activateSubmenu = (submenu: string) => {
    setActiveSubmenu(submenu);
  };

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div
      className={`flex flex-col ${
        openDrawer ? "w-64" : " w-16"
      } bg-[#2a384d] h-screen p-2 text-white`}
    >
      <div className="font-bold text-lg mb-6 flex w-full justify-between p-2  items-center">
        <Link href="/">
          <Image
            alt="logo"
            src={"/logo.webp"}
            className="h-[25px] w-[40px]"
            width={40}
            height={25}
          />
        </Link>
        <Image
          alt="drawer"
          src={"/spliticon.svg"}
          className="h-6 w-10 text-white cursor-pointer"
          width={40}
          height={25}
          onClick={handleDrawer}
        />
      </div>

      <ul className="flex-1 overflow-y-auto">
        {menus.map((menu, idx) => (
          <li key={idx} className="mb-4">
            {menu.isCategory ? (
              <div className="text-gray-400 uppercase text-sm tracking-wide">
                {menu.name}
              </div>
            ) : (
              <div>
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
                    {menu.icon && icons[menu.icon]}
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
