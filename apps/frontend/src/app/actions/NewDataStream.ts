"use server"

import { ActionResponse } from "@/lib/constants";
import { db } from "@/lib/db";
import { DataStreamSchema } from "@/lib/schema";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

type DataStreamSchemaType = z.infer<typeof DataStreamSchema>
export async function NewDataStreamAction(prevState: ActionResponse<DataStreamSchemaType>, formData: FormData): Promise<ActionResponse<DataStreamSchemaType>> {
    const user = await currentUser();

    if (!user) return redirect("/")
    const rawData = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        deviceId: formData.get("deviceId") as string,
        projectId: formData.get("projectId") as string,
    }
    const parsed = DataStreamSchema.safeParse(rawData)
    if (!parsed.success) {
        return { errors: parsed.error.flatten().fieldErrors, success: false, inputs: rawData }
    }
    const { projectId, deviceId, description, title } = parsed.data
    const Device = await db(user.id).device.findFirst({
        where: {
            id: deviceId,

        },
        include: {
            dataStreams: {
                select: {
                    title: true
                }
            }
        }
    })
    if (!Device) return { success: false, errorMessage: "Failed to find device" }
    const hasRepeatedTitle = Device?.dataStreams.some((dataStream) => dataStream.title === title)
    if (hasRepeatedTitle) return { success: false, errorMessage: "Cannot have duplicate names!", errors: { title: ["Cannot have duplicate name"] } }
    if (!Device) return { success: false, errorMessage: 'Cannot find device!' }
    const newDataStream = await db(user.id).dataStream.create({
        data: {
            title,
            description,
            deviceId,

        }
    })
    if (newDataStream) {
        revalidateTag(`devices_with_datastream:${user.id}`)
        revalidateTag(`data_stream:${user.id}:${projectId}`)
        return { success: true, message: "Created Data Stream successfully" }
    } else {
        return { success: false, errorMessage: "Failed to create data stream" }
    }



}