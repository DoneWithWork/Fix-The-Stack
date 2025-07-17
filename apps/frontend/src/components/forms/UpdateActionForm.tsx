"use client";

import { UpdateAction } from "@/app/actions/UpdateAction";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { initialState } from "@/lib/constants";
import { ActionWithRelations } from "@/lib/types";
import { UpdateActionSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Row } from "@tanstack/react-table";
import { Loader2 } from "lucide-react";
import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { DialogClose } from "../ui/dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type UpdateActionFormProps = {
  row: Row<ActionWithRelations>;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function UpdateActionForm({
  row,
  setOpen,
}: UpdateActionFormProps) {
  const [state, formAction, pending] = useActionState(
    UpdateAction,
    initialState
  );

  const form = useForm<z.infer<typeof UpdateActionSchema>>({
    resolver: zodResolver(UpdateActionSchema),
    defaultValues: {
      id: row.original.id,
      name: row.original.name,
      retries: row.original.retries ?? 0,
      triggerLimit: row.original.triggerLimit ?? 0,
      active: row.original.active,
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
  const action = row.original;
  return (
    <Form {...form}>
      <form action={formAction} className="space-y-4 max-w-6xl mx-auto">
        <input type="hidden" name="id" value={row.original.id} />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Action Name" {...field} />
              </FormControl>
              {state?.errors?.name && (
                <p className="text-sm text-red-500">{state.errors.name[0]}</p>
              )}
            </FormItem>
          )}
        />

        <div className="flex flex-row gap-4 items-center">
          <FormField
            control={form.control}
            name="retries"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Retries</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="triggerLimit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trigger Limit</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row">
          <div className="flex-1">
            {state?.errors?.retries && (
              <p className="text-sm text-red-500">{state.errors.retries[0]}</p>
            )}
          </div>
          {state?.errors?.triggerLimit && (
            <p className="text-sm text-red-500">
              {state.errors.triggerLimit[0]}
            </p>
          )}
        </div>
        <FormField
          control={form.control}
          name="active"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Active</FormLabel>
                <FormDescription>
                  Enable or disable this action.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  name="active"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <Label htmlFor="type">Type</Label>
          <Input disabled readOnly value={row.original.type} />
        </div>
        {action.emailAction && (
          <div className="space-y-2 border p-4 rounded-md">
            <h3 className="text-lg font-semibold">Email Details</h3>
            <div className="space-y-2">
              <Label htmlFor="receiverEmail">Receiver Email</Label>
              <Input
                id="receiverEmail"
                defaultValue={action.emailAction.receiverEmail}
                readOnly
                disabled
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emailContent">Content</Label>
              <Textarea
                className="resize-none"
                id="emailContent"
                defaultValue={action.emailAction.content}
                readOnly
                disabled
              />
            </div>
          </div>
        )}

        {action.telegramAction && (
          <div className="space-y-2 border p-4 rounded-md">
            <h3 className="text-lg font-semibold">Telegram Details</h3>
            <div className="space-y-2">
              <Label htmlFor="chatId">Chat ID</Label>
              <Input
                id="chatId"
                disabled
                defaultValue={action.telegramAction?.chatId}
                readOnly
              />
            </div>
          </div>
        )}

        {action.webhookAction && (
          <div className="space-y-2 border p-4 rounded-md">
            <h3 className="text-lg font-semibold">Webhook Details</h3>
            <div className="space-y-2">
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                defaultValue={action.webhookAction.url}
                readOnly
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="payload">Payload</Label>
              <Input
                id="payload"
                defaultValue={action.webhookAction.payload}
                readOnly
              />
            </div>
          </div>
        )}
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
            <span className="text-gray-800">Update Action</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
