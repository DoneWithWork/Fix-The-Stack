"use server";

import db from "@/lib/db";
import { ActionSchema } from "@/lib/schema";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function NewAction(prevState: unknown, formData: FormData) {
    const user = await currentUser();
    if (!user) return redirect("/")


    const parsed = ActionSchema.safeParse({
        name: formData.get("name"),
        type: formData.get("type"),
    })
    if (!parsed.success) {
        return { errors: parsed.error.flatten().fieldErrors, success: false }
    }
    const { name, type } = parsed.data
    const newAction = await db.action.create({
        data: {
            name,
            type,
            active: true,

        }
    })
    if (!newAction) {

    }
}