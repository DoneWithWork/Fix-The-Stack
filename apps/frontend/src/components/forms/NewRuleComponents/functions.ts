import { ConditionNode, GroupNode, RuleNode } from "@/lib/types";
import { nanoid } from "nanoid";
import { Dispatch, SetStateAction } from "react";

type CommonType = {
    id: string; setTree: Dispatch<SetStateAction<GroupNode>>; tree: GroupNode
}
export const deleteCondition = ({ id, setTree, tree, index }: CommonType & { index: number }) => {
    const update = (node: RuleNode): RuleNode | null => {
        if (node.id === id) return null;
        if (node.type === "group") {
            const updatedChildren = node.children
                .map(update)
                .filter((child): child is RuleNode => child !== null);
            if (updatedChildren.length === 0) return null;
            console.log(index);
            return {
                ...node,
                operator: node.operator.filter((_, num) => num !== index - 1),
                children: updatedChildren,
            };
        }

        return node;
    };

    const newTree = update(tree);
    // Only set tree if result is non-null and still a group
    if (newTree && newTree.type === "group") {
        setTree(newTree);
    } else {
        // Optional: clear tree if everything was deleted
        setTree({
            id: "root",
            type: "group",
            children: [],
            operator: ["AND"], // or your default
        });
    }
};
export const addCondition = ({ id, setTree, tree }: CommonType) => {
    const update = (node: RuleNode): RuleNode => {
        if (node.type === "group" && node.id === id) {
            return {
                ...node,
                operator: [...node.operator, "AND"],
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
                operator: [...node.operator, "AND"],
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
        field: "",
        value: "0",
    };
}
export function CreateDefaultGroupTree(): GroupNode {
    return {
        id: nanoid(),
        type: "group",
        operator: ["AND"],
        children: [CreateDefaultCondition(), CreateDefaultCondition()],
    };
}