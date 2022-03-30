import React from 'react'
import HotBlogCard from './HotBlogCard'

const hotblog = [
    {
        "src": "https://www.wheystore.vn/upload/news_optimize/wst_1602494019_workout_la_gi__tam_quan_trong_cua_workout_trong_the_hinh_image_1602494019_1.jpg",
        "title": "5 workouts you can do almost everywhere",
        "tags": "Fitness"
    },
    {
        "src": "https://www.wheystore.vn/upload/news_optimize/wst_1602494019_workout_la_gi__tam_quan_trong_cua_workout_trong_the_hinh_image_1602494019_1.jpg",
        "title": "5 workouts you can do almost everywhere",
        "tags": "abc"
    },
]

const HotBlog = () => {
  return (
    hotblog.map((blog) => {
        return <HotBlogCard img={blog.src} title={blog.title} tags={blog.tags} />
    })
  )
}

export default HotBlog