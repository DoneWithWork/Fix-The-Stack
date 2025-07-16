import { DataStream } from "@prisma/index";
import { Row } from "@tanstack/react-table";
import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
export default function ReadDataStreamForm({ row }: { row: Row<DataStream> }) {
  return (
    <form className="space-y-8 max-w-4xl mx-auto">
      <div className="space-y-2">
        <Label htmlFor="namettitleitle">Title</Label>
        <Input readOnly disabled value={row.original.title} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input readOnly disabled value={row.original.description} />
      </div>

      <div className="flex flex-row gap-4 items-center">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </div>
    </form>
  );
}
