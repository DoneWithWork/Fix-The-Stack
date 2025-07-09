"use server";

import db from "@/lib/db";
import { ActionSchema } from "@/lib/schema";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function NewAction(prevState: unknown, formData: FormData) {
    const user = await currentUser();
    if (!user) redirect("/")


    const data = Object.fromEntries(formData.entries());
    const parsed = ActionSchema.safeParse({
        name: data.name,
        type: data.type,
        enabled: true,
        retries: data.retries ? Number(data.retries) : undefined,
        triggerLimit: data.triggerLimit ? Number(data.triggerLimit) : undefined,
        email_address: data.email_address,
        email_content: data.email_content,
        telegram_chat_id: data.telegram_chat_id,
        url_webhook: data.url_webhook,
    });
    if (!parsed.success) {
        return { errors: parsed.error.flatten().fieldErrors, success: false }
    }

    const {
        name,
        type,
        retries,
        triggerLimit,
        email_address,
        email_content,
        url_webhook,
        telegram_chat_id,
    } = parsed.data;

    const newAction = await db.action.create({
        data: {
            name,
            type,
            retries,
            triggerLimit,
            active: true,
            userId: user.id
        },
    });

    if (!newAction) {
        return { errors: {}, success: false, formError: "Failed to create new action" }

    }
    switch (type) {
        case "EMAIL":
            if (!email_address || !email_content) throw new Error("Missing email fields");
            await db.emailAction.create({
                data: {
                    actionId: newAction.id,
                    receiverEmail: email_address,
                    content: email_content
                }
            })
            break;

        case "TELEGRAM":
            if (!telegram_chat_id) throw new Error("Missing Telegram chat ID");
            await db.telegramAction.create({
                data: {
                    actionId: newAction.id,
                    chatId: telegram_chat_id
                }
            })
            break;

        case "WEBHOOK":
            if (!url_webhook) throw new Error("Missing webhook URL");
            await db.webhookAction.create({
                data: {
                    actionId: newAction.id,
                    url: url_webhook,
                    payload: ""
                }
            })
            break;

        default:
            throw new Error("Wrong type!!");
    }
    revalidateTag(`actions:${user.id}`)
    return { errors: {}, success: true }



}