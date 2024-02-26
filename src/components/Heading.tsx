"use client"

import clsx from "clsx";
import gsap from "gsap";
import { useEffect, useRef } from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm";
  children: React.ReactNode;
  className?: string;
};

export default function Heading(
  { as: Comp = "h1", className, children, size = "lg", }: HeadingProps
) {

  const component = useRef(null)
  const renderLetters = (name: string, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
      >
        {letter}
      </span>
    ));
  };

  const renderHeadingContent = () => {
    if (typeof children === 'string') {
      return renderLetters(children, 'heading');
    } else {
      return children;
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { y: -100, opacity: 0, rotate: -10 },
          {
            y: 0,
            opacity: 1,
            rotate: 0,

            ease: "elastic.out(1,0.3)",
            duration: 0.5,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "start" },
          },
        )
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <Comp
      className={clsx(
        "font-bold leading-tight tracking-tight  text-slate-300",
        size === "xl" && "text-7xl md:text-9xl",
        size === "lg" && "text-6xl md:text-8xl",
        size === "md" && "text-5xl md:text-6xl",
        size === "sm" && "text-3xl md:text-4xl",
        className,
      )}
      ref={component}
    >
      {renderHeadingContent()}
    </Comp>
  );
}
