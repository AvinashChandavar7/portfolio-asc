"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";

import Button from "@/components/Button";

type NavItem = {
  id: string;
  label: string;
  link: string;
};

type NavBarData = {
  name: string;
  cta_link: string;
  cta_label: string;
  nav_items: NavItem[];
};

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const data: NavBarData = {
    name: "Avinash",
    cta_label: "Contact",
    cta_link: "contact",

    nav_items: [
      { id: "1", label: "About", link: "/about" },
      { id: "2", label: "Blog", link: "/blog" },
      { id: "3", label: "Project", link: "/project" },

    ]
  };

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
        <div className="flex items-center justify-between">
          <NameLogo name={data.name} />
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <MdClose /> : <MdMenu />}
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <button
            aria-label="Close menu"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>
          {data.nav_items.map(({ id, link, label }, index) => (
            <React.Fragment key={id}>
              <li className={index === 0 ? "mt-8" : ""}>
                <Link
                  href={link}
                  className={clsx(
                    "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900",
                    { "bg-blue-300": pathname.includes(link as string), }
                  )}
                  onClick={() => setOpen(false)}
                >
                  <span>{label}</span>
                </Link>
              </li>

            </React.Fragment>
          ))}
          <li>
            <Button
              linkField={data.cta_link}
              label={data.cta_label}
              className="ml-3 border-none outline-none"
            />
          </li>

        </div>
        <DesktopMenu data={data} pathname={pathname} />
      </ul>
    </nav>
  );
}

export default NavBar;

function NameLogo({ name }: { name: string }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter text-slate-900"
    >
      {name}
    </Link>
  );
}

function DesktopMenu({
  data,
  pathname,
}: {
  data: NavBarData;
  pathname: string;
}) {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
      {data.nav_items.map(({ id, link, label }) => (
        <React.Fragment key={id}>
          <li>
            <Link
              className={clsx(
                "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900",
                {
                  "bg-blue-300": pathname.includes(link as string),
                }
              )}
              href={link}
            >
              <span>{label}</span>
            </Link>
          </li>

        </React.Fragment>
      ))}
      <li>
        <Button
          linkField={data.cta_link}
          label={data.cta_label}
          className="ml-3 border-none outline-none"
        />
      </li>
    </div>
  );
}
