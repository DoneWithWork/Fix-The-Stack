import { ApiKey, Prisma } from "@prisma/index";


export type ProjectType = {
    title: string;
    description: string;
    id: string;
};
export type ApiKeyType = {
    name: string;
    initial: string;
    key: string;
    type: string;
    createdAt: string;
}
export type DevicesType = {
    id: string;
    name: string;
    description: string;
    projectId: string;
    createdAt: string;
    deviceAuthToken: string;
}
export type DataStreamType = {
    id: string;
    deviceId: string;
    title: string;

    description: string;
    createdAt: string;
}
export type ApiKeyExtend = Omit<ApiKey, "key">;

export type CachedDeviceType = {
    deviceId: string;
    userId: string;
}

export type DevicesByProjectType = {
    userId: string;
    projectId: string;

}
export type ProjectTypeData = DevicesByProjectType

export type DeviceWithStream = Prisma.DeviceGetPayload<{
    include: { dataStreams: true };
}>;

export type ComparisonOperators = "==" | ">" | "<" | ">=" | "<=";
export type Operators = "AND" | "OR";
export type ConditionNode = {
    id: string;
    type: "condition";
    field: string;
    operator: ComparisonOperators;
    value: string;
};
export type GroupNode = {
    id: string;
    type: "group";
    children: RuleNode[];
    operator: Operators;
};
export type RuleNode = GroupNode | ConditionNode;

export type RuleGroupProps = {
    group: GroupNode;
    onAddCondition: (id: string) => void;
    onAddGroup: (id: string) => void;
    onDeleteCondition: (id: string) => void;
    devices: flattenDevices[];
};
export type flattenDevices = {
    id: string;
    name: string;
    value: string;
};