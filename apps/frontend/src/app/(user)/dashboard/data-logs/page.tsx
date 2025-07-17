import Header from "@/components/shared/Header";
import { DataTable } from "@/components/tables/data-table";
import { DataLogsColumn } from "@/components/tables/DataLogsColumn";
import { getCachedDataLogs } from "@/lib/data";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DataLogsPage() {
  const user = await currentUser();
  if (!user) redirect("/");
  const datalogs = await getCachedDataLogs(user.id);
  return (
    <div className="px-3 py-4">
      <Header>Data Logs</Header>
      <span>
        All of your data points collected from accross all devices are stored
        here
      </span>
      <DataTable data={datalogs} columns={DataLogsColumn} filterName="title" />
    </div>
  );
}
