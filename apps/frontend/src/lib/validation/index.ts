import { z } from "zod";
import { ConditionNode, GroupNode, } from "../types";

export const NewProjectSchema = z.object({
    title: z.string().min(2).max(100),
    description: z.string().min(2).max(300),
})
export const NewRuleSchema = z.object({
    name: z.string().min(2, {
        message: "Name is required!"
    }).max(100, {
        message: "Name must contain between 2 to 100 characters"
    }),
    description: z.string().min(2, {
        message: "Description is required"
    }).max(300, {
        message: "Maximum of 300 characters"
    }),
    triggerLimit: z.number().min(1, {
        message: "Trigger limit must minimum be 1"
    }).max(5, {
        message: "Maximum on free plan is 5"
    }),
    actionId: z.array(z.string().min(1)).min(1, {
        message: "Required to select at least ONE action"
    }),
})
export const ApiKeySchema = z.object({
    name: z.string().min(2, {
        message: "Name is required"
    }).max(100, {
        message: "Name must be less than 100 characters"
    }),
    type: z.enum(['READ', 'READ_WRITE'])
})
export const ActionSchema = z.object({
    name: z.string().min(2, {
        message: "Name is required"
    }).max(100, {
        message: "Name must be less than 100 characters"
    }),
    type: z.enum(["EMAIL", "TELEGRAM", "WEBHOOK"]),
    enabled: z.boolean().optional(),
    retries: z.number().min(0, {
        message: "Retries must be greater than 0"
    }).max(5, {
        message: "Current plan maximum 5 "
    }),
    triggerLimit: z.number().min(1, {
        message: "Trigger limit must minimum be 1"
    }).max(5, {
        message: "Maximum on free plan is 5"
    }),

    email_address: z.string().email({
        message: "Not an email!!"
    }).min(1, {
        message: "Email required!"
    }).optional(),
    email_content: z.string().min(1, {
        message: "Email content required"
    }).max(400, {
        message: "Maximum 400 characters for content"
    }).optional(),

    telegram_chat_id: z.string().min(1, {
        message: "Chat Id is required"
    }).optional(),

    url_webhook: z.string().url({
        message: "Not a URL!"
    }).min(1, {
        message: "Url is required"
    }).optional(),

}).superRefine((data, ctx) => {
    switch (data.type) {
        case "EMAIL":
            if (!data.email_address || data.email_address.trim() === "") {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    path: ["email_address"],
                    message: "Email is required when type is EMAIL"
                });
            }
            if (!data.email_content || data.email_content.trim() === "") {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    path: ["email_content"],
                    message: "Email content required when type is EMAIL"
                });
            }
            break
        case "TELEGRAM":
            if (!data.telegram_chat_id || data.telegram_chat_id.trim() === "") {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    path: ["telegram_chat_id"],
                    message: "Telegram chat ID is required when type is TELEGRAM"
                });
            }
            break;
        case "WEBHOOK":
            if (!data.url_webhook || data.url_webhook.trim() === "") {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    path: ["url_webhook"],
                    message: "Url is required!"
                });
            }
            break;
    }

});

export const UpdateActionSchema = z.object({
    id: z.string().min(1, {
        message: "Action ID is required."
    }),
    name: z.string().min(2, {
        message: "Name is required!"
    }).max(100, {
        message: "Name must be less than 100 characters"
    }),

    retries: z.number().min(0, {
        message: "Retries must be greater than 0"
    }).max(5, {
        message: "Current plan maximum 5 "
    }).optional(),
    triggerLimit: z.number().min(1, {
        message: "Trigger limit must minimum be 1"
    }).max(5, {
        message: "Maximum on free plan is 5"
    }).optional(),
    active: z.boolean()
});
export const DeleteApiKeySchema = z.object({
    id: z.string()
})
export const DataStreamSchema = z.object({
    title: z.string().min(2).max(100, {
        message: "Name must contain between 2 to 100 characters"
    }),
    description: z.string().min(2).max(300),
    deviceId: z.string().min(1, "Device Id is required!"),
    projectId: z.string().min(1, "Project id is required")

})
export const DeviceSchema = z.object({
    name: z.string().min(2, {
        message: "Name is required!"
    }).max(100, {
        message: "Name must contain between 2 to 100 characters"
    }),
    description: z.string().min(2, {
        message: "Description is required"
    }).max(300, {
        message: "Maximum of 300 characters"
    }),
    deviceType: z.enum(['ESP32', 'ESP8266', 'NODEMCU', 'HIBISCUS_SENSE']),
    projectId: z.string().min(1, "Project is required")

})
export const UserRoleSchema = z.object({
    userId: z.string().min(1, {
        message: "User id is required!"
    }),
    role: z.enum(['student', 'educator', 'superadmin'], {
        message: "Role selected is required"
    })
})
export const DeleteDeviceSchema = z.object({
    deviceId: z.string().min(1, {
        message: "Device Id required"
    })
})
export const DeleteDataStreamSchema = z.object({
    dataStreamId: z.string().min(1, {
        message: "Data Stream Id required"
    })
})


// Primitive condition (leaf node)
export const ConditionNodeSchema = z.object({
    id: z.string(),
    type: z.literal("condition"),
    field: z.string().min(1, "Field is required"),
    operator: z.enum(["==", ">=", "<=", ">", "<"]),
    value: z.string().min(1, "Value is required"),
});

// Group node (can contain conditions or groups)
export const GroupNodeSchema: z.ZodType<{
    id: string;
    type: "group";
    operator: ("AND" | "OR")[];
    children: (ConditionNode | GroupNode)[];
}> = z.lazy(() =>
    z.object({
        id: z.string(),
        type: z.literal("group"),
        operator: z.array(z.enum(["AND", "OR"])),
        children: z.array(z.union([ConditionNodeSchema, GroupNodeSchema]))
            .min(1, "Group must have at least one child"),
    })
);

// Wrapper for full payload
export const FullRulePayloadSchema = z.object({
    name: z.string().min(1),
    description: z.string().optional(),
    actionId: z.array(z.string().min(1)).min(1, {
        message: "Required to select at least ONE action"
    }),
    ruleTree: GroupNodeSchema,
    triggerLimit: z.number().min(1, {
        message: "Trigger limit must minimum be 1"
    }).max(5, {
        message: "Maximum on free plan is 5"
    }),
});
export const UpdateDataStreamSchema = DataStreamSchema.pick({ title: true, description: true }).extend({
    id: z.string().min(1, {
        message: "Id is required"
    })
})