"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SelectSearch from "react-select-search";

import { NewRuleSchema } from "@/lib/schema";
import {
  ActionWithRelations,
  ConditionNode,
  DeviceWithStream,
  flattenDevices,
  GroupNode,
  RuleGroupProps,
} from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Trash } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  addCondition,
  addGroup,
  CreateDefaultGroupTree,
  deleteCondition,
} from "./NewRuleComponents/functions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function NewRuleForm({
  devices,
  actions,
}: {
  devices: DeviceWithStream[];
  actions: ActionWithRelations[];
}) {
  const pending = false;
  const form = useForm<z.infer<typeof NewRuleSchema>>({
    resolver: zodResolver(NewRuleSchema),
    defaultValues: {
      name: "",
      description: "",
      actionId: "",
    },
  });
  const flat = devices.flatMap((device) =>
    device.dataStreams.map((stream) => ({
      name: device.name + "." + stream.title,
      value: stream.title,
      id: stream.id,
    }))
  );

  const [tree, setTree] = useState<GroupNode>(CreateDefaultGroupTree);
  const OnDeleteCondition = (id: string) => {
    deleteCondition({ id, setTree, tree });
  };
  const OnAddGroup = (id: string) => {
    addGroup({ id, setTree, tree });
  };
  const onAddCondition = (id: string) => {
    addCondition({ id, setTree, tree });
  };
  console.log(actions);
  return (
    <div>
      <Form {...form}>
        <form className="space-y-8 max-w-5xl w-full px-2 mx-auto mt-5 ">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>

                <FormMessage />
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

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="actionId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Action</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={"Select an Action"} />
                    </SelectTrigger>
                    <SelectContent>
                      {actions.map((action) => {
                        return (
                          <SelectItem value={action.id} key={action.id}>
                            {action.name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <RuleGroup
              onDeleteCondition={OnDeleteCondition}
              group={tree}
              devices={flat}
              onAddGroup={OnAddGroup}
              onAddCondition={onAddCondition}
            />
          </div>
          <Button disabled={pending} type="submit">
            {pending && <Loader2 className="animate-spin size-6" />}
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

function Condition({
  node,
  onDeleteCondition,
  devices,
}: {
  node: ConditionNode;
  onDeleteCondition: (groupId: string) => void;
  devices: flattenDevices[];
}) {
  return (
    <div className="flex flex-row flex-wrap items-center gap-2 justify-between  rounded-xl my-2 px-2 py-3">
      <div className="flex-1">
        <Label className="mb-2 ml-1" htmlFor={`field-${node.id}`}>
          DataStream
        </Label>
        <SelectSearch
          options={devices}
          onFocus={() => {}}
          onBlur={() => {}}
          placeholder="Choose your datastream"
        />
      </div>
      <div className="flex-1">
        <Label className="mb-2 ml-1" htmlFor={`operator-${node.id}`}>
          Operator
        </Label>
        <Select defaultValue={"=="}>
          <SelectTrigger id={`operator-${node.id}`} className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"=="}>==</SelectItem>
            <SelectItem value={">="}>{">="}</SelectItem>
            <SelectItem value={"<="}>{"<="}</SelectItem>
            <SelectItem value={">"}>{">"}</SelectItem>
            <SelectItem value={"<"}>{"<"}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1">
        <Label className="mb-2 ml-1" htmlFor={`value-${node.id}`}>
          Value
        </Label>
        <Input placeholder="value" value={node.value} id={`value-${node.id}`} />
      </div>
      <Trash
        size={10}
        className="size-6 mt-5"
        onClick={() => onDeleteCondition(node.id)}
      />
    </div>
  );
}

function RuleGroup({
  group,
  onAddGroup,
  onAddCondition,
  onDeleteCondition,
  devices,
}: RuleGroupProps) {
  return (
    <div className="ml-1 border-2 px-2 py-3 rounded-2xl">
      <div className="flex flex-row items-center gap-3">
        <Button type="button" onClick={() => onAddCondition(group.id)}>
          + Add Condition
        </Button>
        <Button type="button" onClick={() => onAddGroup(group.id)}>
          + Add Group
        </Button>
      </div>

      {group.children.map((child, index) =>
        child.type === "condition" ? (
          <div key={index}>
            <Condition
              key={child.id}
              node={child}
              devices={devices}
              onDeleteCondition={onDeleteCondition}
            />
            {index !== group.children.length - 1 && (
              <div className="ml-3">
                <Select defaultValue={"AND"}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={"AND"}>AND</SelectItem>
                    <SelectItem value={"OR"}>OR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        ) : (
          <div key={child.id} className="my-3">
            <RuleGroup
              group={child}
              onDeleteCondition={onDeleteCondition}
              devices={devices}
              onAddCondition={onAddCondition}
              onAddGroup={onAddGroup}
            />
            {group.children[index + 1] &&
              group.children[index + 1].type === "group" && (
                <div className="ml-3 my-3">
                  <Select defaultValue={"AND"}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={"AND"}>AND</SelectItem>
                      <SelectItem value={"OR"}>OR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
          </div>
        )
      )}
    </div>
  );
}
