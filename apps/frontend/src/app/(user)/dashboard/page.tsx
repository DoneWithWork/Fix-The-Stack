import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function UserDashboard() {
  const user = await currentUser();
  if (!user) redirect("/");
  const users = await db(user.id).user.findMany();
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>{user.email}</div>
      ))}
    </div>
  );
}
