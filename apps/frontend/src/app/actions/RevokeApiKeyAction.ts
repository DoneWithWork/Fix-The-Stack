"use server"

import { db } from "@/lib/db";
import { DeleteApiKeySchema } from "@/lib/schema";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function RevokeApiKeyAction(prevState: unknown, formData: FormData) {
    const user = await currentUser();
    if (!user) return redirect("/")
    const parsed = DeleteApiKeySchema.safeParse({
        id: formData.get("api_key_id"),
    })
    if (!parsed.success) {
        return { errors: parsed.error.flatten().fieldErrors }
    }
    const deletedKey = await db(user.id).apiKey.delete({
        where: {
            userId: user.id,
            id: parsed.data.id
        }
    })
    if (!deletedKey) return { errors: ['Failed to delete key'], success: false }
    revalidateTag(`api_keys:${user.id}`)
    return { success: true, errors: {} }

}