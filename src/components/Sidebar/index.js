import React,{ useState,useEffect } from 'react';
import '../../styles/Account.css'
import axios from "axios";
import unknown_logo from '../../assets/img/secret_avatar.png'
function Sidebar({nameActive}) {
    const [image,setImage]=useState('');
    const [name,setName]=useState('');
    useEffect(()=>{
        axios.get(`http://fitnessmall.herokuapp.com/api/user_session/${localStorage.sessionID}`)
            .then((res) => {
              axios.get(`http://fitnessmall.herokuapp.com/api/user/${res.data.username}`,{username:res.data.username})
            .then((res) => {
              setImage(res.data.avatar)
              setName(res.data.name)
            })
            .catch((err) => {
            alert(err);
            });
            })
            .catch((err) => {
            alert(err);
            });
        
      },[])
    return (
        <aside style={{width:"380px",marginTop:"17px",height:"700px",backgroundColor:"var(--lightsecondary)",borderRadius:"12px"}}>
            <div class="Account_StyledAvatar">
             <img className="w-8 h-8 rounded-full" src={image!=''?image:unknown_logo} alt="avatar" width="60" height="60"/>
               <div class="info">Tài khoản của<strong>{name!=''?name:'No name'}</strong></div>
            </div>
            <ul class="Account_StyledNav">
              <li>
              <a href="/account">
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" width="20px" />
              <span className={nameActive=="1"?"is-active":""} >Thông tin tài khoản</span>
              </a></li>
              <li>
              <a class="" href="/healthinfo">
                  <img src="https://cdn-icons-png.flaticon.com/512/3004/3004451.png" width="20px" />
                  <span className={nameActive==2?"is-active":""}>Thông tin sức khỏe</span></a>
              </li>
              <li>
              <a class="" href="/history/order">
                  <img src="https://cdn-icons-png.flaticon.com/512/1524/1524711.png" width="20px" />
                  <span className={nameActive==3?"is-active":""}>Quản lý đơn hàng</span></a></li>
              <li>
              <a class="" href="/address">
                  <img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" width="20px" />
                  <span className={nameActive==4?"is-active":""}>Sổ địa chỉ</span></a></li>
             
              </ul>
        </aside>
    );
}

export default Sidebar;