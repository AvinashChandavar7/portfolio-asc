import React from 'react'

import Bounded from "../Bounded";
import Heading from '../Heading';
import Button from '../Button';

import Avatar from './Avatar';

const About = () => {

  const data = {
    heading: "About Avinash",
    description: `
    Hey, I’m Andy! I grew up in the Pacific Northwest and love all things creative. From the misty forests to the vibrant city streets, my surroundings have always fueled my passion for design and coding.

As a self-taught developer, I found my calling in blending artistic flair with technical skill. My journey has led me to specialize in front-end development, where I craft interactive experiences that are not just functional, but also visually stunning.

When I'm not coding, you'll find me experimenting with digital art or exploring the latest in web animation.

Join me as I continue to push the boundaries of what's possible in the digital world!
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