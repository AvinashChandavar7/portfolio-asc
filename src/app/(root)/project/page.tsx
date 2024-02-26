import React from 'react'
import ContentIndex from '@/components/ContentIndex/ContentIndex'
import { MainDataProps } from '@/Types/type'




const Page = () => {

  const data: MainDataProps = {
    heading: "Project",
    content_type: "Project",
    description: "I write about What lve learning so other can benefit",
    view_more_text: "Read more",
    fallback_item_image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107",
  }



  return (
    <>
      <ContentIndex {...data} />
    </>
  )
}

export default Page