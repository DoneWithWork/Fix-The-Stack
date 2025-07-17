"use server";

import { generateApiKey } from "@/lib/apikey";
import { db } from "@/lib/prisma";
import { DeviceSchema } from "@/lib/validation";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import type { ActionResponse, DeviceFormData } from "@/lib/constants";
import { DeviceType } from "@prisma/index";
export async function NewDeviceActions(
    prevState: ActionResponse<DeviceFormData>,
    formData: FormData
): Promise<ActionResponse<DeviceFormData>> {

    const user = await currentUser();
    if (!user) redirect("/");
    const rawData: DeviceFormData = {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        deviceType: formData.get("deviceType") as DeviceType,
        projectId: formData.get("projectId") as string,
    }
    const parsed = DeviceSchema.safeParse(rawData);

    if (!parsed.success) {
        return {
            success: false,
            errors: parsed.error.flatten().fieldErrors,
            errorMessage: "Invalid form data",
            inputs: rawData
        };
    }

    const { name, description, deviceType, projectId } = parsed.data;

    const project = await db(user.id).project.findFirst({
        where: { userId: user.id, id: projectId },
    });

    if (!project) {
        return {
            success: false,
            errorMessage: "Project not found or unauthorized",
            inputs: rawData
        };
    }

    const key = await generateApiKey();
    const token = `${project.title.toLowerCase().replace(" ", "_")}_device_auth_token_${key}`;

    const newDevice = await db(user.id).device.create({
        data: {
            name,
            description,
            deviceType,
            projectId,
            deviceAuthToken: token,
        },
    });

    if (newDevice) {
        revalidateTag(`devices:${user.id}`);
        revalidateTag(`project_devices:${user.id}:${projectId}`);
        return {
            success: true,
            message: "Successfully created new device"
        }
    } else {
        return {
            success: false,
            errorMessage: "Unknown error occurred during device creation",
            inputs: rawData
        };
    }



}
