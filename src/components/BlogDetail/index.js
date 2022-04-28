import React, { useState, useEffect } from "react";
import "../../styles/BlogDetail.css";
import HotBlog from "../Blog/HotBlog";
import DisplayComment from "./DisplayComment";
import unknown_logo from "../../assets/img/secret_avatar.png";
import { CTAButton } from "../Buttons";
import BlogTag from "./BlogTag";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function CustomizedSnackbars(props) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        open={props.open}
        autoHideDuration={3000}
        onClose={props.handleClose}
      >
        <Alert
          onClose={props.handleClose}
          severity={props.type}
          sx={{ width: "100%" }}
        >
          {props.type === "success" ? "Add comment successfully" : "Failed, please retry!"}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

const BlogDetail = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [blog, setBlog] = useState({});
  const { idBlog } = useParams();
  const [user, setUser] = useState({});
  const [blogCmt, setBlogCmt] = useState("");
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);
  const [checkCmt, setCheckCmt] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddComment = () => {
    axios
      .post("http://localhost:8080/api/blog/add-cmt", {
        username: user.username,
        content: blogCmt,
        blog_id: idBlog,
      })
      .then((res) => {
        setType("success");
        setOpen(true);
      })
      .catch((error) => {
        setType("error");
        setOpen(true);
      });
    setCheckCmt(!checkCmt);
    setBlogCmt("");
  };

  useEffect(() => {
    if ("sessionID" in localStorage) {
      async function getUserInfo() {
        const response = await axios.get(
          `http://localhost:8080/api/user_session/${localStorage.sessionID}`
        );
        return response.data;
      }
      getUserInfo().then((res) => setUser(res));
    }
  }, []);

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
      console.log(res)
    });
  }, [checkCmt]);

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
      <>
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
            {Object.keys(user).length === 0 ? (
              <div
                style={{
                  color: "#B3BDC8",
                  textAlign: "center",
                  margin: "2rem 0",
                }}
              >
                Vui lòng{" "}
                <Link to="/login">
                  <span style={{ color: "#FF2C86", fontWeight: "500" }}>
                    đăng nhập
                  </span>
                </Link>{" "}
                để thêm bình luận!
              </div>
            ) : (
              <div className="commentOnBlog">
                <UserInfo name={user.username} />
                <div className="formComment">
                  <input
                    type="text"
                    placeholder="Viết bình luận"
                    className="commentInput"
                    value={blogCmt}
                    onChange={(e) => setBlogCmt(e.target.value)}
                  />
                  <CTAButton
                    value="Thêm bình luận"
                    onClick={handleAddComment}
                  />
                </div>
              </div>
            )}
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
        <CustomizedSnackbars type={type} open={open} handleClose={handleClose} />
      </>
    );
  }
};

export default BlogDetail;
