"use client";
import { NewDataStreamAction } from "@/app/actions/NewDataStream";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { initialState } from "@/lib/constants";
import { DataStreamSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Device } from "@prisma/index";
import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { DialogClose } from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function NewDataStreamForm({
  devices,
  setOpen,
}: {
  devices: Device[];
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const pathName = usePathname();
  const segments = pathName.split("/");
  const projectId = segments[segments.length - 1];
  const [state, action, pending] = useActionState(
    NewDataStreamAction,
    initialState
  );

  const form = useForm<z.infer<typeof DataStreamSchema>>({
    resolver: zodResolver(DataStreamSchema),
    defaultValues: {
      title: "",
      description: "",
      deviceId: "",
    },
  });
  useEffect(() => {
    if (state?.success) {
      setOpen(false);
      toast(state.message);
    }
    if (state?.errorMessage && !state.success) {
      toast(state.errorMessage);
    }
  }, [state, form, setOpen]);
  return (
    <Form {...form}>
      <form action={action} className="space-y-8 max-w-4xl mx-auto">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter name..." {...field} name="title" />
              </FormControl>

              {state?.errors?.title && (
                <p id="city-error" className="text-sm text-red-500">
                  {state.errors.title[0]}
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
        <Input hidden name="projectId" value={projectId} readOnly />
        <FormField
          control={form.control}
          name="deviceId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Device</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value || devices[0]?.id}
                name="deviceId"
                disabled={devices.length === 0}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a device" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {devices &&
                    devices.map((device, index) => (
                      <SelectItem value={device.id} key={index}>
                        {device.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>

              {state?.errors?.deviceId && (
                <p id="city-error" className="text-sm text-red-500">
                  {state.errors.deviceId[0]}
                </p>
              )}
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-4 items-center">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button
            disabled={pending}
            type="submit"
            className="bg-green-400 hover:bg-green-500 text-gray-900"
          >
            {pending && <Loader2 className="animate-spin size-6" />}
            <span>Create New Data Stream</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
