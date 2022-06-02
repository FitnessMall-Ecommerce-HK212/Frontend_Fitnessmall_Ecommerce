import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import HotBlog from "./HotBlog";
import "../../styles/BlogPage.css";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { BASE_URL } from '../../config/host';

const Blog = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    async function getAllBlogs() {
      const response = await axios.get(`${BASE_URL}api/blogs`);
      return response.data.blogList;
    }
    getAllBlogs().then((res) => {
      setAllBlogs(res);
    });
    window.scrollTo(0,0)
  }, []);

  if (allBlogs.length === 0) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", margin: "15rem 0" }}
      >
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <>
        <div className="BlogPage">
          <div>
            <BlogCard allBlogs={allBlogs} />
          </div>
          <div className="hotBlog">
            <div className="hotTitle">BÀI VIẾT HAY</div>
            <HotBlog allBlogs={allBlogs} />
          </div>
        </div>
      </>
    );
  }
};

export default Blog;
