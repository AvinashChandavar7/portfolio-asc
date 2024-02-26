"use client";
import { useEffect, useRef } from "react";


import Bounded from "@/components/Bounded";
import gsap from "gsap";

import { Shapes } from "./Shapes";

const Hero = () => {

  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,

            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          },
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

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


  const data = {
    first_name: "Avinash",
    last_name: "Chandavar",
    tag_line: "Full Stack Developer",
  };

  return (
    <Bounded ref={component}>
      <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2 ">
        <div className="col-start-1 md:row-start-1 lg:pl-6" data-speed=".2">
          <h1
            className="mb-8 text-[clamp(3rem,17vmin,18rem)] text-center md:text-start font-extrabold leading-none tracking-tighter"
            aria-label={`${data.first_name} ${data.last_name}`}
          >
            <span className="block text-slate-300 ">
              {renderLetters(data.first_name, "first")}
            </span>
            <span className="-mt-[.1em] block text-slate-500  ">
              {renderLetters(data.last_name, "last")}
            </span>
          </h1>
          <span className="job-title block text-center md:text-start  bg-gradient-to-tr from-red-500 via-blue-500 to-green-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            {data.tag_line}
          </span>
        </div>

        <Shapes />
      </div>
    </Bounded>
  )
}

export default Hero