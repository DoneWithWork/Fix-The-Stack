import Users from "@/components/admin/Users";
import Header from "@/components/Header";
import { LoadingCom } from "@/components/Loader";
import { getCachedUsers } from "@/lib/data";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function AdminUsersPage() {
  const user = await currentUser();
  if (!user) redirect("/");
  const users = await getCachedUsers(user.id);
  return (
    <div className="px-3 py-4">
      <Header>Users</Header>
      <p>Manage all users here</p>
      <Suspense fallback={<LoadingCom />}>
        <Users users={users} />
      </Suspense>
    </div>
  );
}
