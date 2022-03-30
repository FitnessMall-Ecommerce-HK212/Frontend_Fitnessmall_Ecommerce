import React from 'react'
import Comment from './Comment'

const comments = [
    {
        "name": "DzitDzangXinkDep",
        "date": "18/03/2022",
        "content": "Hay qua aaaaa!!!!!!!!"
    },
    {
        "name": "DzitDzang",
        "date": "19/03/2022",
        "content": "Cum okkkk!!!!!!!!!!!"
    },
]

const DisplayComment = () => {
  return (
    comments.map((comment) => {
        return <Comment name={comment.name} date={comment.date} content={comment.content} />
    })
  )
}

export default DisplayComment