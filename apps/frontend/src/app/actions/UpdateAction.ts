"use server"

import { ActionResponse } from "@/lib/constants";
import { db } from "@/lib/prisma";
import { UpdateActionSchema } from "@/lib/validation";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

type UpdateActionSchemaType = z.infer<typeof UpdateActionSchema>;

export async function UpdateAction(prevState: ActionResponse<UpdateActionSchemaType>, formData: FormData): Promise<ActionResponse<UpdateActionSchemaType>> {
    const user = await currentUser();
    if (!user) return redirect("/");
    const rawData = {
        id: formData.get("id") as string,
        name: formData.get("name") as string,
        retries: formData.get("retries") ? Number(formData.get("retries")) : undefined,
        triggerLimit: formData.get("triggerLimit") ? Number(formData.get("triggerLimit")) : undefined,
        active: formData.get("active") === "on",
    };

    const parsed = UpdateActionSchema.safeParse(rawData);

    if (!parsed.success) {
        return { success: false, errors: parsed.error.flatten().fieldErrors, inputs: rawData };
    }

    const { id, name, retries, triggerLimit, active } = parsed.data;

    try {
        await db(user.id).action.update({
            where: {
                id: id,
                userId: user.id,
            },
            data: {
                name,
                retries,
                triggerLimit,
                active,
            },
        });
        revalidateTag(`actions:${user.id}`);
        return { success: true, message: "Action updated successfully." };
    } catch (error) {
        console.error("Error updating action:", error);
        return { success: false, errorMessage: "Failed to update action." };
    }
}
