"use server"

import type { ActionResponse, DeleteDeviceFormData } from "@/lib/constants";
import { db } from "@/lib/prisma";
import { DeleteDeviceSchema } from "@/lib/validation";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { after } from "next/server";

export async function DeleteDeviceAction(prevState: ActionResponse<DeleteDeviceFormData>, formData: FormData): Promise<ActionResponse<DeleteDeviceFormData>> {
    try {
        const user = await currentUser();

        if (!user) redirect("/")
        const parsed = DeleteDeviceSchema.safeParse({
            deviceId: formData.get("deviceId")
        })
        if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors, success: false, errorMessage: "" }
        const userId = user.id;
        const device = await db(user.id).device.findFirst({
            where: {
                id: parsed.data.deviceId,
                Project: {
                    userId
                }
            },
            include: {
                dataStreams: true
            }
        })

        if (!device) return { errors: {}, success: false, errorMessage: "Failed to delete device" }
        if (device?.dataStreams.length != null && device.dataStreams.length > 0) {
            return { errors: {}, success: false, errorMessage: "You must deleted all data streams for this device first." }

        }
        const deletedDevice = await db(user.id).device.delete({
            where: {
                id: parsed.data.deviceId
            }
        });

        if (!deletedDevice) return { errors: {}, success: false, errorMessage: "Failed to delete device" }
        after(() => {
            revalidateTag(`project_devices:${userId}:${device.projectId}`)
            revalidateTag(`devices:${userId}`)
        })

        return { errors: {}, success: true, errorMessage: "" }
    }
    catch {
        return {
            success: false,
            errorMessage: "Failed to delete device"
        }
    }


}