"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Project } from "@prisma/index";
import { Plus } from "lucide-react";
import NewDeviceForm from "./device/NewDeviceForm";
import { Button } from "./ui/button";
import { useState } from "react";

type NewDeviceBtnProps = {
  id: string | null;
  projects: Project[];
};
export default function NewDeviceBtn({ id, projects }: NewDeviceBtnProps) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="size-5" />
          New Device
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Device</DialogTitle>
          <DialogDescription>Create a new Iot device</DialogDescription>
        </DialogHeader>
        <div>
          <NewDeviceForm setOpen={setOpen} id={id} projects={projects} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
