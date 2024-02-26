import Image from "next/image";

import { BlogData, ProjectData } from "@/Types/type";

import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";

import { formatDate } from "@/utils/formatDate";

interface ContentBodyProps {
  data: BlogData | ProjectData;
}

const ContentBody: React.FC<ContentBodyProps> = ({ data }) => {

  const formattedDate = formatDate(data.date);

  return (
    <>
      <Bounded as="article">
        <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
          <Heading as="h2" size="xl">{data.title}</Heading>
          <div className="flex gap-4 text-yellow-400">
            {data.tags.map((tag, index) => (
              <span key={index} className="text-xl font-bold">
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
            {formattedDate}
          </p>
          <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
            <p>

              {data.body.text}
            </p>
            <Image src={data.body.image_url} alt="pro" width={500} height={500} />

          </div>
        </div>
      </Bounded>
    </>
  );
}

export default ContentBody;