"use client";
import { NewAction } from "@/app/actions/NewAction";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ActionSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
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
import { Textarea } from "../ui/textarea";

const initialState = { errors: {}, success: false, formErrors: "" };

export default function NewActionForm({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [state, action, pending] = useActionState(NewAction, initialState);
  const router = useRouter();
  const form = useForm<z.infer<typeof ActionSchema>>({
    resolver: zodResolver(ActionSchema),
    defaultValues: {
      name: "",
      type: "EMAIL",
      retries: 0,
      enabled: true,
      triggerLimit: 1,
      email_address: "",
      email_content: "",
      telegram_chat_id: "",
      url_webhook: "",
    },
  });
  useEffect(() => {
    if (state?.errors) {
      Object.entries(state.errors).forEach(([fieldName, errors]) => {
        if (fieldName in ActionSchema.innerType().shape) {
          form.setError(
            fieldName as keyof z.infer<typeof ActionSchema>,
            {
              message: errors.join(", "),
            },
            {
              shouldFocus: true,
            }
          );
        }
      });
    }
    if (state.success) {
      toast("Successfully created new action");
      setOpen(false);
      router.refresh();
    }
    if (!state.success && Object.keys(state.errors).length > 0) {
      toast("Failed to create new action");
    }
  }, [state, form, router, setOpen]);
  const type = form.watch("type");
  return (
    <Form {...form}>
      <form action={action} className="space-y-5 max-w-4xl mx-auto">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter name..." {...field} name="name" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Action</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                name="type"
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an Action" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="EMAIL">Email</SelectItem>
                  <SelectItem value="TELEGRAM">Telegram</SelectItem>
                  <SelectItem value="WEBHOOK">Webhook</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        {type === "EMAIL" && (
          <div className="space-y-5 border-2 rounded-xl px-5 py-3">
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="email_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter email..."
                        {...field}
                        type="email"
                        name="email_address"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email_content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contents</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none max-w-full"
                      placeholder="Enter contents..."
                      {...field}
                      name="email_content"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
        {type === "TELEGRAM" && (
          <div className="space-y-5 border-2 rounded-xl px-5 py-3">
            <div className="space-y-3">
              <div className="flex flex-row items-center gap-2">
                <FormLabel htmlFor="telegram_chat_id">Chat Id</FormLabel>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="rounded-full border-2 ">
                      <Info className="size-4" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The Id of the chat with @fix_the_stack_bot</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <FormField
                control={form.control}
                name="telegram_chat_id"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="telegram_chat_id"
                        placeholder="Enter Chat ID..."
                        {...field}
                        type="text"
                        name="telegram_chat_id"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )}
        {type === "WEBHOOK" && (
          <div className="space-y-5 border-2 rounded-xl px-5 py-3">
            <div className="space-y-3">
              <div className="flex flex-row items-center gap-2">
                <FormLabel htmlFor="url_webhook">URL</FormLabel>

                <Tooltip>
                  <TooltipTrigger>
                    <div className="rounded-full border-2 ">
                      <Info className="size-4" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The url of the webhook</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <FormField
                control={form.control}
                name="url_webhook"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="url_webhook"
                        placeholder="Enter url..."
                        {...field}
                        type="url"
                        name="url_webhook"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )}
        <FormField
          control={form.control}
          name="retries"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Retries</FormLabel>
              <FormControl>
                <Input type="number" {...field} name="retries" />
              </FormControl>
              <FormDescription>
                Number of retries if Action fails
              </FormDescription>
              <FormMessage />
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
                <Input type="number" {...field} name="triggerLimit" />
              </FormControl>
              <FormDescription>
                Maximum number of times this Action can be triggered before
                being disabled
              </FormDescription>
              <FormMessage />
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
            <span>Create New Action</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
