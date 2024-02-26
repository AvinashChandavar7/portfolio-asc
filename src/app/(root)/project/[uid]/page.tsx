import React from "react";

import { ProjectData } from "@/Types/type";
import { dataProject } from "@/constants/constants";

import ContentBody from "@/components/ContentBody";

type Params = { uid: string };

const Page = ({ params }: { params: Params }) => {
  const data: ProjectData | undefined = dataProject.find((project) => project.uid === params.uid);

  return (
    <>
      {data ? (
        <ContentBody data={data} />
      ) : (
        <h1 className="mx-auto text-[30vmin] font-black text-slate-200">
          Projects not found
        </h1>
      )}
    </>
  );
};
export default Page;
