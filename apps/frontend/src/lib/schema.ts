import { z } from "zod";

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
    })

})
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