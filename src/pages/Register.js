import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect,useHistory } from 'react-router-dom';
import {Footer, Header} from '../components';
import axios from "axios";
import '../styles/Login_Register.css'
import md5 from 'md5';
import { registerUser} from '../redux/auth/authSlice';
import {notification} from 'antd';
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
    marginTop:"10px",
    outline: "none",
    padding: "16px 12px",
    border:"1px solid #979CA3",
    boxShadow:"4px 4px 1px rgba(36,37,94,0.1) ",
    color:"#FFA5CB",
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

export default function Register() {
  const classes = useStyles();
  const theme = useTheme();
  const history=useHistory();
  const dispatch=useDispatch();
  const [value_mail,setEmail]=useState('');
  const [value_pass,setPass]=useState('');
  const [value_username,setUser]=useState('');
  const { errorRegister } = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();  
    let hash='';
    if(value_pass!=''){
      hash =md5(value_pass);
    }
    dispatch(registerUser({username:value_username,password:hash,email:value_mail}));
    setTimeout(()=>{
    if (window.localStorage.getItem('isAuthenticated')==='true'){
      notification.info({
        message: 'Vertify to continue using the page',
        description:
          'You should vertify in the email to continue login and using our website',
        placement:'topLeft'
      });
    };
    const a= setInterval(()=>{
      axios.post(`${BASE_URL}api/users/${value_username}/vertify`,{username:value_username})
      .then((res) => {
        if(res.data==true) {clearInterval(a);history.push('/login');}
      })
      .catch((err) => {
      alert(err);
      });
    },5000);
    },1000)
    
  };
  return (
    <>
    <Header/>
    <Grid container direction="row" spacing={0} className={classes.root} >
      <Grid item xs={7}>
        {/* <img
          src={smart}
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
        <Card style={{ padding: "35px 29px", height: "540px", width: "472px" }}>
          <Typography className={classes.text20}>Đăng ký</Typography>
           
          <form>
            <p className="fst-italic text-danger">{errorRegister}</p>
            <input type="text" id="inputName" className={classes.input} name="username" placeholder = "Người dùng" 
            onChange={(e)=>setUser(e.target.value)}
            ></input>
            <input type="text" id="inputPass" className={classes.input} name="password" placeholder = "Mật khẩu" 
            onChange={(e)=>setPass(e.target.value)}
            ></input>
            <input type="text" id="inputEmail" className={classes.input} name="email" placeholder = "Email" 
            onChange={(e)=>setEmail(e.target.value)}
            ></input>
            
          </form>

          <Button variant="contained" type="submit" className={classes.button_login}
          onClick={handleSubmit}
          >Tiếp</Button>

          <div style={{paddingBottom:"0.875rem",display:"flex",alignItems:"center",paddingTop:"20px"}} >
             <div className={classes.line}></div>
             <span className={classes.or}>Hoặc</span>
             <div className={classes.line}></div>
          </div>
          <br></br>
          <div style={{margin: "0px 45px ",justifyContent: "space-between",flexWrap: "wrap",display: "flex"}} >
          <button className={classes.button_social} onClick={()=>{ axios.get(`${BASE_URL}api/user_signin_signup/google`)
    .then((res) => {
      window.localStorage.setItem('pwd','Not declared')
      window.open(res.data,'','popup')
      setTimeout(() => 
       window.localStorage.getItem('isAuthenticated')=='true'?history.push("/"):''
     , 9000);
    })
    .catch((err) => {
      alert(err);
    }); 
    }}>
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
            <p style={{textAlign:"center",fontSize:"13px",fontWeight:600}}>Đã có tài khoản?  <Link to="/login" style={{textDecoration:"None"}}><span style={{color:"#FF2C86",cursor: "pointer"}}> Đâng nhập</span></Link></p>
          </div>
        </Card>
      </Grid>
    </Grid>
    <Footer/>
    </>
  );
}