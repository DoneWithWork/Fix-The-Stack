"use client";
import { UpdateDeviceAction } from "@/app/actions/Device/UpdateDeviceAction";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { initialState, UpdateDeviceSchema } from "@/lib/constants";
import { extendedDeviceWithProject } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Row } from "@tanstack/react-table";
import { Loader2 } from "lucide-react";
import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
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
type UpdateDeviceFormProps = {
  row: Row<extendedDeviceWithProject>;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export default function UpdateDeviceForm({
  row,
  setOpen,
}: UpdateDeviceFormProps) {
  const [state, action, pending] = useActionState(
    UpdateDeviceAction,
    initialState
  );

  const form = useForm<z.infer<typeof UpdateDeviceSchema>>({
    resolver: zodResolver(UpdateDeviceSchema),
    defaultValues: {
      name: row.original.name,
      description: row.original.description,
      id: row.original.id,
    },
  });
  useEffect(() => {
    if (state?.success) {
      setOpen(false);
      toast(state.message);
    } else if (state?.errorMessage && !state.success) {
      toast(state.errorMessage);
    }
  }, [state, form, setOpen]);
  return (
    <Form {...form}>
      <form action={action} className="space-y-8 max-w-4xl mx-auto">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormControl>
                <Input
                  minLength={1}
                  maxLength={100}
                  id="name"
                  type="text"
                  placeholder="Enter name..."
                  {...field}
                  name="name"
                />
              </FormControl>

              {state?.errors?.name && (
                <p id="city-error" className="text-sm text-red-500">
                  {state.errors.name[0]}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter description..."
                  {...field}
                  id="description"
                  type="text"
                  name="description"
                />
              </FormControl>
              {state?.errors?.description && (
                <p id="city-error" className="text-sm text-red-500">
                  {state.errors.description[0]}
                </p>
              )}
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <Label>Device Type</Label>
          <Select disabled defaultValue={row.original.deviceType}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a device type" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value={row.original.deviceType}>
                {row.original.deviceType}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Input type="hidden" value={row.original.id} name="id" readOnly />
        <div className="space-y-2">
          <Label>Project</Label>
          <Select defaultValue={row.original.projectId} disabled>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a project"></SelectValue>
              </SelectTrigger>
            </FormControl>
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
          <Button
            disabled={pending}
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900"
          >
            {pending && <Loader2 className="animate-spin size-6" />}
            <span className="text-gray-800">Update Device</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
