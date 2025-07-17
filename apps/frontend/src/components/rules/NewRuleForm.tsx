"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import ReactSelect from "react-select";

import { NewRuleAction } from "@/app/actions/NewRule";
import { FullRulePayloadSchema, NewRuleSchema } from "@/lib/validation";
import { ActionWithRelations, ChangeOperatorType, ComparisonOperators, ConditionNode, DeviceWithStream, flattenDevices, GroupNode, Operators, RuleGroupProps, RuleNode, } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info, Loader2, Trash } from "lucide-react";
import { startTransition, useActionState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  addCondition,
  addGroup,
  CreateDefaultGroupTree,
  deleteCondition,
} from "./NewRuleComponents/functions";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useRouter } from "next/navigation";
const initialState = { errors: {}, success: false };

export default function NewRuleForm({
  devices,
  actions,
}: {
  devices: DeviceWithStream[];
  actions: ActionWithRelations[];
}) {
  const [state, action, pending] = useActionState(NewRuleAction, initialState);
  const form = useForm<z.infer<typeof NewRuleSchema>>({
    resolver: zodResolver(NewRuleSchema),
    defaultValues: {
      name: "",
      description: "",
      actionId: [],
      triggerLimit: 1,
    },
  });
  const flat = devices.flatMap((device) =>
    device.dataStreams.map((stream) => ({
      label: device.name + "." + stream.title,
      value: stream.id,
    }))
  );

  const [tree, setTree] = useState<GroupNode>(CreateDefaultGroupTree);
  const [loading, setLoading] = useState(true);

  const OnDeleteCondition = (id: string, index: number) => {
    deleteCondition({ id, setTree, tree, index });
  };
  const OnAddGroup = (id: string) => {
    addGroup({ id, setTree, tree });
  };
  const onAddCondition = (id: string) => {
    addCondition({ id, setTree, tree });
  };
  const updateCondition = (
    id: string,
    updates: Partial<Pick<ConditionNode, "field" | "operator" | "value">>
  ) => {
    // performs a deep clone copy of the tree
    // avoid mutating original tree --> adheres to React immutability principles
    const newTree = structuredClone(tree);

    const dfs = (node: RuleNode): RuleNode => {
      if (node.type === "condition" && node.id === id) {
        return { ...node, ...updates };
      }
      if (node.type === "group") {
        return {
          ...node,
          children: node.children.map(dfs),
        };
      }
      return node;
    };

    const updated = dfs(newTree) as GroupNode;
    setTree(updated);
  };
  const onChangeOperator = ({ id, index, operator }: ChangeOperatorType) => {
    const newTree = structuredClone(tree);
    const dfs = (node: RuleNode): RuleNode => {
      if (node.type === "group" && node.id === id) {
        const newOperators = [...node.operator];
        newOperators[index] = operator;
        return {
          ...node,
          operator: newOperators,
        };
      }
      if (node.type === "group") {
        return {
          ...node,
          children: node.children.map(dfs),
        };
      }
      return node;
    };
    const updated = dfs(newTree) as GroupNode;
    setTree(updated);
  };
  useEffect(() => {
    const stored = localStorage.getItem("ruleTree");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as GroupNode;
        setTree(parsed);
      } catch (err) {
        console.error("Invalid tree in localStorage: ", err);
        localStorage.removeItem("ruleTree");
        setTree(CreateDefaultGroupTree());
      }
    } else {
      setTree(CreateDefaultGroupTree());
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    const debounce = setTimeout(() => {
      localStorage.setItem("ruleTree", JSON.stringify(tree));
    }, 300);

    return () => clearTimeout(debounce);
  }, [tree]); // runs every time `tree` changes
  const router = useRouter();
  const onSubmit = async (values: z.infer<typeof NewRuleSchema>) => {
    const payload = {
      ...values,
      ruleTree: tree,
    };

    const result = FullRulePayloadSchema.safeParse(payload);

    if (!result.success) {
      const formErrors = result.error.flatten().fieldErrors;

      for (const [fieldName, errors] of Object.entries(formErrors)) {
        form.setError(
          fieldName as "name" | "description" | "actionId" | "triggerLimit",
          {
            message: errors.join(", "),
          }
        );
      }
      console.log(formErrors.ruleTree);
      toast("Validation Errors in rules");
      return;
    }
    console.log("success");
    // Proceed to submit
    console.log("Valid payload:", result.data);
    const formData = new FormData();
    formData.set("name", result.data.name);
    formData.set("description", result.data.description || "");
    formData.set("actionId", JSON.stringify(result.data.actionId));
    formData.set("ruleTree", JSON.stringify(result.data.ruleTree));
    formData.set("triggerLimit", result.data.triggerLimit.toString());

    startTransition(() => {
      action(formData);
    });
  };
  useEffect(() => {
    if (state.success) {
      toast("Successfully created New Rule");
      setTree(CreateDefaultGroupTree());
      localStorage.removeItem("ruleTree");
      setTimeout(() => {
        router.push("/dashboard/rules");
      }, 1000);
    }
    if (!state.success && Object.keys(state.errors).length > 0) {
      toast("Failed to create new Rule!");
    }
  }, [state, router]);
  const allActions = actions.map((action) => {
    return {
      label: action.name,
      value: action.id,
    };
  });

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-5xl w-full px-2 mx-auto mt-5"
        >
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
            name="triggerLimit"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-row items-center gap-2">
                  <FormLabel>Trigger Limit</FormLabel>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="rounded-full border-2 ">
                        <Info className="size-4" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Takes precedence over trigger limit for Actions</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <FormControl>
                  <Input placeholder="Trigger Limit" {...field} />
                </FormControl>
                <FormLabel>
                  Maximum number of times this Rule can be triggered before
                  being disabled.
                </FormLabel>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="actionId"
            render={() => (
              <FormItem>
                <FormLabel>Action</FormLabel>
                <FormControl>
                  <div className="w-full">
                    <ReactSelect
                      isMulti
                      closeMenuOnSelect
                      options={allActions}
                      onChange={(selected) =>
                        form.setValue(
                          "actionId",
                          selected?.map((val) => val.value)
                        )
                      }
                      className="my-react-select-container"
                      classNamePrefix="my-react-select"
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {loading || !tree ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="animate-spin size-8" />
              <span className="ml-2">Loading Rule Builder...</span>
            </div>
          ) : (
            <>
              <div>
                <RuleGroup
                  onChangeOperator={onChangeOperator}
                  onDeleteCondition={OnDeleteCondition}
                  group={tree}
                  devices={flat}
                  onUpdateCondition={updateCondition}
                  onAddGroup={OnAddGroup}
                  onAddCondition={onAddCondition}
                />
              </div>
              <div className="flex flex-row justify-between items-center">
                <Button disabled={pending} type="submit">
                  {pending && <Loader2 className="animate-spin size-6" />}
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => {
                    setTree(CreateDefaultGroupTree());
                    localStorage.removeItem("ruleTree");
                  }}
                >
                  Reset Rule Builder
                </Button>
              </div>
            </>
          )}
        </form>
      </Form>
    </div>
  );
}

