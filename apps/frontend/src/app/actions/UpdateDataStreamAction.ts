"use server"

import { type ActionResponse } from "@/lib/constants";
import { db } from "@/lib/prisma";
import { UpdateDataStreamSchema } from "@/lib/validation";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";



type UpdateDataStreamType = z.infer<typeof UpdateDataStreamSchema>
export async function UpdateDataStreamAction(prevState: ActionResponse<UpdateDataStreamType>, formData: FormData): Promise<ActionResponse<UpdateDataStreamType>> {
    try {
        const user = await currentUser();
        if (!user) redirect("/");

        const rawData = {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            id: formData.get("id") as string,
        }
        const parsed = UpdateDataStreamSchema.safeParse(rawData);

        if (!parsed.success) {
            return {
                success: false,
                errors: parsed.error.flatten().fieldErrors,
                errorMessage: "Invalid form data",
            };
        }

        const { title, description, id } = parsed.data;
        const DataStream = await db(user.id).dataStream.findFirst({
            where: {
                id,
                Device: {
                    Project: {
                        userId: user.id,
                    },
                },
            },
            select: {
                title: true,
                Device: {
                    select: {
                        Project: {
                            select: {
                                id: true,
                            },
                        },
                    },
                },
            },
        });
        const DataStreams = await db(user.id).dataStream.findMany({
            where: {
                id: {
                    not: id
                },
                Device: {
                    Project: {
                        userId: user.id,
                    },
                },
            },
            select: {
                title: true,

            },
        });
        if (!DataStream) return { errorMessage: "DataStream does not exists", success: false }
        const hasDuplicateTitle = DataStreams.some((stream) => stream.title === title)
        if (hasDuplicateTitle) return { errorMessage: "Duplicate name found!! Please choose another", success: false }
        const updateDataStream = await db(user.id).dataStream.update({
            where: {
                id
            },
            data: {
                title,
                description
            }
        })
        if (updateDataStream) {
            revalidateTag(`devices_with_datastream:${user.id}`)
            revalidateTag(`data_stream:${user.id}:${DataStream.Device.Project.id}`)
            return {
                success: true,
                message: "Successfully updated data stream"
            }
        }

        else {
            return {
                success: false,
                errorMessage: "Unknown error occurred during data stream update",
            };
        }
    } catch {
        return {
            success: false, errorMessage: "Failed to update data stream"
        }
    }
}