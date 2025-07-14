import Header from "@/components/Header";
import { AuditColumn } from "@/components/tables/AuditColumn";
import { DataTable } from "@/components/tables/data-table";
import { getCachedAudits } from "@/lib/data";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function LogsPage() {
  const user = await currentUser();
  if (!user) redirect("/");
  const audits = await getCachedAudits(user.id);
  return (
    <div className="px-3 py-4">
      <Header>Audit Logs</Header>
      <span>Tracks changes and access to all data</span>
      <DataTable columns={AuditColumn} data={audits} filterName="action" />
    </div>
  );
}
