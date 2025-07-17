"use client";
import { NewProjectAction } from "@/app/actions/NewProject";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { initialState } from "@/lib/constants";
import { NewProjectSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function NewProjectForm() {
  const form = useForm<z.infer<typeof NewProjectSchema>>({
    resolver: zodResolver(NewProjectSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const [state, action, pending] = useActionState(
    NewProjectAction,
    initialState
  );
  useEffect(() => {
    if (state?.errorMessage && !state.success) {
      toast(state.errorMessage);
    }
    if (state?.success) {
      toast(state.message);
    }
  }, [state]);
  return (
    <Form {...form}>
      <form action={action} className="space-y-8 max-w-4xl mx-auto">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
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
                <Input placeholder="Description" {...field} />
              </FormControl>

              {state?.errors?.description && (
                <p id="city-error" className="text-sm text-red-500">
                  {state.errors.description[0]}
                </p>
              )}
            </FormItem>
          )}
        />
        <Button disabled={pending} type="submit">
          {pending && <Loader2 className="animate-spin size-6" />}
          Submit
        </Button>
      </form>
    </Form>
  );
}
