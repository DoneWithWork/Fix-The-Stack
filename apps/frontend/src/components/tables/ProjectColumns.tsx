"use client";

import { DeleteProjectAction } from "@/app/actions/DeleteProjectAction";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { initialState } from "@/lib/constants";
import { Project } from "@prisma/index";
import { ColumnDef, Row } from "@tanstack/react-table";
import { Eye, Pencil } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import DeleteActionBtn from "../DeleteActionBtn";
import UpdateProjectForm from "../UpdateProjectForm";
export const ProjectColumn: ColumnDef<Project>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => (
      <span>{new Date(row.original.createdAt).toLocaleTimeString()}</span>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <Actions row={row} />;
    },
  },
];
function Actions({ row }: { row: Row<Project> }) {
  const [open, SetOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [state, action, pending] = useActionState(
    DeleteProjectAction,
    initialState
  );
  const router = useRouter();
  useEffect(() => {
    if (state?.errorMessage && !state?.success) {
      toast(state?.errorMessage);
      SetOpen(false);
    }
    if (state?.success) {
      SetOpen(false);
      toast(state.message);
      router.refresh();
    }
  }, [state, router]);
  return (
    <div className="flex flex-row items-center gap-3">
      <Button asChild className="bg-green-500 hover:bg-green-600">
        <Link href={`/dashboard/projects/${row.original.id}`}>
          <Eye className="size-4 text-white" />
        </Link>
      </Button>
      <Dialog open={openUpdate} onOpenChange={setOpenUpdate}>
        <DialogTrigger asChild>
          <Button className="bg-yellow-500 hover:bg-yellow-600">
            <Pencil className="size-4 text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Update Project: {row.original.title}</DialogTitle>
            <DialogDescription>Update Your Project</DialogDescription>
          </DialogHeader>
          <div>
            <UpdateProjectForm row={row} setOpen={setOpenUpdate} />
          </div>
        </DialogContent>
      </Dialog>
      <DeleteActionBtn
        SetOpen={SetOpen}
        open={open}
        action={action}
        name="id"
        value={row.original.id}
        pending={pending}
        deleteItemName="Project"
      />
    </div>
  );
}
