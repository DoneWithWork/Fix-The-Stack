import Header from "@/components/shared/Header";
import NewActionBtn from "@/components/actions/NewActionBtn";
import NewRuleBtn from "@/components/rules/NewRuleBtn";
import { ActionColumn } from "@/components/tables/ActionsColumn";
import { DataTable } from "@/components/tables/data-table";
import { RulesColumn } from "@/components/tables/RulesColumn";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCachedActions, getCachedRules } from "@/lib/data";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export default async function RulesPage() {
  const user = await currentUser();
  if (!user) redirect("/");
  const rules = await getCachedRules(user.id);
  const actions = await getCachedActions(user.id);
  return (
    <div className="px-3 py-3">
      <Header>Rules</Header>
      <p className="text-base">
        Create events that are triggered based on preset rules
      </p>

      <Tabs defaultValue="account" className=" h-full mt-2">
        <TabsList className="mb-2">
          <TabsTrigger value="account">Rules</TabsTrigger>
          <TabsTrigger value="apikeys">Actions</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Rules</CardTitle>
              <CardDescription>All rules</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <DataTable
                columns={RulesColumn}
                data={rules}
                filterName="name"
                CreateBtn={<NewRuleBtn />}
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="apikeys">
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
              <CardDescription>
                Create and Manage all Actions here
              </CardDescription>
            </CardHeader>
            <CardContent className="grid">
              <DataTable
                columns={ActionColumn}
                data={actions}
                filterName="name"
                CreateBtn={<NewActionBtn />}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
