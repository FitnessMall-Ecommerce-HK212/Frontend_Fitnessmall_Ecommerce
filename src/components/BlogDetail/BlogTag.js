import { CircularProgress } from '@material-ui/core'
import React from 'react'

const BlogTag = (props) => {
  if (props.tags !== undefined) {
    return (
      props.tags.map((tag) => {
          return <span className='blogTags'>{tag}</span>
      })
    )

  } else {
    return (
      <div></div>
    )
  }
}

export default BlogTag