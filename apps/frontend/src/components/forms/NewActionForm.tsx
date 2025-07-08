"use client";
import { NewApiKeyAction } from "@/app/actions/NewApiKey";
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
import { ActionSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DialogClose } from "../ui/dialog";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const initialState = { errors: {}, success: false };

export default function NewActionForm() {
  const [state, action, pending] = useActionState(
    NewApiKeyAction,
    initialState
  );

  const form = useForm<z.infer<typeof ActionSchema>>({
    resolver: zodResolver(ActionSchema),
    defaultValues: {
      name: "",
      type: "EMAIL",
      retries: 0,
      enabled: true,
      triggerLimit: 1,
    },
  });
  useEffect(() => {
    if (state?.errors) {
      Object.entries(state.errors).forEach(([fieldName, errors]) => {
        if (fieldName in ActionSchema.shape) {
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
  }, [state, form]);
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
              <Label htmlFor="email_address">Receiver email</Label>
              <Input
                type="email"
                name="email_address"
                id="email_address"
                placeholder="Enter email address"
              />
            </div>
            <Label htmlFor="email_content">Email Contents</Label>
            <FormItem>
              <Textarea
                id="email_content"
                placeholder="Enter email content..."
                className="resize-none max-w-full"
              />
            </FormItem>
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
