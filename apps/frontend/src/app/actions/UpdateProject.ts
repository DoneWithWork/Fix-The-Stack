"use server";

import { ActionResponse, UpdatedProjectScehma } from "@/lib/constants";
import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import z from "zod";

type UpdatedProjectType = z.infer<typeof UpdatedProjectScehma>
export async function UpdateProjectAction(prevState: ActionResponse<UpdatedProjectType>, formData: FormData): Promise<ActionResponse<UpdatedProjectType>> {

    const user = await currentUser();
    if (!user) return { success: false, errorMessage: "Not logged in" }
    const rawData: UpdatedProjectType = {
        id: formData.get("id") as string,
        title: formData.get("title") as string,
        description: formData.get("description") as string
    }
    const parsed = UpdatedProjectScehma.safeParse(rawData)
    if (!parsed.success) {
        return { success: false, errors: parsed.error.flatten().fieldErrors, inputs: rawData }
    }
    const { id, title, description } = parsed.data


    const project = await db(user.id).project.update({
        where: {
            userId: user.id,
            id
        },
        data: {
            title,
            description
        }
    })
    if (!project) return { success: false, errorMessage: "Failed to update project" }
    revalidateTag(`projects:${user.id}`)

    return { success: true, message: "Successfully updated project" }
}