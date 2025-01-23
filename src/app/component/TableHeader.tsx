import Select from "react-select";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Table } from "@tanstack/react-table";
import { RowData } from "../utils/data";

type OwnProps = {
  table: Table<RowData>;
  data: RowData[];
};

type Option = {
  value: string;
  label: string;
};

function TableHeader(props: OwnProps) {
  const { table, data } = props;
  const [searchText, setSearchText] = useState("");

  const [createdByFilter, setCreatedByFilter] = useState<Option | null>(null);
  const [creationDateFilter, setCreationDateFilter] = useState<Option | null>(
    null
  );

  // const createdByOptions = useMemo(() => {
  //   const uniqueCreators = [...new Set(data.map((row) => row.createdBy))];
  //   return uniqueCreators.map((creator) => ({
  //     label: creator,
  //     value: creator,
  //   }));
  // }, [data]);

  // // Creation Date Options
  // const creationDateOptions = useMemo(() => {
  //   const uniqueDates = [...new Set(data.map((row) => row.creationDate))];
  //   return uniqueDates.map((date) => ({ label: date, value: date }));
  // }, [data]);

  return (
    <div className="flex gap-3 justify-between items-center p-4border-gray-300 p-4">
      <div className="flex items-center space-x-4 w-10/12">
        <div className="relative mb-4 w-1/3 flex items-center">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="Search by name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <Select
          //   options={createdByOptions}
          placeholder="Created by"
          className="w-[140px]"
          value={createdByFilter}
          onChange={(option) => setCreatedByFilter(option)}
        />

        <Select
          //   options={creationDateOptions}
          placeholder="Creation date"
          className="w-[170px]"
          value={creationDateFilter}
          onChange={(option) => setCreationDateFilter(option)}
        />
      </div>
      {/* </div> */}
      <div className="flex gap-2 items-center">
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
}

export default TableHeader;
