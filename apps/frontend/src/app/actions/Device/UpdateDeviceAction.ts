"use server"

import { UpdateDeviceSchema, type ActionResponse } from "@/lib/constants";
import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

type UpdateDeviceType = z.infer<typeof UpdateDeviceSchema>
export async function UpdateDeviceAction(prevState: ActionResponse<UpdateDeviceType>, formData: FormData): Promise<ActionResponse<UpdateDeviceType>> {
    try {
        const user = await currentUser();
        if (!user) redirect("/");

        const parsed = UpdateDeviceSchema.safeParse({
            name: formData.get("name"),
            description: formData.get("description"),
            id: formData.get("id"),

        });

        if (!parsed.success) {
            return {
                success: false,
                errors: parsed.error.flatten().fieldErrors,
                errorMessage: "Invalid form data",
            };
        }

        const { name, description, id } = parsed.data;

        const project = await db(user.id).project.findFirst({

            where: {
                userId: user.id, devices: {
                    some: {
                        id: id
                    }
                }
            },
        });

        if (!project) {
            return {
                success: false,
                errorMessage: "Project not found or unauthorized",
            };
        }


        const newDevice = await db(user.id).device.update({
            where: {
                id
            },
            data: {
                name,
                description,
            },
        });

        if (newDevice) {
            revalidateTag(`devices:${user.id}`);
            revalidateTag(`project_devices:${user.id}:${project.id}`);
            return {
                success: true,
                message: "Successfully updated device"
            }
        }

        return {
            success: false,
            errorMessage: "Unknown error occurred during device creation",
        };
    } catch {
        return {
            success: false, errorMessage: "Failed to create new device"
        }
    }
}