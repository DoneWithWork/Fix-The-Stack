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
import { useState } from "react";
import NewApiKeyForm from "./forms/NewApiKeyForm";
import { Button } from "./ui/button";
export default function NewApiKeyBtn() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="size-5" />
          New API Key
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New API Key</DialogTitle>
          <DialogDescription>Create new API Key</DialogDescription>
        </DialogHeader>
        <div>
          <NewApiKeyForm setOpen={setOpen} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
