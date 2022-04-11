import React, { useState, useEffect } from "react";
import "../../styles/BlogDetail.css";
import HotBlog from "../Blog/HotBlog";
import DisplayComment from "./DisplayComment";
import unknown_logo from "../../assets/img/secret_avatar.png";
import { CTAButton } from "../Buttons";
import BlogTag from "./BlogTag";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

export function UserInfo(e) {
  if (e.name !== undefined) {
    return (
      <div className="userInfo">
        <img src={unknown_logo} alt="avatar" />
        <div className="userName">{e.name}</div>
      </div>
    );
  } else {
    return <></>;
  }
}

const BlogDetail = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [blog, setBlog] = useState({});
  const { idBlog } = useParams();
  const history = useHistory();
  const [authMess, setAuthMess] = useState("");
  const [user, setUser] = useState({})

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/api/user_author/t3OtC8RP3pJgeeqigmuIHz3nr4dSTirj"
      )
      .then((res) => {
        setAuthMess(res.data);
      });

    return () => {
      setAuthMess("");
    };
  }, []);

  if (authMess === "Not Author") {
    history.push("/");
  }
  const jwt = "jXeifYQHjwnnVRCFO6FlNYJs6ETqgZq0"
  useEffect(() => {
    axios.get(`http://localhost:8080/api/user_session/t3OtC8RP3pJgeeqigmuIHz3nr4dSTirj`).then((res) => {
        console.log(res.data)
        setUser(res.data)
    })
  }, [])

  useEffect(() => {
    async function getAllBlogs() {
      const response = await axios.get("http://localhost:8080/api/blogs");
      return response.data.blogList;
    }
    getAllBlogs().then((res) => {
      setAllBlogs(res);
    });
  }, []);

  useEffect(() => {
    async function getBlog() {
      const response = await axios.get(
        `http://localhost:8080/api/blogs/${idBlog}`
      );
      return response.data;
    }
    getBlog().then((res) => {
      setBlog(res);
    });
  }, []);

  if (allBlogs.length === 0 || blog.content === undefined) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", margin: "15rem 0" }}
      >
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <div className="blogDetail">
        <div className="leftContent">
          <h3 className="blogTitle">{blog.title}</h3>
          <p className="datePosted">{blog.date}</p>
          <p className="blogContent">
            {blog.content.split("\\n").map((x, index) => {
              return <div key={index}>{x}</div>;
            })}
          </p>
          <BlogTag tags={blog.tags} />
          <div className="authorBlog">
            <UserInfo name={blog.writer} />
          </div>
          <div className="blockComment">
            <div className="blockCmtTitle">
              Bình Luận ({blog.comment.length})
            </div>
            <div className="underScore">______</div>
            <DisplayComment comment={blog.comment} />
          </div>

          <div className="commentOnBlog">
            <UserInfo name={user.username} />
            <div className="formComment">
              <input
                type="text"
                placeholder="Viết bình luận"
                className="commentInput"
              />
              <CTAButton value="Thêm bình luận" />
            </div>
          </div>
        </div>

        <div className="rightBar">
          <div className="hotBlog">
            <div className="hotTitle">BÀI VIẾT HAY</div>
            <HotBlog allBlogs={allBlogs} />
          </div>
          <div className="relatedBlog">
            <div className="hotTitle">BÀI VIẾT TƯƠNG TỰ</div>
            <HotBlog allBlogs={allBlogs} />
          </div>
        </div>
      </div>
    );
  }
};

export default BlogDetail;
