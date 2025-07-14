import { CheckCircle2, DatabaseZapIcon, FolderRoot, LucideIcon, MicrochipIcon, Pickaxe, User, Webhook, Wifi } from "lucide-react";

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

type InitialStateType = {
    success: boolean;
    formErrors: string;
    errors: Record<string, string[]>;
}
export const initialState: InitialStateType = { success: false, formErrors: "", errors: {} };