import React from 'react'
import unknown_logo from '../../assets/img/secret_avatar.png'

const Comment = (props) => {
  return (
    <div className='commentGrid'>
        <img src={unknown_logo} alt="avatar" />
        <div className='besideAvatar'>
            <p className='userComment'>{props.name}</p>
            <p className='dateComment'>{(new Date(props.date * 1000)).toLocaleString()}</p>
            <p className='commentContent'>{props.content}</p>
        </div>
    </div>
  )
}

export default Comment