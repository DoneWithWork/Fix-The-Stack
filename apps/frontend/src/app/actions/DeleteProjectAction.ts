"use server"

import { ActionResponse } from "@/lib/constants";
import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import z from "zod";

const DeleteProjectSchema = z.object({
    id: z.string().min(1, {
        message: "Project Id required"
    })
})

type DeletedProjectType = z.infer<typeof DeleteProjectSchema>
export async function DeleteProjectAction(prevState: ActionResponse<DeletedProjectType>, formData: FormData): Promise<ActionResponse<DeletedProjectType>> {


    const user = await currentUser();
    if (!user) return { success: false, errorMessage: "Not logged in" }
    const rawData: DeletedProjectType = {
        id: formData.get("id") as string
    }
    const parsed = DeleteProjectSchema.safeParse(rawData)
    if (!parsed.success) {
        return { success: false, errors: parsed.error.flatten().fieldErrors, inputs: rawData }
    }
    const { id } = parsed.data

    const project = await db(user.id).project.findFirst({
        where: {
            id,
            userId: user.id
        },
        include: {
            devices: {
                include: {
                    dataStreams: true
                }
            }
        }
    })
    if (!project) return { success: false, errorMessage: "Cannot find project" }
    const hasDevices = project.devices.length > 0;


    if (hasDevices) return { success: false, errorMessage: "Your project still has devices. Delete them first" }
    const deleteProject = await db(user.id).project.delete({
        where: {
            id,
            userId: user.id
        },

    })
    if (!deleteProject) return { success: false, errorMessage: "Failed to delete project" }
    revalidateTag(`projects:${user.id}`)
    return { success: true, message: "Successfully delete project" }
}