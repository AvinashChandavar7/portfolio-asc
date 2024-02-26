import React from 'react'

import About from "@/components/About/About";
import TechList from '@/components/TechList/TechList';
import Experience from '@/components/About/Experience';
import Education from '@/components/About/Education';

const Page = () => {
  return (
    <>
      <About />

      <TechList />

      <Experience />

      <Education />
    </>
  )
}

export default Page