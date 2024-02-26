import React from "react";
import ContentBody from "@/components/ContentBody";
import { dataBlog } from "@/constants/constants";
import { BlogData } from "@/Types/type";

type Params = { uid: string };

const Page = ({ params }: { params: Params }) => {
  const data: BlogData | undefined = dataBlog.find((post) => post.uid === params.uid);

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
