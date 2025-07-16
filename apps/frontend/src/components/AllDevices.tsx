import { extendedDeviceWithProject } from "@/lib/types";
import { Project } from "@prisma/index";
import NewDeviceBtn from "./NewDeviceBtn";
import { DataTable } from "./tables/data-table";
import { DeviceColumn } from "./tables/DeviceColumn";

type AllDevicesProps = {
  devices: extendedDeviceWithProject[];
  projects: Project[];
};

export default async function AllDevices({
  devices,
  projects,
}: AllDevicesProps) {
  console.log(devices);
  return (
    <div className="flex flex-col flex-1">
      {devices && devices.length > 0 ? (
        <div>
          <DataTable
            CreateBtn={<NewDeviceBtn id={null} projects={projects} />}
            columns={DeviceColumn}
            data={devices}
            filterName="name"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col  flex-1">
          <p className="font-bold text-2xl">Devices</p>
          <p className="mb-3">Create a new device to get started</p>
          <NewDeviceBtn id={null} projects={projects} />
        </div>
      )}
    </div>
  );
}
