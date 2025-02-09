import Select from "react-select";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Table } from "@tanstack/react-table";
interface RowData {
  name: string;
  createdBy: string;
  modified: string;
  created: string;
}

type HeaderProps<T extends RowData> = {
  table: Table<T>;
  data: T[];
};

type Option = {
  value: string;
  label: string;
};

const TableHeader = <T extends RowData>({ table, data }: HeaderProps<T>) => {
  const [searchText, setSearchText] = useState("");

  const [createdByFilter, setCreatedByFilter] = useState<Option | null>(null);
  const [creationDateFilter, setCreationDateFilter] = useState<Option | null>(
    null
  );

  const createdByOptions = Array.from(
    new Set(data.map((row) => row.createdBy))
  ).map((value) => ({
    value,
    label: value,
  }));

  const handleSearch = (value: string) => {
    setSearchText(value);
    table.setGlobalFilter(value);
  };
  const handleCreatedByChange = (option: Option | null) => {
    setCreatedByFilter(option);
    table.setGlobalFilter(option?.value || "");
  };

  const creationDateOptions = Array.from(
    new Set(data.map((row) => row.created))
  ).map((value) => ({
    value,
    label: value,
  }));

  const handleCreationDateChange = (option: Option | null) => {
    setCreationDateFilter(option);
    table.setGlobalFilter(option?.value || "");
  };

  return (
    <div className="flex gap-3 justify-between items-center p-4border-gray-300 p-2">
      <div className="flex items-center space-x-4 w-10/12">
        <div className="relative mb-4 mt-2 w-1/3 flex items-center">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="Search by name"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 mb-2 w-full">
          <Select
            placeholder="Created by"
            className="w-1/2"
            value={createdByFilter}
            options={createdByOptions}
            onChange={handleCreatedByChange}
            isClearable
          />
          <Select
            placeholder="Creation date"
            className="w-[170px]"
            value={creationDateFilter}
            options={creationDateOptions}
            onChange={handleCreationDateChange}
            isClearable
          />
        </div>
      </div>
      <div className="flex gap-2 items-center mb-2">
        <div className="w-[150px]">
          {table.getState().pagination.pageIndex + 1}-{table.getPageCount()} of{" "}
          {data.length} results
        </div>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="border-2 bg-white p-2 h-8 w-8 border-gray-300 rounded-lg"
        >
          <ChevronLeftIcon />
        </button>
        <span className="border-2 h-8 w-8 px-2 rounded-md flex items-center">
          {table.getState().pagination.pageIndex + 1}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="border-2 bg-white p-2 h-8 w-8 border-gray-300 rounded-lg"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default TableHeader;
