import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { Link,useHistory} from 'react-router-dom';
 import { loginUser } from '../redux/auth/authSlice';
import {Footer, Header} from '../components';
import '../styles/Login_Register.css'
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import md5 from 'md5';
import Input from "@material-ui/core/Input";
import {
  Grid,
  Card,
  Typography,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
import { loadUser } from '../redux/auth/authSlice';
import bcrypt from 'bcryptjs';
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
    marginTop:"10px",
    outline: "none",
    padding: "16px 12px",
    border:"1px solid #979CA3",
    boxShadow:"4px 4px 1px rgba(36,37,94,0.1) ",
    color:"var(--lightprimary)",
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
    color:"white",
    fontSize: "15px",
    backgroundColor:"#FF2C86",
    marginTop:"15px",
    padding: "7px 0px"
  },
  line:{
    height: "1px",
    width: "50%",
    backgroundColor: "#192A3E",
    flex: "1",
  },
  or:{
    color: "#192A3E",
    padding: "0 1rem",
    textTransform: "uppercase",
    fontSize: ".75rem",
  },
  button_social:{
    flex: "1",
    margin: "0 20px",
    paddingRight: "8px",
    paddingTop:"5px",
    paddingBottom:"5px",
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
  icon:{
    width: "36px",
    height: "36px",
    borderRadius: "1px",
    flexShrink: "0",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  icon_Facebook:{
    backgroundSize: "325% 287.5%",
    backgroundPosition: "5.555555555555555% 62.666666666666664%",
    backgroundImage: `url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/7b95007f3377150730bbb5d1ddb477d6.png)`,
    width: "22px",
    height: "22px",
    flexShrink: "0",
  },
  icon_Google:{
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
  const theme = useTheme();
  const dispatch = useDispatch();
  const [username, setName]=useState('');
  const history=useHistory();
  
  const [values, setValues] = useState({
    pwd: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [password, setPass]=useState('')
  const rounds = 10;
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();  
    const hash =md5(values.pwd);
    setPass(hash)
    // console.log(hash)
    dispatch(loginUser({ username:username, password: password}));
    axios
      .get(
        `http://127.0.0.1:8080/api/user_author/${sessionStorage.getItem("sessionID")}`,
            {
            },
            { headers: { "Content-Type": "application/json" } }
          )
                        .then((res) => {
                          console.log(res.data)
                             if (res.data==="OK")
                             {history.push("/")}
                        })
                        .catch((err) => {
                          alert(err);
                        });
  };

  return (
    <>
    <Header/>
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
        <Card style={{ padding: "35px 29px", height: "480px", width: "472px" }}>
          <Typography className={classes.text20}>Login</Typography>

          <form>
            <input type="text" id="inputName" className={classes.input} name="username" placeholder = "Username"  onChange={(e)=>{setName(e.target.value)}}
            ></input>
            <div style={{position:"relative"}}>
            <InputAdornment position="end" style={{zIndex: 1,position:"absolute",right: "20px",top:"35px"}}>
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
            <input id="inputPass" className={classes.input} name="password" placeholder = "Password"
type={values.showPassword ? "text" : "password"} onChange={handlePasswordChange("pwd")} value={values.pwd}
        > 
            </input>
          </div>
          </form>

          <p style={{fontSize:"14px",color: "#FF2C86",fontWeight:600,cursor: "pointer"}}
          >Forgotten password</p>

          <Button variant="contained" type="submit" className={classes.button_login} onClick={handleSubmit}
          >Login</Button>

          <div style={{paddingBottom:"0.875rem",display:"flex",alignItems:"center",paddingTop:"20px"}} >
             <div className={classes.line}></div>
             <span className={classes.or}>OR</span>
             <div className={classes.line}></div>
          </div>
          <br></br>
          <div style={{margin: "0px 45px ",justifyContent: "space-between",flexWrap: "wrap",display: "flex"}} >
          <button className={classes.button_social}>
            <div className={classes.icon}><div className={classes.icon_Google}></div></div>
            <div>Google</div>
          </button> 
          <button className={classes.button_social}>
            <div className={classes.icon}><div className={classes.icon_Facebook}></div></div>
            <div>Facebook</div>
          </button>        
          </div> 
          <br></br>
          <div>
            <p style={{textAlign:"center",fontSize:"13px",fontWeight:600}}>New to fitnessmall?  
            <Link to="/register" style={{textDecoration:"None"}}  ><span style={{color:"#FF2C86",cursor: "pointer"}} >Sign up</span></Link></p>
          </div>
        </Card>
      </Grid>
    </Grid>
    <Footer/>
    </>
  );
}