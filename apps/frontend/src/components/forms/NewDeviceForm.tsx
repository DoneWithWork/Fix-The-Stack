"use client";
import { NewDeviceActions } from "@/app/actions/NewDevice";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { initialState } from "@/lib/constants";
import { DeviceSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Project } from "@prisma/index";
import { Loader2 } from "lucide-react";
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

type NewDeviceFormProps = {
  id: string | null;
  projects: Project[] | null;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export default function NewDeviceForm({
  id,
  projects,
  setOpen,
}: NewDeviceFormProps) {
  const [state, action, pending] = useActionState(
    NewDeviceActions,
    initialState
  );

  const form = useForm<z.infer<typeof DeviceSchema>>({
    resolver: zodResolver(DeviceSchema),
    defaultValues: {
      name: "",
      description: "",
      deviceType: "ESP32",
      projectId: id || "",
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
          defaultValue={state.inputs?.name}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  minLength={1}
                  maxLength={100}
                  id="name"
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
          defaultValue={state.inputs?.description}
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

        <FormField
          control={form.control}
          name="deviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Device Type</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                name="deviceType"
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a device type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {DeviceSchema.shape.deviceType.options.map(
                    (device, index) => (
                      <SelectItem value={device} key={index}>
                        {device.replace(/_/g, " ")}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>

              {state?.errors?.deviceType && (
                <p id="city-error" className="text-sm text-red-500">
                  {state.errors?.deviceType[0]}
                </p>
              )}
            </FormItem>
          )}
        />
        {id && <Input type="hidden" value={id} name="projectId" readOnly />}
        <FormField
          control={form.control}
          name="projectId"
          render={({ field }) => {
            // is only true if id is non null
            // double negation
            const isReadOnly = !!id;

            return (
              <FormItem>
                <FormLabel>Project</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value || projects?.[0]?.id}
                  name="projectId"
                  disabled={isReadOnly}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Select a project"
                        defaultValue={field.value}
                      ></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {projects?.map((project, index) => (
                      <SelectItem value={project.id} key={index}>
                        {project.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
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
            <span>Create New Device</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
