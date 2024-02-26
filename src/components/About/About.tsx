import React from 'react'

import Bounded from "../Bounded";
import Heading from '../Heading';
import Button from '../Button';
import Avatar from './Avatar';

const About = () => {

  const data = {
    heading: "About Avinash",
    description: `
  👋 Hello! I'm Avinash S Chandavar, a Frontend Developer passionate about crafting captivating web experiences. 🚀 I'm currently honing my skills through an immersive frontend development course at crio.do, where I'm mastering HTML, CSS, JavaScript, and React to bring designs to life and create seamless user interactions.

🌱 Learning is a constant joy for me, and I actively seek out new challenges to enhance my web development skills. React, with its versatility and dynamic capabilities, has captured my imagination and pushed me to create more innovative projects.

🌐 My goal is to create user-friendly and visually stunning web applications that leave a lasting impression. Transforming ideas into functional websites brings me immense satisfaction and joy.

💼 As a dedicated learner, I'm eagerly open to entry-level opportunities that allow me to contribute my frontend expertise and collaborate with innovative teams. I'm committed to growing as a developer and being part of projects that drive positive change.
`,
    button_link: "Resume",
    button_text: "Resume",
    avatar: '/name.jpg'
  }


  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="lg" className="col-start-1">
          {data.heading}
        </Heading>

        <div className="prose prose-xl prose-slate prose-invert col-start-1 ">
          <p>{data.description}</p>
        </div>

        <Button
          linkField={data.button_link}
          label={data.button_text}
        />

        <Avatar
          image={data.avatar}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3 rounded-md"
        />
      </div>
    </Bounded>
  )
}

export default About;