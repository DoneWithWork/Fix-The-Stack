"use server"

import { db } from "@/lib/db";
import { FullRulePayloadSchema } from "@/lib/schema";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function NewRuleAction(prevState: unknown, formData: FormData) {
    const user = await currentUser();
    if (!user) redirect("/")

    const raw = {
        name: formData.get("name"),
        description: formData.get("description"),
        actionId: JSON.parse(formData.get("actionId") as string),
        ruleTree: JSON.parse(formData.get("ruleTree") as string),
        triggerLimit: Number(formData.get("triggerLimit")),
    };
    const parsed = FullRulePayloadSchema.safeParse(raw)

    if (!parsed.success) {
        return { success: false, errors: parsed.error.flatten() }
    }
    const ruleTree = JSON.parse(formData.get("ruleTree") as string)
    const { name, description, actionId, triggerLimit } = parsed.data
    const newRule = await db(user.id).rule.create({
        data: {
            name,
            description,
            actions: {
                connect: actionId.map(id => ({ id }))
            },
            userId: user.id,
            active: true,
            triggerLimit,
            ruleTree,
        },
    })
    if (!newRule) return { success: false, errors: {} }
    revalidateTag(`rules:${user.id}`)
    return { success: true, errors: {} }

}