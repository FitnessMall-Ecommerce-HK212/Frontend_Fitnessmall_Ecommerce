import React from 'react'
import Comment from './Comment'

const DisplayComment = (props) => {
  return (
    props.comment.map((cmt) => {
        return <Comment name={cmt.username} date={cmt.date.seconds} content={cmt.content} />
    })
  )
}

export default DisplayComment