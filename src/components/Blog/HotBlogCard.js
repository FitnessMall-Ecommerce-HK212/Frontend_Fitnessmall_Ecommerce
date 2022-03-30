import React from 'react'

const HotBlogCard = (props) => {
  return (
    <div className='hotBlogCard'>
        <div class="card shadow">
            <img src={props.img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <p class="card-title text-center">{props.tags}</p>
                <h5 class="card-text text-center">{props.title}</h5>
            </div>
        </div>
    </div>
  )
}

export default HotBlogCard