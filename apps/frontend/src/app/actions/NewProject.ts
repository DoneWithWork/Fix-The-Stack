"use server"

import { db } from "@/lib/db";
import { NewProjectSchema } from "@/lib/schema";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function NewProjectAction(prevState: unknown, formData: FormData) {
    const user = await currentUser();

    if (!user) return redirect("/")
    const parsed = NewProjectSchema.safeParse({
        title: formData.get("title"),
        description: formData.get('description')
    })
    if (!parsed.success) return { success: false, errors: parsed.error.flatten().fieldErrors, formErrors: [''] }
    const dbUser = await db(user.id).user.findFirst({
        where: {
            id: user.id
        }
    })
    if (!dbUser) return { success: false, formErrors: ['Cannot find user'], errors: {} }
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
        return { success: false, formErrors: ['Failed to create project'], errors: {} }
    }



}