"use server"


import { db } from "@/lib/prisma";
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

export async function DeleteAccountAction() {
    const user = await currentUser();

    if (!user) return redirect("/")

    // delete user from db 
    const deletedUser = await db(user.id).user.delete({
        where: {
            id: user.id
        }
    })

    if (!deletedUser) return { message: "Failed to delete user", error: true }
    const client = await clerkClient();
    await client.users.deleteUser
    return {
        message: "Successfully deleted your profile."
    }
}