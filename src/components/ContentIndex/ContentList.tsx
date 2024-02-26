"use client"

import React, { useEffect, useRef, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BlogData, ProjectData } from '@/Types/type';

gsap.registerPlugin(ScrollTrigger);



type ContentListProps = {
  items: BlogData[] | ProjectData[];
  contentType: string;
  viewMoreText: string;
  fallbackItemImages?: string;
}

const ContentList = (
  { items, contentType, viewMoreText, fallbackItemImages }: ContentListProps
) => {

  const component = useRef(null);
  const revealRef = useRef(null);
  const itemsRef = useRef<Array<HTMLElement | null>>([]);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  const [currentItem, setCurrentItem] = useState<null | number>(null);

  const contentImages = items.map(item => {
    const image = item.hover_image ? item.hover_image : fallbackItemImages;

    return image
  });

  const onMouseEnter = (index: number) => {
    setCurrentItem(index);
  }

  const onMouseLeave = () => {
    setCurrentItem(null);
  }

  useEffect(() => {
    // Animate list-items in with a stagger
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20, },
          {
            opacity: 1, y: 0, duration: 1.3, ease: "elastic.out(1,0.3)",

            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          },
        );
      });

      return () => ctx.revert();
    }, component);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mousePosition = { x: event.clientX, y: event.clientY + window.scrollY };

      // Calculate speed and direction
      const speed = Math.sqrt(Math.pow(mousePosition.x - lastMousePosition.current.x, 2));

      let ctx = gsap.context(() => {
        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 350;

          gsap.to(
            revealRef.current,
            {
              opacity: 1,
              x: gsap.utils.clamp(0, maxX, mousePosition.x - 110),
              y: gsap.utils.clamp(0, maxY, mousePosition.y - 160),
              rotation: speed * (mousePosition.x > lastMousePosition.current.x ? 1 : -1),
              ease: "back.out(2)",
              duration: 1.3
            }
          );
        }

        lastMousePosition.current = mousePosition;

        return () => ctx.revert();
      }, component)
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);

  }, [currentItem]);

  const urlPrefix = contentType === 'Blog' ? '/blog' : '/project';

  return (
    <div ref={component}>
      <ul className='grid border-b border-b-slate-100'
        onMouseLeave={onMouseLeave}
      >
        {items.map((item, index) => (
          item.title && (
            <li
              key={index}
              className='list-item opacity-0'
              onMouseEnter={() => onMouseEnter(index)}
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <a
                href={`${urlPrefix}/${item.uid}`}
                className='flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row'
                aria-label={item.title}
              >
                <div className='flex flex-col'>
                  <span className='text-3xl font-bold'>{item.title}</span>
                  <div className='flex gap-3 text-blue-400 text-lg font-bold'>
                    {item.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span className='ml-auto flex items-center gap-2 text-xl font-medium md:ml-0'>
                  {viewMoreText} <MdArrowOutward />
                </span>
              </a>
            </li>
          )
        ))}
      </ul>

      {/* Hover Element */}
      <div
        ref={revealRef}
        className='hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg bg-cover bg-center opacity-0 transition-[background] duration-300'
        style={{ backgroundImage: currentItem !== null ? `url(${contentImages[currentItem]})` : "", }}
      >

      </div>
    </div>
  );
}

export default ContentList;
