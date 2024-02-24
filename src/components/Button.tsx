import React from "react";
import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  linkField: string;
  label: string;
  showIcon?: boolean;
  className?: string;
};

export default function Button({
  linkField, label, showIcon = true, className, }: ButtonProps
) {
  return (
    <Link
      href={linkField}
      className={clsx(
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-500  px-4 py-2 font-bold transition-transform ease-out  hover:scale-105",
        className,
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 z-0 h-full translate-y-9 bg-blue-600 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
        )}
      />
      <span className="relative flex items-center justify-center gap-2">
        {label} {showIcon && <MdArrowOutward className="inline-block" />}
      </span>
    </Link>
  );
}