import React from "react";

import { BlogData } from "@/Types/type";
import { dataBlog } from "@/constants/constants";

import ContentBody from "@/components/ContentBody";

type Params = { uid: string };

const Page = ({ params }: { params: Params }) => {
  const data: BlogData | undefined = dataBlog.find((post) => post.uid === params.uid);

  return (
    <>
      {data ? (
        <ContentBody data={data} />
      ) : (
        <h1 className="mx-auto text-[30vmin] font-black text-slate-200">
          Blog post not found
        </h1>
      )}
    </>
  );
};
export default Page;
