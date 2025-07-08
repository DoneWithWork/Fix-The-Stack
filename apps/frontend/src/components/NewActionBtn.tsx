import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import NewActionForm from "./forms/NewActionForm";
export default function NewActionBtn() {
  return (
    <Dialog>
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
          <NewActionForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
