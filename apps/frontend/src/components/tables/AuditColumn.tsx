"use client";

import { Audit } from "@prisma/index";
import { ColumnDef } from "@tanstack/react-table";
import ReactDiffViewer from "react-diff-viewer";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DiffIcon } from "lucide-react";
import { Button } from "../ui/button";

export const AuditColumn: ColumnDef<Audit>[] = [
  {
    accessorKey: "action",
    header: "Action",
  },
  {
    accessorKey: "User.username",
    header: "User",
  },
  {
    accessorKey: "model",
    header: "Data Model",
  },

  {
    id: "changes",
    header: "View Data Changes",
    cell: ({ row }) => {
      const beforeStr = JSON.stringify(row.original.before, null, 4);
      const afterStr = JSON.stringify(row.original.after, null, 4);
      const hasDiff = beforeStr !== afterStr;
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"}>
              <DiffIcon className="size-4" />
              <span>View Changes</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="min-w-7xl overflow-auto">
            <DialogHeader>
              <DialogTitle>Changes in Data</DialogTitle>
            </DialogHeader>
            <div className=" rounded-md border">
              {hasDiff ? (
                <ReactDiffViewer
                  oldValue={beforeStr}
                  newValue={afterStr}
                  splitView={true}
                />
              ) : (
                <div className="p-4 text-muted-foreground">
                  No changes detected
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