function Condition({
  node,
  onDeleteCondition,
  onUpdateCondition,
  devices,
  index,
}: {
  node: ConditionNode;
  onDeleteCondition: (groupId: string, index: number) => void;
  devices: flattenDevices[];
  index: number;
  onUpdateCondition: (
    id: string,
    updates: Partial<Pick<ConditionNode, "field" | "operator" | "value">>
  ) => void;
}) {
  return (
    <div className="flex flex-row flex-wrap items-center gap-2 justify-between  rounded-xl my-2 px-2 py-3">
      <div className="flex-1">
        <Label className="mb-2 ml-1" htmlFor={`field-${node.id}`}>
          DataStream
        </Label>
        <ReactSelect
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: "black",
            },
          })}
          defaultValue={devices.map((device) =>
            device.value === node.field ? device : null
          )}
          className="my-react-select-container"
          classNamePrefix="my-react-select"
          noOptionsMessage={() => "No Devices Available"}
          options={devices}
          onChange={(singleValue) => {
            onUpdateCondition(node.id, {
              field: singleValue?.value as ComparisonOperators,
            });
          }}
          placeholder="Choose your datastream"
        />
      </div>
      <div className="flex-1">
        <Label className="mb-2 ml-1" htmlFor={`operator-${node.id}`}>
          Operator
        </Label>
        <Select
          defaultValue={"=="}
          value={node.operator}
          onValueChange={(val) =>
            onUpdateCondition(node.id, { operator: val as ComparisonOperators })
          }
        >
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
        <Input
          type="text"
          value={node.value}
          onChange={(e) =>
            onUpdateCondition(node.id, { value: e.target.value })
          }
          placeholder="value"
          id={`value-${node.id}`}
        />
      </div>
      <Trash
        size={10}
        className="size-6 mt-5"
        onClick={() => onDeleteCondition(node.id, index)}
      />
    </div>
  );
}

function RuleGroup({
  group,
  onAddGroup,
  onAddCondition,
  onDeleteCondition,
  onUpdateCondition,
  onChangeOperator,
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
              index={index}
              key={child.id}
              onUpdateCondition={onUpdateCondition}
              node={child}
              devices={devices}
              onDeleteCondition={onDeleteCondition}
            />
            {index < group.children.length - 1 && (
              <div className="ml-3">
                <Select
                  value={group.operator[index]}
                  onValueChange={(val) => {
                    onChangeOperator({
                      id: group.id,
                      index,
                      operator: val as Operators,
                    });
                  }}
                >
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
              onChangeOperator={onChangeOperator}
              group={child}
              onDeleteCondition={onDeleteCondition}
              devices={devices}
              onAddCondition={onAddCondition}
              onAddGroup={onAddGroup}
              onUpdateCondition={onUpdateCondition}
            />
            {index < group.children.length - 1 && (
              <div className="ml-3">
                <Select
                  value={group.operator[index]}
                  onValueChange={(val) => {
                    onChangeOperator({
                      id: group.id,
                      index,
                      operator: val as Operators,
                    });
                  }}
                >
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
