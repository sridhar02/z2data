import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Table } from "@tanstack/react-table";

interface RowData {
  name: string;
  createdBy: string;
  modified: string;
  created: string;
}

type FooterProps<T extends RowData> = {
  table: Table<T>;
  data: T[];
};

const TableFooter = <T extends RowData>({ table, data }: FooterProps<T>) => {
  return (
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
  );
};

export default TableFooter;
