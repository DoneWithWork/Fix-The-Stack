import { ConditionNode, GroupNode, RuleNode } from "@/lib/types";
import { nanoid } from "nanoid";
import { Dispatch, SetStateAction } from "react";

type CommonType = {
    id: string; setTree: Dispatch<SetStateAction<GroupNode>>; tree: GroupNode
}
export const deleteCondition = ({ id, setTree, tree }: CommonType) => {
    const update = (node: RuleNode): RuleNode | null => {
        if (node.id === id) return null;
        if (node.type === "group") {
            const updatedChildren = node.children
                .map(update)
                .filter((child): child is RuleNode => child !== null);
            return {
                ...node,
                children: updatedChildren,
            };
        }

        return node;
    };

    const newTree = update(tree);
    if (newTree && newTree.type === "group") {
        setTree(newTree);
    }
};
export const addCondition = ({ id, setTree, tree }: CommonType) => {
    const update = (node: RuleNode): RuleNode => {
        if (node.type === "group" && node.id === id) {
            return {
                ...node,
                children: [...node.children, CreateDefaultCondition()],
            };
        } else if (node.type === "group") {
            return {
                ...node,
                children: node.children.map(update),
            };
        } else {
            return node;
        }
    };
    setTree(update(tree) as GroupNode);
};

export const addGroup = ({ id, setTree, tree }: CommonType) => {
    const update = (node: RuleNode): RuleNode => {
        if (node.type === "group" && node.id === id) {
            return {
                ...node,
                children: [...node.children, CreateDefaultGroupTree()],
            };
        } else if (node.type === "group") {
            return { ...node, children: node.children.map(update) };
        }
        return node;
    };

    setTree(update(tree) as GroupNode);
};

export function CreateDefaultCondition(): ConditionNode {
    return {
        id: nanoid(),
        operator: "==",
        type: "condition",
        field: "None",
        value: "0",
    };
}
export function CreateDefaultGroupTree(): GroupNode {
    return {
        id: nanoid(),
        type: "group",
        operator: "AND",
        children: [CreateDefaultCondition(), CreateDefaultCondition()],
    };
}