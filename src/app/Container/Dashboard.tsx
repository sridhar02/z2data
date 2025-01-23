"use client";

import Table from "../component/Table";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import PageHeader from "../component/PageHeader";
import PageSidebar from "../component/PageSidebar";
import { ColumnDef } from "@tanstack/react-table";

interface RowData {
  name: string;
  createdBy: string;
  modified: string;
  created: string;
}

type OwnProps = {
  data: RowData[];
  columns: ColumnDef<RowData>[];
};

function Dashboard(props: OwnProps) {
  const { data, columns } = props;

  const TabsList = [
    {
      name: "All Folders",
      content: <Table columns={columns} data={data} />,
    },
    {
      name: "My Folders",
      content: "content 2",
    },
    {
      name: "Favorited",
      content: "content 3",
    },
  ];
  return (
    <main className="flex flex-col h-screen w-full">
      <PageHeader />
      <div className="flex h-full">
        <PageSidebar />
        <div className="flex flex-col w-full h-full">
          <TabGroup className="flex flex-col w-full h-full">
            <TabList className="p-3 flex gap-2 border-b-2 border-gray-300 w-full">
              {TabsList.map((tab, idx) => (
                <Tab
                  key={idx}
                  className="data-[selected]:underline data-[selected]:underline-blue-500 outline-none active:none"
                >
                  {tab.name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="h-full flex-1 overflow-hidden">
              {TabsList.map((tab, idx) => (
                <TabPanel
                  key={idx}
                  className={`h-full overflow-y-auto ${idx === 0 ? "" : "p-2"}`}
                >
                  {tab.content}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
