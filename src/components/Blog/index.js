import React from 'react'
import BlogCard from './BlogCard'
import HotBlog from './HotBlog';
import '../../styles/BlogPage.css'

const Blog = () => {
  return (
    <>
        <div className='BlogPage'>
            <BlogCard src="https://www.wheystore.vn/upload/news_optimize/wst_1602494019_workout_la_gi__tam_quan_trong_cua_workout_trong_the_hinh_image_1602494019_1.jpg" tags='Fitness' title='5 workouts you can do almost everywhere' date='18/03/2022' author='Hana Giang Anh' content='abc' id={1}/>
            <div className='hotBlog'>
                <div className='hotTitle'>BÀI VIẾT HAY</div>
                <HotBlog />
            </div>
        </div>
    </>
  )
}

export default Blog;