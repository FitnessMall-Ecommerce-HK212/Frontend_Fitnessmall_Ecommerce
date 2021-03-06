import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../redux/auth/authSlice';
import { Footer, Header } from '../components';
import '../styles/Login_Register.css'
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import md5 from 'md5';
import { CircularProgress } from "@mui/material";
import { notification, Modal, message } from 'antd';
import { BASE_URL } from '../config/host';
import {
  Grid,
  Card,
  Typography,
  Button,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#FFA5CB",
    height: "100vh",
  },
  text20: {
    fontFamily: "Poppins",
    fontWeight: "normal",
    fontSize: "30px",
    lineHeight: "30px",
    letterSpacing: "0.01rem",
    color: "#192A3E",
    fontWeight: 400,
    marginBottom: "16px",
  },
  text13: {
    fontFamily: "Poppins",
    fontWeight: "normal",
    fontSize: "13px",
    lineHeight: "19px",
    letterSpacing: "0.01rem",
    color: "#FFF",
    fontWeight: 600,
  },
  input: {
    width: "400px",
    height: "48px",
    borderRadius: "15px",
    marginBottom: "12px",
    marginTop: "10px",
    outline: "none",
    padding: "16px 12px",
    border: "1px solid #979CA3",
    boxShadow: "4px 4px 1px rgba(36,37,94,0.1) ",
    color: "var(--lightprimary)",
  },
  label: {
    marginBottom: "16px",
    fontFamily: "DM Sans",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "24px",
    color: "#404D61",
  },
  button_login: {
    width: "400px",
    textTransform: "None",
    color: "white",
    fontSize: "15px",
    backgroundColor: "#FF2C86",
    marginTop: "15px",
    padding: "7px 0px"
  },
  line: {
    height: "1px",
    width: "50%",
    backgroundColor: "#192A3E",
    flex: "1",
  },
  or: {
    color: "#192A3E",
    padding: "0 1rem",
    textTransform: "uppercase",
    fontSize: ".75rem",
  },
  button_social: {
    flex: "1",
    margin: "0 20px",
    paddingRight: "8px",
    paddingTop: "5px",
    paddingBottom: "5px",
    boxSizing: "border-box",
    outline: "None",
    border: "1px solid #FF2C86",
    backgroundColor: "#fff",
    color: "#FF2C86",
    padding: "2px 2px",
    borderRadius: "10px",
    width: "100%",
    height: "45px",
    fontSize: ".875rem",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },
  icon: {
    width: "36px",
    height: "36px",
    borderRadius: "1px",
    flexShrink: "0",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  icon_Facebook: {
    backgroundSize: "325% 287.5%",
    backgroundPosition: "5.555555555555555% 62.666666666666664%",
    backgroundImage: `url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/7b95007f3377150730bbb5d1ddb477d6.png)`,
    width: "22px",
    height: "22px",
    flexShrink: "0",
  },
  icon_Google: {
    backgroundSize: "722.2222222222222% 638.8888888888889%",
    backgroundPosition: "83.92857142857143% 5.154639175257732%",
    backgroundImage: `url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/7b95007f3377150730bbb5d1ddb477d6.png)`,
    width: "22px",
    height: "22px",
    flexShrink: "0",
  }
}));

