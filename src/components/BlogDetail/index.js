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

import { BASE_URL } from '../../config/host';

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
      .post(BASE_URL+"api/blog/add-cmt", {
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
    if ("sessionID" in window.localStorage) {
      async function getUserInfo() {
        const response = await axios.get(
          BASE_URL+`api/user_session/${window.localStorage.sessionID}`
        );
        return response.data;
      }
      getUserInfo().then((res) => setUser(res));
    }
    window.scrollTo(0,0)
  }, []);

  useEffect(() => {
    async function getAllBlogs() {
      const response = await axios.get(BASE_URL+"api/blogs");
      return response.data.blogList;
    }
    getAllBlogs().then((res) => {
      setAllBlogs(res);
    });
  }, []);

  useEffect(() => {
    async function getBlog() {
      const response = await axios.get(
        BASE_URL+`api/blogs/${idBlog}`
      );
      return response.data;
    }
    getBlog().then((res) => {
      setBlog(res);
      console.log(res)
    });
  }, [checkCmt, idBlog]);

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
                B??nh Lu???n ({blog.comment.length})
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
                Vui l??ng{" "}
                <Link to="/login">
                  <span style={{ color: "#FF2C86", fontWeight: "500" }}>
                    ????ng nh???p
                  </span>
                </Link>{" "}
                ????? th??m b??nh lu???n!
              </div>
            ) : (
              <div className="commentOnBlog">
                <UserInfo name={user.username} />
                <div className="formComment">
                  <input
                    type="text"
                    placeholder="Vi???t b??nh lu???n"
                    className="commentInput"
                    value={blogCmt}
                    onChange={(e) => setBlogCmt(e.target.value)}
                  />
                  <CTAButton
                    value="Th??m b??nh lu???n"
                    onClick={handleAddComment}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="rightBar">
            <div className="hotBlog1">
              <div className="hotTitle">B??I VI???T HAY</div>
              <HotBlog allBlogs={allBlogs} />
            </div>
            <div className="relatedBlog">
              <div className="hotTitle">B??I VI???T T????NG T???</div>
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
