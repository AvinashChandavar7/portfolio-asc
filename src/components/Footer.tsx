import clsx from "clsx";
import React from "react";

import Link from "next/link";
import Bounded from "@/components/Bounded";

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";

export default async function Footer() {


  const data = {
    name: "Avinash",
    nav_item: [
      { id: "1", label: "About", link: "about" },
      { id: "2", label: "Blog", link: "blog" },
      { id: "3", label: "Project", link: "project" },

    ],
    github_link: "https://github.com/AvinashChandavar7",
    linkedin_link: "https://www.linkedin.com/in/avinash-chandavar-300a06220/",
    twitter_link: "https://twitter.com/",
  }


  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            {data.name}
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © {new Date().getFullYear()} {data.name}
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {data.nav_item.map(({ link, label }, index) => (
              <React.Fragment key={label}>
                <li>
                  <Link
                    className={clsx(
                      "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400",
                    )}
                    href={link}
                  >
                    {label}
                  </Link>
                </li>
                {index < data.nav_item.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-slate-400"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>


        <div className="socials inline-flex justify-center sm:justify-end">
          {data.github_link && (
            <SocialLink
              href={data.github_link}
              label={data.name + " on GitHub"}
              icon={<FaGithub />}
              color="blue-500"
            />
          )}


          {data.linkedin_link && (
            <SocialLink
              href={data.linkedin_link}
              label={data.name + " on LinkedIn"}
              icon={<FaLinkedin />}
              color="blue-500"
            />
          )}

          {data.twitter_link && (
            <SocialLink
              href={data.twitter_link}
              label={data.name + " on Twitter"}
              icon={<FaTwitter />}
              color="blue-500"
            />
          )}
        </div>

      </div>
    </Bounded>
  );
}


const SocialLink = (
  { href, label, icon, color }: { href: string; label: string; icon: React.ReactNode, color: string }
) => (
  <Link
    href={href}
    target="_blank"
    className={clsx("p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125",
      color && `hover:text-${color}`
    )}

    aria-label={label}
  >

    {icon}

  </Link>
);