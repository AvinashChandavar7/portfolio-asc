import React from 'react'

import { MainDataProps } from '@/Types/type'
import { dataBlog, dataProject } from '@/constants/constants'

import Bounded from '../Bounded'
import Heading from '../Heading'
import ContentList from './ContentList'


const ContentIndex = (data: MainDataProps) => {

  const contentType = data.content_type || "Blog";

  const items = contentType === "Blog" ? dataBlog : dataProject;

  return (
    <Bounded>
      <Heading size="lg" className='mb-8'>
        {data.heading}
      </Heading>

      {
        data.description && (
          <div className='prose prose-xl prose-invert mb-10'>
            {data.description}
          </div>
        )
      }

      <ContentList
        items={items}
        contentType={contentType}
        viewMoreText={data.view_more_text}
        fallbackItemImages={data.fallback_item_image}
      />

    </Bounded>
  )
}

export default ContentIndex