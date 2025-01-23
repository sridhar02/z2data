/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Column } from "@tanstack/react-table";

export function SelectColumnFilter<T>({
  column,
}: {
  column: Column<T, unknown>;
}) {
  const { getFilterValue, setFilterValue, getFacetedUniqueValues } = column;
  const uniqueValues = Array.from(getFacetedUniqueValues() ?? []);

  return (
    <select
      value={(getFilterValue() as string) || ""}
      onChange={(e) => setFilterValue(e.target.value || undefined)}
      className="border rounded p-2"
    >
      <option value="">All</option>
      {uniqueValues.map((value: any) => (
        <option key={value} value={value as string}>
          {value as string}
        </option>
      ))}
    </select>
  );
}

export function TextColumnFilter<T>({
  column,
}: {
  column: Column<T, unknown>;
}) {
  const { getFilterValue, setFilterValue } = column;

  return (
    <input
      value={(getFilterValue() as string) || ""}
      onChange={(e) => setFilterValue(e.target.value)}
      placeholder="Search..."
      className="border rounded p-2"
    />
  );
}
