import React from 'react'
import '../../styles/BlogPage.css'
import { CTAButton } from '../Buttons'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {
  return (
    <div className='container'>
        <div className='blogCardContainer'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='blogTag'>{props.tags}</div>
                    <img src={props.src} alt='blog-img'/>
                    <p className='blogTitle'>{props.title}</p>
                </div>

                <div className='col-md-6'>
                    <p className='datePosted'>{props.date}</p>
                    <p className='blogAuthor'>{props.author}</p>
                    <p className='blogShortContent'>{props.content}</p>
                    <Link to={`/blog/detail/${props.id}`} style={{textDecoration: "none"}}>
                        <CTAButton value="Read More" onClick={() => {}}/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard