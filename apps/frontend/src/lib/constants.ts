import { CheckCircle2, DatabaseZapIcon, FolderRoot, LucideIcon, MicrochipIcon, Pickaxe, User, Webhook, Wifi } from "lucide-react";
import z from "zod";
import { DeleteDeviceSchema, DeviceSchema, NewProjectSchema } from "./validation";

type UserDashboardLinkTypes = {
    title: string;
    href: string;
    icon: LucideIcon
}

export const UserDashboardLinks: UserDashboardLinkTypes[] = [
    {
        title: "Devices",
        href: "/devices",
        icon: MicrochipIcon
    },
    {
        title: "Projects",
        href: "/projects",
        icon: FolderRoot
    },
    {
        title: "Webhooks",
        href: "/webhooks",
        icon: Webhook
    },
    {
        title: "MQTT",
        href: "/mqtt",
        icon: Wifi
    },
    {
        title: "Rules",
        href: "/rules",
        icon: Pickaxe
    },
    {
        title: "Data Logs",
        href: "/data-logs",
        icon: DatabaseZapIcon
    },
    {
        title: "Audit",
        href: "/audit",
        icon: CheckCircle2
    }
] as const


export const AdminDashboardLinks: UserDashboardLinkTypes[] = [
    {
        title: "Users",
        href: "/users",
        icon: User
    },

] as const





export type DeviceFormData = z.infer<typeof DeviceSchema>
export type DeleteDeviceFormData = z.infer<typeof DeleteDeviceSchema>
export interface ActionResponse<T> {
    success: boolean;
    errorMessage?: string;
    message?: string;
    errors?: {
        [K in keyof T]?: string[]
    },
    inputs?: T
}
export const initialState = { success: false, errorMessage: "", errors: {} };
export const UpdateDeviceSchema = DeviceSchema.pick({ name: true, description: true }).extend({
    id: z.string().min(1, {
        message: "Id is required"
    })
})
export const UpdatedProjectScehma = NewProjectSchema.pick({ title: true, description: true }).extend({
    id: z.string().min(1, {
        message: "Id is required"
    })
})