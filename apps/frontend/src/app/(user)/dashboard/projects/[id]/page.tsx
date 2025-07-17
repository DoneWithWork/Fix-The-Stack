import NewDeviceBtn from "@/components/NewDeviceBtn";
import Project from "@/components/project/ProjectCard";
import Header from "@/components/shared/Header";
import { LoadingCom } from "@/components/shared/Loader";
import {
  getCachedDataStreamsProject,
  getCachedDevicesByProject,
  getCachedProject,
  getCachedProjects,
} from "@/lib/data";
import { extendedDeviceWithProject } from "@/lib/types";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function ProjectPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params;
  const parameters = await searchParams;

  const tab = typeof parameters.tab === "string" ? parameters.tab : "dashboard";
  const user = await currentUser();

  if (!user) return redirect("/");
  const userId = user.id;
  const project = await getCachedProject({ userId, projectId: id });
  if (!project) return redirect("/dashboard/projects");
  const dataStreams = await getCachedDataStreamsProject({
    userId,
    projectId: id,
  });
  const projects = await getCachedProjects(userId);

  const devices: extendedDeviceWithProject[] = await getCachedDevicesByProject({
    userId,
    projectId: id,
  });
  return (
    <div className="px-3 py-3 flex flex-col h-screen max-w-full">
      <div className="flex flex-row justify-between items-center ">
        <div>
          <Header>Project: {project.title}</Header>
          <p className="text-base mb-3 ">{project.description}</p>
        </div>
        <div>
          <NewDeviceBtn id={project.id} projects={projects} />
        </div>
      </div>
      <Suspense fallback={<LoadingCom />}>
        <Project tab={tab} dataStreams={dataStreams} devices={devices} />
      </Suspense>
      <div className="mt-3"></div>
    </div>
  );
}
