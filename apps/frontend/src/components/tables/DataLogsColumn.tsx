"use client";

import { DataPointWithStream } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";

export const DataLogsColumn: ColumnDef<DataPointWithStream>[] = [
  {
    accessorKey: "title",
    header: "DataStream",
    accessorFn: (row) => row.dataStream.title,
    cell: ({ row }) => row.original.dataStream?.title,
  },
  {
    accessorKey: "value",
    header: "Value",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      return <span>{new Date(row.original.createdAt).toLocaleString()}</span>;
    },
  },
];
