"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MdMenu, MdClose } from "react-icons/md";

import Button from "@/components/Button";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const data = {
    name: "Avinash",

    nav_Items: [
      { id: "1", label: "About", link: "about" },
    ]
  };


  return (
    <div className="text-white flex items-center justify-between">
      <NameLogo name={data.name} />

      <div className="flex gap-3 items-center justify-between">
        {
          data.nav_Items.map((item) => (
            <Link href={item.link} key={item.id} className="font-bold text-slate-800">
              {item.label}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default NavBar

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