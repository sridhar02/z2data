/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo, useState } from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Select from "react-select";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

const Table = <T extends object>({ data, columns }: TableProps<T>) => {
  const [searchText, setSearchText] = useState("");

  const [createdByFilter, setCreatedByFilter] = useState(null);
  const [creationDateFilter, setCreationDateFilter] = useState(null);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });
  const createdByOptions = useMemo(() => {
    const uniqueCreators = [...new Set(data.map((row) => row.createdBy))];
    return uniqueCreators.map((creator) => ({
      label: creator,
      value: creator,
    }));
  }, [data]);

  // Creation Date Options
  const creationDateOptions = useMemo(() => {
    const uniqueDates = [...new Set(data.map((row) => row.creationDate))];
    return uniqueDates.map((date) => ({ label: date, value: date }));
  }, [data]);

  return (
    <div className="">
      <div className="flex gap-3 justify-between items-center p-4border-gray-300 p-4">
        {/* <div className="flex gap-2"> */}
        <div className="flex items-center space-x-4 w-10/12">
          {/* Search Filter */}
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
            options={createdByOptions}
            placeholder="Created by"
            className="w-[140px]"
            value={createdByFilter}
            onChange={(option) => setCreatedByFilter(option)}
          />

          <Select
            options={creationDateOptions}
            placeholder="Creation date"
            className="w-[170px]"
            value={creationDateFilter}
            onChange={(option) => setCreationDateFilter(option)}
          />
        </div>
        {/* </div> */}
        <div className="flex gap-2 items-center">
          <div className="w-[150px]">
            {table.getState().pagination.pageIndex + 1}-{table.getPageCount()}{" "}
            of {data.length} results
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
      {/* Table */}
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-gray-300 px-4 py-2 text-left"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-300 px-4 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t-2 p-4 pt-8">
        <div>
          Viewing {table.getState().pagination.pageIndex + 1} -{" "}
          {table.getPageCount()} of {data.length} results
        </div>
        <div className="flex gap-2 items-center">
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
          <span className="border-2 h-8 w-8 px-2 rounded-md flex items-center">
            {table.getState().pagination.pageIndex + 2}
          </span>
          <span className="border-2 h-8 w-8 px-2 rounded-md flex items-center">
            {table.getState().pagination.pageIndex + 3}
          </span>

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="border-2 bg-white p-2 h-8 w-8 border-gray-300 rounded-lg"
          >
            <ChevronRightIcon />
          </button>

          <span className="border-2 bg-white p-1 text-sm border-gray-300 rounded-md">
            Go to page {""}
            <input
              type="number"
              min="1"
              max={table.getPageCount()}
              defaultValue={0}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="w-7 border-l-2  pl-1 outline-none"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;
