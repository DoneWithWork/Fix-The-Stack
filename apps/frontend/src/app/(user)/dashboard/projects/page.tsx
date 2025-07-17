import Header from "@/components/shared/Header";
import AllProjects from "@/components/Projects";
import { LoadingCom } from "@/components/shared/Loader";
import { Suspense } from "react";

export default async function Projects() {
  return (
    <div className="px-3 py-3 flex flex-col min-h-screen">
      <Header classnames="mb-2">Projects</Header>
      <div className="bg-gray-900  w-full flex-1 rounded-md px-3 py-3 flex flex-col">
        <Suspense fallback={<LoadingCom />}>
          <AllProjects />
        </Suspense>
      </div>
    </div>
  );
}
