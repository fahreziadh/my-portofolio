import BlogItem from '@/components/blog-item'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className="font-bold text-[48px]">Blog</h1>
      <div className='flex flex-col gap-8 mt-8'>
          {
            [0,1,2,3,4,5].map(item=>(
              <BlogItem key={item} />
            ))
          }
      </div>
    </div>
  )
}

export default page