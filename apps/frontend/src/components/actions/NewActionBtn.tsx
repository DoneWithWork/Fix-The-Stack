"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import NewActionForm from "./NewActionForm";
import { Button } from "../ui/button";
import { useState } from "react";
export default function NewActionBtn() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="size-5" />
          New Action
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Action</DialogTitle>
          <DialogDescription>Create a new action</DialogDescription>
        </DialogHeader>
        <div>
          <NewActionForm setOpen={setOpen} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
