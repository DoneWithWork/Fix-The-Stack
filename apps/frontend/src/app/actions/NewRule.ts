"use server"

import { FullRulePayloadSchema } from "@/lib/schema";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function NewRuleAction(prevState: unknown, formData: FormData) {
    const user = await currentUser();
    if (!user) redirect("/")

    const raw = {
        name: formData.get("name"),
        description: formData.get("description"),
        actionId: JSON.parse(formData.get("actionId") as string),
        ruleTree: JSON.parse(formData.get("ruleTree") as string),
    };
    const parsed = FullRulePayloadSchema.safeParse(raw)
    if (!parsed.success) {
        return { success: false, errors: parsed.error.flatten() }
    }
    const rule = parsed.data
    console.log(rule)
    return { success: true, errors: {} }

}