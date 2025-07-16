"use server"
import { encryptApiKey, generateApiKey } from "@/lib/apikey";
import { ActionResponse } from "@/lib/constants";
import { db } from "@/lib/db";
import { ApiKeySchema } from "@/lib/schema";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";

import { redirect } from "next/navigation";
import z from "zod";


type ApiKeyType = z.infer<typeof ApiKeySchema>
export async function NewApiKeyAction(prevState: ActionResponse<ApiKeyType>, formData: FormData): Promise<ActionResponse<ApiKeyType>> {
    const user = await currentUser();
    if (!user) return redirect("/")

    const parsed = ApiKeySchema.safeParse({
        name: formData.get("name"),
        type: formData.get("type"),
    })
    if (!parsed.success) {
        return { errors: parsed.error.flatten().fieldErrors, success: false }
    }
    const key = await generateApiKey();
    const encryptedKey = await encryptApiKey(key);

    const NewApiKey = await db(user.id).apiKey.create({
        data: {
            "name": parsed.data.name,
            "userId": user.id,
            "type": parsed.data.type,
            "key": encryptedKey,
            "initial": key.substring(0, 5)
        }
    })
    if (NewApiKey) {
        revalidateTag(`api_keys:${user.id}`)
        return { success: true, message: "Successfully created Api Key" }
    }
    else return { success: false, errorMessage: "Failed to create Api Key" }


}