"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { extendedDeviceWithProject } from "@/lib/types";
import { Plus } from "lucide-react";
import NewDataStreamForm from "./NewDataStreamForm";
import { Button } from "../ui/button";
import { useState } from "react";

export default function NewDataStreamBtn({
  devices,
}: {
  devices: extendedDeviceWithProject[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="size-5" />
          New Data Stream
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Data Stream</DialogTitle>
          <DialogDescription>
            Create a new data stream to control and store your data
          </DialogDescription>
        </DialogHeader>
        <div>
          <NewDataStreamForm devices={devices} setOpen={setOpen} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
