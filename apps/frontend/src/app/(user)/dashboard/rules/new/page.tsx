import NewRuleForm from "@/components/forms/NewRuleForm";
import Header from "@/components/Header";
import NewActionBtn from "@/components/NewActionBtn";
import {
  getCachedActions,
  getCachedDevicesIncludeDataStream,
} from "@/lib/data";
import { ActionWithRelations, DeviceWithStream } from "@/lib/types";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function NewRulePage() {
  const user = await currentUser();
  if (!user) redirect("/");
  const devices: DeviceWithStream[] = await getCachedDevicesIncludeDataStream(
    user.id
  );
  const actions: ActionWithRelations[] = await getCachedActions(user.id);
  return (
    <div className=" px-3 py-4 overflow-hidden min-h-full">
      <div className="flex flex-row justify-between items-center">
        <div>
          <Header>Rules</Header>
          <p className="text-base">
            Create events that are triggered based on preset rules
          </p>
        </div>
        <NewActionBtn />
      </div>

      <NewRuleForm devices={devices} actions={actions} />
    </div>
  );
}
