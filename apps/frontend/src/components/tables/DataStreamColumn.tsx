"use client";

import { DeleteDataStreamAction } from "@/app/actions/DeleteDataStreamAction";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { initialState } from "@/lib/constants";
import { DataStream } from "@prisma/index";
import { ColumnDef, Row } from "@tanstack/react-table";
import { Eye, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import DeleteActionBtn from "../shared/utils/DeleteActionBtn";
import { Button } from "../ui/button";
import ReadDataStreamForm from "../data-streams/ReadDataStreamForm";
import UpdateDataStreamForm from "../data-streams/UpdateDataStreamForm";
export const DataStreamColumn: ColumnDef<DataStream>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <Action row={row} />;
    },
  },
];
function Action({ row }: { row: Row<DataStream> }) {
  const [open, SetOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  const [state, action, pending] = useActionState(
    DeleteDataStreamAction,
    initialState
  );
  const router = useRouter();
  useEffect(() => {
    if (state?.errorMessage) {
      toast(state.errorMessage);
    }

    if (state?.success) {
      SetOpen(false);
      toast("Successfully deleted data stream!");
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
            <DialogTitle>DataStream: {row.original.title}</DialogTitle>
            <DialogDescription>View Your DataStream</DialogDescription>
          </DialogHeader>
          <div>
            <ReadDataStreamForm row={row} />
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
            <DialogTitle>Update DataStream: {row.original.title}</DialogTitle>
            <DialogDescription>Update DataStream</DialogDescription>
          </DialogHeader>
          <div>
            <UpdateDataStreamForm row={row} setOpen={setOpenUpdate} />
          </div>
        </DialogContent>
      </Dialog>
      <DeleteActionBtn
        deleteItemName="Data Stream"
        SetOpen={SetOpen}
        open={open}
        action={action}
        name="dataStreamId"
        value={row.original.id}
        pending={pending}
      />
    </div>
  );
}
