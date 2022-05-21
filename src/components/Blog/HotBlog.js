import React, { useEffect, useState } from "react";
import HotBlogCard from "./HotBlogCard";
import axios from "axios";

const HotBlog = (props) => {
  return props.allBlogs.map((blog, index) => {
    return <HotBlogCard key={index} img={blog.image} title={blog.title} tags={blog.tags} idBlog={blog.idBlog} />;
  });
};

export default HotBlog;
