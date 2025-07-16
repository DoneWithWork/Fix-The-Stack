"use server"

import { ActionResponse } from "@/lib/constants";
import { db } from "@/lib/db";
import { NewProjectSchema } from "@/lib/schema";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";
type NewProjectSchemaType = z.infer<typeof NewProjectSchema>
export async function NewProjectAction(prevState: ActionResponse<NewProjectSchemaType>, formData: FormData): Promise<ActionResponse<NewProjectSchemaType>> {
    const user = await currentUser();

    if (!user) return redirect("/")
    const parsed = NewProjectSchema.safeParse({
        title: formData.get("title"),
        description: formData.get('description')
    })
    if (!parsed.success) return { success: false, errors: parsed.error.flatten().fieldErrors }
    const dbUser = await db(user.id).user.findFirst({
        where: {
            id: user.id
        }
    })
    if (!dbUser) return { success: false, errorMessage: 'Cannot find user', errors: {} }
    const { title, description } = parsed.data
    const newProject = await db(user.id).project.create({
        data: {
            title,
            description,
            userId: user.id
        }
    })
    if (newProject) {
        revalidateTag(`projects:${user.id}`);
        revalidateTag(`project:${user.id}:${newProject.id}`);
        redirect(`/dashboard/projects/${newProject.id}`)
    }
    else {
        return { success: false, errorMessage: 'Failed to create project' }
    }



}