"use client";

import React, { Fragment } from "react";
import { Menu, Transition, MenuButton } from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  TicketIcon,
  EllipsisVerticalIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import Button from "./Button";

const Header = () => {
  return (
    <header className="bg-[#2a384d] text-white px-4 py-2 flex items-center justify-between pl-0">
      <div className="relative flex items-center w-1/2 max-w-lg">
        <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search anything"
          className="w-full pl-10 pr-16 py-2 rounded-md bg-gray-700 text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="absolute right-3 flex items-center px-2 py-1 text-xs text-gray-300 bg-gray-600 rounded-md">
          ⌘ S
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          isDefault={false}
          className="p-2 rounded-md bg-gray-700 hover:bg-gray-600"
        >
          <EllipsisHorizontalIcon className="h-5 w-5 text-gray-400" />
        </Button>

        <Button
          isDefault={false}
          className="flex items-center px-4 py-2 text-sm font-medium text-white rounded-md bg-gray-700 hover:bg-gray-600"
        >
          <TicketIcon className="h-5 w-5 mr-2" />
          Submit Ticket
        </Button>

        <Menu as="div" className="relative">
          <MenuButton className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-500 p-2 rounded-full">
            <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center text-sm font-medium text-gray-800">
              A
            </div>
            <span className="hidden sm:inline text-sm font-medium">Ali M.</span>
            <span className="ml-1">
              <EllipsisVerticalIcon className="h-4 w-4 text-gray-400" />
            </span>
          </MenuButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Logout
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
