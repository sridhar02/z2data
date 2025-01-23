"use client";

import Table from "./component/Table";
import { columns, data } from "./utils/data";
import Button from "./component/Button";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function Home() {
  const items = [
    {
      name: "Sandbox",
      icon: "",
      link: "/home",
      submenus: [
        { name: "Folders", link: "/my-data", icon: "" },
        { name: "BOMs", link: "/basic" },
        { name: "Sandbox Master", link: "/strategic-sourcing" },
        { name: "Settings", link: "/environmental-compliance" },
      ],
    },
    {
      name: "PLM Vault",
      icon: "",
      link: "/home",
      submenus: [
        { name: "Entire PLM Vault", link: "/my-data", icon: "" },
        { name: "PLM Master", link: "/basic" },
        { name: "Hierarchy", link: "/basic" },
        { name: "Suplliers", link: "/strategic-sourcing" },
        { name: "Settings", link: "/environmental-compliance" },
      ],
    },
    {
      name: "Preferred",
      icon: "",
      link: "/home",
      submenus: [
        { name: "Parts", link: "/my-data", icon: "" },
        { name: "Suppliers", link: "/basic" },
      ],
    },
  ];
  return (
    <main className="flex flex-col h-full w-full">
      <div className="flex justify-between gap-2 w-full items-center border-b-2 p-2">
        <div>Part Risk Manager / My Data</div>
        <div className="flex gap-2">
          <Button>Saved Reports</Button>
          <Button>Run Report</Button>
          <Button fill>New BOM</Button>
        </div>
      </div>
      <div className="flex h-full">
        <div className=" p-2 w-[160px] flex gap-2 flex-col border-r-2 h-full">
          {items.map((item, idx) => (
            <div key={idx} className="gap-2 flex flex-col">
              <div>{item.name}</div>
              <div className="flex flex-col gap-2">
                {item.submenus.map((submenu, subIdx) => (
                  <div key={subIdx} className="ml-2">
                    {submenu.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <TabGroup className="w-full">
            <TabList className="p-3 flex gap-2 border-b-2 border-gray-300 w-full">
              <Tab className="data-[selected]:underline data-[selected]:underline-blue-500 outline-none active:none">
                All Folders
              </Tab>
              <Tab className="data-[selected]:underline data-[selected]:underline-blue-500 outline-none">
                My Folders
              </Tab>
              <Tab className="data-[selected]:underline data-[selected]:underline-blue-500 outline-none">
                Favorited
              </Tab>
            </TabList>
            <TabPanels className="">
              <TabPanel>
                <Table columns={columns} data={data} />
              </TabPanel>
              <TabPanel>Content 2</TabPanel>
              <TabPanel>Content 3</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </main>
  );
}
