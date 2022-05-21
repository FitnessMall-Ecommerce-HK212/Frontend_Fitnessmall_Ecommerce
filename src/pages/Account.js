import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link,useHistory} from 'react-router-dom';
import axios from "axios";
import {Footer, Header,Sidebar,CTAButton,DropdownButton} from '../components';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AvatarUploader from '../helpers/supAvatar';
import md5 from 'md5';
import { Radio} from 'antd';
import unknown_logo from '../assets/img/secret_avatar.png'
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
export default function Account(){
  const history=useHistory();
  let valueNations=["VietNam","England","France","American","Wakanda"];
  const [account,setAccount]=useState('');
  // For all fields
  const [name,setName]=useState('');
  const [date,setDate]=useState({'day':'','month':'','year':''})
  const [nation,setNation]=useState('');
  const [sex,setSex]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState('');
  const [open,setOpen]=useState(false)
  const [type,setType]=useState('')
  useEffect(()=>{
    axios.get(`http://fitnessmall.herokuapp.com/api/user_session/${localStorage.sessionID}`)
        .then((res) => {
          axios.get(`http://fitnessmall.herokuapp.com/api/user/${res.data.username}`,{username:res.data.username})
        .then((res) => {
          setAccount(res.data);
          setName(res.data.name);
          setEmail(res.data.email);
          setDate(res.data.date?res.data.date:{'day':'','month':'','year':''});
          setNation(res.data.nation?res.data.nation:'');
          setSex(res.data.sex?res.data.sex:'');
          setPhone(res.data.phone?res.data.phone:'')
        })
        .catch((err) => {
        alert(err);
        });
        })
        .catch((err) => {
        alert(err);
        });
    
  },[])
  //For password eye
  const [values, setValues] = useState({
    password: localStorage.getItem('pwd'),
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  //For alert
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  function CustomizedSnackbars(props) {
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
            {props.type === "success" ? "Save successfully" : "Failed, please retry!"}
          </Alert>
        </Snackbar>
      </Stack>
    );
  }
  const handleSubmit=()=>{
    setOpen(true)
    localStorage['pwd']=values.password;
    axios.put(`http://fitnessmall.herokuapp.com/api/user/${account.username}/update`,
    {username:account.username,name:name,password:md5(values.password),date:date,nation:nation,sex:sex,phone:phone,email:email})
    .then((res) => {
      setType("success")
      console.log(res.data)
    })
    .catch((err) => {
      setType("fail")
    alert(err);
    });
  }
  return (

       <div className="account">
        <Header/>
        <div class="Container_acc" style={{backgroundColor:"white"}}>
          <div class="Account_Style">
          <Sidebar nameActive="1"/>
          <div class="Infor_Style">
          <span class="info-title">Thông tin cá nhân</span>
            <div class="styles_StyledAccountInfo">
             <form>
             <div class="form-info">
               <div class="form-avatar" style={{marginRight:"50px",marginLeft:"20px"}}>
                 <div class="styles_StyleAvatar">
                 <div>
                 <div class="avatar-view">
                 {/* <img src={"https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png"} alt="avatar" class="default" style={{width: "60px",height: "60px"}}/> */}
                 <AvatarUploader
                size={140}
                uploadURL={`http://fitnessmall.herokuapp.com/api/user/${account.username}/update`}
                // fileType={ ("image/png") || ("image/jpg") }
                name={localStorage.getItem('isAuthenticated')==='true'? account.username : 'Anonymous'}
                // customHeaders={{'Content-Type': 'application/json'}}
                placeholder=''
                defaultImg={(localStorage.getItem('isAuthenticated')==='true')?(account.avatar!=''?account.avatar:unknown_logo):"https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png"}
                onFinished={(false,()=>{
                  setTimeout(() => {
                    window.location.reload(false);
                  }, 1000)
                  })}
                />
                 <div class="edit"><img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png" class="edit_img" alt="" style={{width: "16px",height: "16px"}}/>
                 </div></div></div></div>
               </div>
               <div class="form-name" >
                  <div class="form-control" style={{display:"flex",border:"none"}}>
                    <label class="input-label">Họ &amp; Tên</label>
                    <div>
                    <div class="hisWEc" >
                      <input class="input " type="search" name="fullName" maxlength="100" placeholder="Thêm họ tên" value={name} onChange={(e)=>setName(e.target.value)} />
                  </div></div></div>
                  <div class="form-control" style={{display:"flex",border:"none"}}>
                    <label class="input-label">Mật khẩu</label>
                    <div>
                    <div class="hisWEc" style={{position:"relative"}}>
                    <InputAdornment position="end" style={{zIndex: 1,position:"absolute",left: "15.3rem",top:"21px"}}>
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                      <input class="input " name="userName" maxlength="128" placeholder="Đặt mật khẩu" type={values.showPassword ? "text" : "password"} onChange={handlePasswordChange("password")} value={values.password}/>
                    </div></div></div>
               </div>
              </div>
                <div class="form-control" style={{display:"flex",border:"none"}}>
                  <label class="input-label">Ngày sinh</label>
                  <div class="style_StyledBirthdayPicker">
                  <select name="day" value={date.day} onChange={(e)=>{setDate({...date,'day':e.target.value})}}>
                    <option value="0">Ngày</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
                  <select name="month" value={date.month} onChange={(e)=>{setDate({...date,'month':e.target.value})}}>
                    <option value="0">Tháng</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select>
                  <select name="year" value={date.year} onChange={(e)=>{setDate({...date,'year':e.target.value})}}>
                    <option value="0">Năm</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option><option value="1911">1911</option><option value="1910">1910</option><option value="1909">1909</option><option value="1908">1908</option><option value="1907">1907</option><option value="1906">1906</option><option value="1905">1905</option><option value="1904">1904</option><option value="1903">1903</option><option value="1902">1902</option><option value="1901">1901</option><option value="1900">1900</option></select>
                  </div></div>
                <div class="form-control" style={{display:"flex",border:"none"}}>
                    <label class="input-label">Giới tính</label>
                    <Radio.Group onChange={(e)=>{setSex(e.target.value)}} value={sex}>
                      <Radio value={'Male'} style={{color:"var(--lightprimary)",fontSize:"16px",marginRight:"20px"}}>Male</Radio>
                      <Radio value={'Female'} style={{color:"var(--lightprimary)",fontSize:"16px",marginRight:"20px"}}>Female</Radio>
                      <Radio value={'Other'} style={{color:"var(--lightprimary)",fontSize:"16px",marginRight:"20px"}}>Other</Radio>
                    </Radio.Group>
                  </div>
                <div class="form-control" style={{display:"flex",border:"none"}}>
                    <label class="input-label">Quốc tịch</label>
                    <select name="kind" className='dropdown-button' value={nation} style={{width:"350px",fontSize:"15px",margin:"0",flex:"none"}} onChange={(e) => setNation(e.target.value)}>
                    {valueNations.map((item)=>
                        <option value={item} >{item}</option>
                    )}
                    </select>
                </div>
                <div class="form-control" style={{display:"flex",border:"none"}}>
                    <label class="input-label">Số điện thoại</label>
                    <div><div class="hisWEc">
                        <input style={{paddingRight: "35px"}} onChange={(e)=>setPhone(e.target.value)} value={phone} class="input with-icon-right" name="nationality" maxlength="128" placeholder="Nhập sđt" type="text" />
                        </div></div>
                </div>
                <div class="form-control" style={{display:"flex",border:"none"}}>
                    <label class="input-label">Email</label>
                    <div><div class="hisWEc">
                        <input style={{paddingRight: "35px"}} value={email} onChange={(e)=>setEmail(e.target.value)} class="input with-icon-right" name="nationality" maxlength="128" placeholder="Nhập email" type="text" />
                        </div></div>
                </div>
                    <div class="form-control" style={{display:"flex",border:"none"}}>
                        <label class="input-label">&nbsp;</label>
                        <CTAButton value="Lưu thay đổi" onClick={handleSubmit}/>
                        </div>
                        <CustomizedSnackbars type={type} open={open} handleClose={()=>setOpen(false)}/>
            </form>
            </div>
          </div>
          </div>
        </div>
        <Footer/>
       </div>
      
   )
}