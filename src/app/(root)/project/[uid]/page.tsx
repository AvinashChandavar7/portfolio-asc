import React from "react";
import ContentBody from "@/components/ContentBody";
import { dataProject } from "@/constants/constants";
import { ProjectData } from "@/Types/type";

type Params = { uid: string };

const Page = ({ params }: { params: Params }) => {
  const data: ProjectData | undefined = dataProject.find((project) => project.uid === params.uid);

  return (
    <>
      {data ? (
        <ContentBody data={data} />
      ) : (
        <p>Blog post not found</p>
      )}
    </>
  );
};
export default Page;
