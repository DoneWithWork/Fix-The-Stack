"use client";

import { DeleteAction } from "@/app/actions/DeleteAction";
import { initialState } from "@/lib/constants";
import { ActionWithRelations } from "@/lib/types";
import { ColumnDef, Row } from "@tanstack/react-table";
import { Eye, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import ReadActionForm from "../forms/ReadActionForm";
import UpdateActionForm from "../forms/UpdateActionForm";
import DeleteActionBtn from "../shared/utils/DeleteActionBtn";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export const ActionColumn: ColumnDef<ActionWithRelations>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "retries",
    header: "Retries",
  },
  {
    accessorKey: "triggerLimit",
    header: "Trigger Limit",
  },

  {
    accessorKey: "active",
    header: "Active",
    cell: ({ row }) => (
      <span>{row.original.active === true ? "ACTIVE" : "INACTIVE"}</span>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <Action row={row} />;
    },
  },
];
function Action({ row }: { row: Row<ActionWithRelations> }) {
  const [open, SetOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [state, action, pending] = useActionState(DeleteAction, initialState);
  const router = useRouter();
  useEffect(() => {
    if (state?.errorMessage) {
      toast(state.errorMessage);
    }

    if (state?.success) {
      SetOpen(false); // Close modal immediately
      toast("Successfully deleted action!");
      router.refresh();
    }
  }, [state, router]);

  return (
    <div className="flex flex-row items-center gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-green-500 hover:bg-green-600 cursor-pointer">
            <Eye className="size-4 text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Action: {row.original.name}</DialogTitle>
            <DialogDescription>View Your Action</DialogDescription>
          </DialogHeader>
          <div>
            <ReadActionForm row={row} />
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={openUpdate} onOpenChange={setOpenUpdate}>
        <DialogTrigger asChild>
          <Button className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer">
            <Pencil className="size-4 text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Update Action: {row.original.name}</DialogTitle>
            <DialogDescription>Update Your Action</DialogDescription>
          </DialogHeader>
          <div>
            <UpdateActionForm row={row} setOpen={setOpenUpdate} />
          </div>
        </DialogContent>
      </Dialog>
      <DeleteActionBtn
        deleteItemName="Action"
        SetOpen={SetOpen}
        open={open}
        action={action}
        name="actionId"
        value={row.original.id}
        pending={pending}
      />
    </div>
  );
}