export default function Login() {
  const classes = useStyles();
  const [progress, setProgress] = useState('')
  const theme = useTheme();
  const dispatch = useDispatch();
  const [username, setName] = useState('');
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const { errorLogin } = useSelector((state) => state.auth);
  const [newCode, setnewCode] = useState('');
  const [newPass, setnewPass] = useState('');
  const [values, setValues] = useState({
    pwd: '',
    showPassword: false,
  });
  const [messageLogin, setMessage] = useState('');

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleForgot = () => {
    if (username != '') {
      notification.info({
        message: 'L???y M?? m???i',
        description:
          'B???n ph???i l???y M?? ???? ???????c g???i t???i Email ????? ti???p t???c s??? d???ng Website',
        placement: 'topLeft'
      });
      axios.get(`${BASE_URL}api/user/forgotpass/${username}`, { username: username })
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          alert(err);
        });
      setTimeout(() => setIsModalVisible(true), 3000)
    }
    else {
      notification.info({
        message: 'Sai',
        description:
          'Vui l??ng nh???p T??i kho???n m?? b???n ???? qu??n m???t kh???u',
        placement: 'topLeft'
      });
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hash = '';
    if (values.pwd != '') {
      hash = md5(values.pwd);
    }
    setProgress(<> &nbsp; <CircularProgress size={20} color='inherit'/> </>);
    setMessage('')
    axios({
      method: "GET",
      url: `${BASE_URL}api/user_signin/?username=${username}&password=${hash}`
    }).then(response => {
      if (typeof (response.data) === "string") {
        setProgress('')
        setMessage(response.data)
      } else {
        window.localStorage.setItem("sessionID", response.data.sessionID);
        axios
          .get(
            `${BASE_URL}api/user_author/${window.localStorage.getItem("sessionID")}`,
            {
            },
            { headers: { "Content-Type": "application/json" } }
          )
          .then((res) => {
            setProgress('')
            if (res.data === "OK") {
              window.localStorage.setItem("pwd", values.pwd);
              window.localStorage.setItem('isAuthenticated', true)
              history.push("/")
            }
          })
          .catch((err) => {
            alert(err);
          });
      }
    })
    // dispatch(loginUser({ username: username, password: hash }));
    // setTimeout(() => {
    //   axios
    //     .get(
    //       `${BASE_URL}api/user_author/${window.localStorage.getItem("sessionID")}`,
    //       {
    //       },
    //       { headers: { "Content-Type": "application/json" } }
    //     )
    //     .then((res) => {
    //       if (res.data === "OK") {
    //         window.localStorage.setItem("pwd", values.pwd);
    //         window.localStorage.setItem('isAuthenticated', true)
    //         history.push("/")
    //       }
    //     })
    //     .catch((err) => {
    //       alert(err);
    //     });
    // }, 1000);
  };
  return (
    <>
      <Header />
      <Grid container direction="row" spacing={0} className={classes.root} >
        <Grid item xs={7}>
          {/* <img
          src={...}
          style={{ height: "100%", width: "100%" }}
        ></img> */}
        </Grid>
        <Grid
          item
          xs={5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card style={{ padding: "35px 29px", height: "500px", width: "472px" }}>
            <Typography className={classes.text20}>????ng nh???p </Typography>

            <form>
              <p className="fst-italic text-danger"> {messageLogin} </p>
              <input type="text" id="inputName" className={classes.input} name="username" placeholder="T??i kho???n" onChange={(e) => { setName(e.target.value) }}
              ></input>
              <div style={{ position: "relative" }}>
                <InputAdornment position="end" style={{ zIndex: 1, position: "absolute", right: "20px", top: "35px" }}>
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
                <input id="inputPass" className={classes.input} name="password" placeholder="M???t kh???u"
                  type={values.showPassword ? "text" : "password"} onChange={handlePasswordChange("pwd")} value={values.pwd}
                >
                </input>
              </div>
            </form>

            <p style={{ fontSize: "14px", color: "#FF2C86", fontWeight: 600, cursor: "pointer" }} onClick={handleForgot}
            >Qu??n m???t kh???u</p>
            <Modal title="X??c th???c M??" visible={isModalVisible} onOk={() => {
              setIsModalVisible(false); axios.get(`${BASE_URL}api/user/forgotpass/code/${username}?code=${newCode}`, { username: username }).then((res) => { if (res.data.check == true) { setIsModalVisible1(true) } }).catch((err) => alert(err)
              );
            }} onCancel={() => setIsModalVisible(false)}>
              <input type="text" id="inputName" className={classes.input} placeholder="??i???n v??o ????y" onChange={(e) => setnewCode(e.target.value)}></input>
            </Modal>
            <Modal title="Change Password" visible={isModalVisible1} onOk={() => {
              setIsModalVisible1(false); axios.post(`${BASE_URL}api/change_pass`, { username: username, password: md5(newPass) }, {
                'Content-Type': 'application/json'
              }).then((res) => {
                if (res.data == "Update password successfully") {
                  message.success('Change successful! Please log in again');
                }
              }).catch((err) => alert(err)
              );
            }} onCancel={() => setIsModalVisible1(false)}>
              <input type="text" id="inputName" className={classes.input} placeholder="Write the new password" onChange={(e) => setnewPass(e.target.value)}></input>
            </Modal>
            <Button variant="contained" type="submit" className={classes.button_login} onClick={handleSubmit}>????ng nh???p   
                  {progress}
            </Button>

            <div style={{ paddingBottom: "0.875rem", display: "flex", alignItems: "center", paddingTop: "20px" }} >
              <div className={classes.line}></div>
              <span className={classes.or}>OR</span>
              <div className={classes.line}></div>
            </div>
            <br></br>
            <div style={{ margin: "0px 45px ", justifyContent: "space-between", flexWrap: "wrap", display: "flex" }} >
              <button className={classes.button_social} onClick={() => {
                window.localStorage.setItem('isAuthenticated', false)
                axios.get(`${BASE_URL}api/user_signin_signup/google`)
                  .then((res) => {
                    window.localStorage.setItem('pwd', 'Not declared')
                    window.open(res.data, '', 'popup')
                    var looper = setInterval(() => {
                      if (window.localStorage.getItem('isAuthenticated') == "true") {
                        clearInterval(looper); 
                        history.push("/")
                      }
                    }, 2000);

                  })
                  .catch((err) => {
                    alert(err);
                  });
              }}>
                <div className={classes.icon}><div className={classes.icon_Google}></div></div>
                <div>Google</div>
              </button>
              {/* <button className={classes.button_social}>
                <div className={classes.icon}><div className={classes.icon_Facebook}></div></div>
                <div>Facebook</div>
              </button> */}
            </div>
            <br></br>
            <div>
              <p style={{ textAlign: "center", fontSize: "13px", fontWeight: 600 }}>L???n ?????u s??? d???ng Fitness Mall?
                <Link to="/register" style={{ textDecoration: "None" }}  ><span style={{ color: "#FF2C86", cursor: "pointer" }} > ????ng k??</span></Link></p>
            </div>
          </Card>
        </Grid></Grid>
      <Footer />
    </>
  );
}