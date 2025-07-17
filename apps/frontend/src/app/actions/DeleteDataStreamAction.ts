"use server"

import { ActionResponse } from "@/lib/constants";
import { db } from "@/lib/prisma";
import { DeleteDataStreamSchema } from "@/lib/validation";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { after } from "next/server";
import z from "zod";

type DeleteDataStreamSchemaType = z.infer<typeof DeleteDataStreamSchema>
export async function DeleteDataStreamAction(prevState: ActionResponse<DeleteDataStreamSchemaType>, formData: FormData): Promise<ActionResponse<DeleteDataStreamSchemaType>> {
    const user = await currentUser();

    if (!user) redirect("/")
    const rawData = {
        dataStreamId: formData.get("dataStreamId") as string
    }
    const parsed = DeleteDataStreamSchema.safeParse(rawData)
    if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors, success: false, errorMessage: "", inputs: rawData }
    const userId = user.id;

    const dataStream = await db(user.id).dataStream.findFirst({
        where: {
            id: parsed.data.dataStreamId,
            Device: {
                Project: {
                    userId: user.id
                }
            }

        },
        include: {
            Device: {
                select: {
                    projectId: true
                }
            },
            dataPoints: true

        }
    })
    if (!dataStream) return { success: false, errorMessage: "Failed to delete data stream" }
    if (dataStream.dataPoints != null && dataStream.dataPoints.length > 0) return { success: false, errorMessage: "You must deleted all data points for this data stream first." }
    const deletedStream = await db(user.id).dataStream.delete({
        where: {
            id: parsed.data.dataStreamId
        }
    })
    if (!deletedStream) return { success: false, errorMessage: "Failed to delete data stream" }
    after(() => {
        revalidateTag(`data_stream:${userId}:${dataStream.Device.projectId}`);
    });
    return { success: true, errorMessage: "" }


}