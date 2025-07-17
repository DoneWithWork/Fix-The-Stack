"use server"

import { ActionResponse } from "@/lib/constants";
import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";
const ActionSchema = z.object({
    actionId: z.string().min(1, {
        message: "Require Action Id"
    })
})
type ActionType = z.infer<typeof ActionSchema>
export async function DeleteAction(prevState: ActionResponse<ActionType>, formData: FormData): Promise<ActionResponse<ActionType>> {
    const user = await currentUser();
    if (!user) return redirect("/");

    const rawData = {
        actionId: formData.get("actionId") as string
    }
    const parsed = ActionSchema.safeParse(rawData)
    if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors, success: false }
    if (!parsed.data.actionId) {
        return { success: false, errorMessage: "Action ID is missing." };
    }
    try {
        const action = await db(user.id).action.findFirst({
            where: {
                userId: user.id,
                id: parsed.data.actionId
            },
            include: {
                rules: true
            }
        })
        if (action?.rules.some(() => true)) return { success: false, errorMessage: "This action is used by one or more Rules. Delete the rule first!" }
        await db(user.id).action.delete({
            where: {
                id: parsed.data.actionId,
                userId: user.id,
            },
        });
        revalidateTag(`actions:${user.id}`);
        return { success: true, message: "Action deleted successfully." };
    } catch (error) {
        console.error("Error deleting action:", error);
        return { success: false, errorMessage: "Failed to delete action." };
    }
}
