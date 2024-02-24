"use client"

import React, { Fragment, useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { MdCircle } from 'react-icons/md'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import Heading from '../Heading'
import Bounded from '../Bounded'



gsap.registerPlugin(ScrollTrigger);

const TechList = () => {

  const component = useRef(null)

  const data = {
    heading: "What I use",

    tech_items: [
      { id: "1", techName: "React", techColor: "#29D8FF", },
      { id: "2", techName: "Nextjs", techColor: "#FFFFFF", },
      { id: "3", techName: "GSAP", techColor: "#0AE448", },
      { id: "4", techName: "Nodejs", techColor: "#FF7E33", },
      { id: "5", techName: "JavaScript", techColor: "#29D8FF", },
      { id: "6", techName: "TailwindCSS", techColor: "#FFFFFF", },
      { id: "7", techName: "CSS", techColor: "#0AE448", },
      { id: "8", techName: "HTML", techColor: "#FF7E33", },
    ]
  }

  useEffect(() => {
    let ctx = gsap.context(() => {

      const t1 = gsap.timeline(
        {
          scrollTrigger: {
            trigger: component.current,
            // markers: true,
            start: "top bottom",
            end: "bottom top",
            scrub: 4,
          }
        });

      t1.fromTo(".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          }
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      )


    }, component)

    return () => ctx.revert();

  }, []);


  return (
    <section className='overflow-hidden' ref={component}>
      <Bounded as="div">
        <Heading as="h2" size="lg" >
          {data.heading}
        </Heading>
      </Bounded>
      {
        data.tech_items.map(({ id, techName, techColor }) => (
          <div
            key={id} aria-label={techName || undefined}
            className='tech-row mb-8 flex items-center justify-center gap-4 text-slate-700'
          >
            {
              Array.from({ length: 15 },
                (_, index) => (
                  <Fragment key={index}>
                    <span className='tech-item text-8xl font-extrabold uppercase tracking-tighter'
                      style={{ color: index === 7 && techColor ? techColor : "inherit" }}
                    >
                      {techName}
                    </span>
                    <span className='text-3xl font-extrabold'>
                      <MdCircle />
                    </span>
                  </Fragment>
                )
              )}
          </div>
        ))
      }
    </section>
  )
}

export default TechList