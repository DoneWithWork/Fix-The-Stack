import { extendedDeviceWithProject } from "@/lib/types";
import { Row } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
export default function ReadDeviceForm({
  row,
}: {
  row: Row<extendedDeviceWithProject>;
}) {
  return (
    <form className="space-y-8 max-w-4xl mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input readOnly disabled value={row.original.name} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input readOnly disabled value={row.original.description} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="deviceType">Device Type</Label>
        <Select
          name="deviceType"
          disabled
          defaultValue={row.original.deviceType}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a device type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={row.original.deviceType}>
              {row.original.deviceType}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="projectId">Project</Label>
        <Select name="projectId" defaultValue={row.original.projectId} disabled>
          <SelectTrigger>
            <SelectValue placeholder="Select a project"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={row.original.projectId}>
              {row.original.Project.title}
            </SelectItem>
          </SelectContent>
        </Select>
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
