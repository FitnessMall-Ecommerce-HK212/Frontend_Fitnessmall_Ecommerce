import React from 'react';
import '../../styles/Account.css'
import unknown_logo from '../../assets/img/secret_avatar.png'
function Sidebar(props) {
    return (
        <aside style={{width:"380px",marginTop:"17px",height:"700px",backgroundColor:"var(--lightsecondary)",borderRadius:"12px"}}>
            <div class="Account_StyledAvatar">
             <img src={unknown_logo} alt="avatar"/>
               <div class="info">Tài khoản của<strong>Võ Hồng Phúc</strong></div>
            </div>
            <ul class="Account_StyledNav">
              <li>
              <a href="">
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" width="20px" />
              <span class="is-active" >Thông tin tài khoản</span>
              </a></li>
              <li>
              <a class="" href="">
                  <img src="https://cdn-icons-png.flaticon.com/512/3004/3004451.png" width="20px" />
                  <span>Thông tin sức khỏe</span></a>
              </li>
              <li>
              <a class="" href="">
                  <img src="https://cdn-icons-png.flaticon.com/512/1524/1524711.png" width="20px" />
                  <span>Quản lý đơn hàng</span></a></li>
              <li>
              <a class="" href="">
                  <img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" width="20px" />
                  <span>Sổ địa chỉ</span></a></li>
             
              </ul>
        </aside>
    );
}

export default Sidebar;