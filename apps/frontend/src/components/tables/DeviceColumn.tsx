"use client";
import { DeleteDeviceAction } from "@/app/actions/DeleteDevice";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { initialState } from "@/lib/constants";
import { extendedDeviceWithProject } from "@/lib/types";
import { ColumnDef, Row } from "@tanstack/react-table";
import { Copy, CopyCheck, Eye, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import DeleteActionBtn from "../shared/utils/DeleteActionBtn";
import UpdateDeviceForm from "../device/UpdateDeviceForm";
import ReadDeviceForm from "../device/ReadDeviceForm";

export const DeviceColumn: ColumnDef<extendedDeviceWithProject>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "deviceType",
    header: "Device Type",
  },
  {
    accessorKey: "deviceAuthToken",
    header: "Device Token",
    cell: ({ row }) => {
      return (
        <div className="flex flex-row items-center ">
          <span>{row.original.deviceAuthToken.substring(0, 15) + "..."}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <Actions row={row} />;
    },
  },
];

function Actions({ row }: { row: Row<extendedDeviceWithProject> }) {
  const [copied, SetCopied] = useState(false);
  const [open, SetOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [state, action, pending] = useActionState(
    DeleteDeviceAction,
    initialState
  );
  const router = useRouter();
  useEffect(() => {
    if (state?.errorMessage && !state?.success) {
      toast(state?.errorMessage);
    }
    if (state?.success) {
      SetOpen(false);
      toast("Successfully deleted device!");
      router.refresh();
    }
  }, [state, router]);
  return (
    <div className="flex flex-row items-center gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-green-500 hover:bg-green-600">
            <Eye className="size-4 text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Device: {row.original.name}</DialogTitle>
            <DialogDescription>View Your Device</DialogDescription>
          </DialogHeader>
          <div>
            <ReadDeviceForm row={row} />
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={openUpdate} onOpenChange={setOpenUpdate}>
        <DialogTrigger asChild>
          <Button className="bg-yellow-500 hover:bg-yellow-600">
            <Pencil className="size-4 text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Update Device: {row.original.name}</DialogTitle>
            <DialogDescription>Update Your Device</DialogDescription>
          </DialogHeader>
          <div>
            <UpdateDeviceForm setOpen={setOpenUpdate} row={row} />
          </div>
        </DialogContent>
      </Dialog>
      <DeleteActionBtn
        SetOpen={SetOpen}
        open={open}
        action={action}
        name="deviceId"
        value={row.original.id}
        pending={pending}
        deleteItemName="Device"
      />

      <Tooltip>
        <TooltipTrigger>
          {copied ? (
            <CopyCheck className="size-5 text-green-500" />
          ) : (
            <Copy
              className="size-5"
              onClick={() => {
                navigator.clipboard.writeText(row.original.deviceAuthToken);
                SetCopied(true);
                setTimeout(() => {
                  SetCopied(false);
                }, 2000);
                toast("Copied Device Auth Token");
              }}
            />
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy Device Token</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
