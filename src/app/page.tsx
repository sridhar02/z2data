"use client";

import Table from "./component/Table";
import { BookmarkIcon, PlayIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import Button from "./component/Button";
import { columns, data } from "./utils/data";
import PageSidebar from "./component/PageSidebar";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full">
      <div className="flex justify-between gap-2 w-full items-center border-b-2 p-2">
        <div>Part Risk Manager / My Data</div>
        <div className="flex gap-2">
          <Button className="flex">
            <BookmarkIcon className="h-5 w-5 mr-2" />
            Saved Reports
          </Button>
          <Button className="flex">
            <PlayIcon className="h-5 w-5 mr-2" />
            Run Report
          </Button>
          <Button fill className="flex">
            <PlusIcon className="h-5 w-5 mr-2" />
            New BOM
          </Button>
        </div>
      </div>
      <div className="flex h-full">
        <PageSidebar />
        <div className="flex flex-col w-full h-full">
          <TabGroup className="flex flex-col w-full h-full">
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
            <TabPanels className="h-full flex-1 overflow-hidden">
              <TabPanel className="overflow-auto h-full">
                <Table columns={columns} data={data} />
              </TabPanel>
              <TabPanel className="overflow-auto h-full">Content 2</TabPanel>
              <TabPanel className="overflow-auto h-full">Content 3</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </main>
  );
}
