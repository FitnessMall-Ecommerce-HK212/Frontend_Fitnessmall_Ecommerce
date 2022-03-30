import React from 'react'

const tags = ["Giảm mỡ", "Mẹo vặt"]

const BlogTag = () => {
  return (
    tags.map((tag) => {
        return <span className='blogTags'>{tag}</span>
    })
  )
}

export default BlogTag