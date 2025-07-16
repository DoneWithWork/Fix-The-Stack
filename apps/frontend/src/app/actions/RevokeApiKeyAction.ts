"use server"

import { ActionResponse } from "@/lib/constants";
import { db } from "@/lib/db";
import { DeleteApiKeySchema } from "@/lib/schema";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { after } from "next/server";
import z from "zod";
type DeleteApiKeyType = z.infer<typeof DeleteApiKeySchema>
export async function RevokeApiKeyAction(prevState: ActionResponse<DeleteApiKeyType>, formData: FormData): Promise<ActionResponse<DeleteApiKeyType>> {
    const user = await currentUser();
    if (!user) return redirect("/")
    const parsed = DeleteApiKeySchema.safeParse({
        id: formData.get("api_key_id"),
    })
    if (!parsed.success) {
        return { errors: parsed.error.flatten().fieldErrors, success: false }
    }
    const deletedKey = await db(user.id).apiKey.delete({
        where: {
            userId: user.id,
            id: parsed.data.id
        }
    })
    if (!deletedKey) return { errorMessage: "Failed to delete key", success: false }
    after(() => {
        revalidateTag(`api_keys:${user.id}`)
    })
    return { success: true, message: "Successfully revoked Api Key" }

}