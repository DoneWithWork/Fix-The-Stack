"use client";
import { UpdateDataStreamAction } from "@/app/actions/UpdateDataStreamAction";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { initialState } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { DataStream } from "@prisma/index";
import { Row } from "@tanstack/react-table";
import { Loader2 } from "lucide-react";
import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";
import { Input } from "../ui/input";
import { UpdateDataStreamSchema } from "@/lib/schema";
type UpdateDataStreamFormProps = {
  row: Row<DataStream>;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export default function UpdateDataStreamForm({
  row,
  setOpen,
}: UpdateDataStreamFormProps) {
  const [state, action, pending] = useActionState(
    UpdateDataStreamAction,
    initialState
  );

  const form = useForm<z.infer<typeof UpdateDataStreamSchema>>({
    resolver: zodResolver(UpdateDataStreamSchema),
    defaultValues: {
      title: row.original.title,
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="title">Name</FormLabel>
              <FormControl>
                <Input
                  minLength={1}
                  maxLength={100}
                  id="title"
                  type="text"
                  placeholder="Enter title..."
                  {...field}
                  name="title"
                />
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

        <Input type="hidden" value={row.original.id} name="id" readOnly />

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
