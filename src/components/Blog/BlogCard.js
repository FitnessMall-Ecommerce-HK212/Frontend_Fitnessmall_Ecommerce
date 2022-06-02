import React from "react";
import "../../styles/BlogPage.css";
import { CTAButton } from "../Buttons";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return props.allBlogs.map((blog) => {
    return (
      <div className="container">
        <div className="blogCardContainer">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              {blog.tags.map((tag, index) => {
                return <span key={index} className="blogTag">{tag}</span>;
              })}
              <img src={blog.image} alt="blog-img" />
              <p className="blogTitle">{blog.title}</p>
            </div>

            <div className="col-lg-6 col-md-6">
              <p className="datePosted">{blog.date}</p>
              <p className="blogAuthor">{blog.writer}</p>
              <p className="blogShortContent">
                {blog.content.slice(0, 200).split("\\n").map((x, index) => {
                return <div key={index}>{x}</div>;
              })}...
              </p>
              <Link
                to={`/blog/detail/${blog.idBlog}`}
                style={{ textDecoration: "none" }}
              >
                <CTAButton style={{borderRadius: '10px', padding: '10px', marginLeft: '0.5rem', marginBottom: '0.5rem'}} value="Đọc thêm" onClick={() => {}} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default BlogCard;
