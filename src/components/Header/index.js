import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import '../../styles/Header.css'
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import logo_fitness from '../../assets/logo/fitness_logo.png'
import { CTAButton } from '../'
import { useDispatch, useSelector } from 'react-redux';
import { Popover, Button } from 'antd';
function Header(props) {
  let history = useHistory();
  //const sign=sessionStorage.geItem("sessionID");
  const [visible, setVisible] = useState(false)
  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = visible => {
    setVisible(visible);
  };
  return (
    <div class="Container">
      <div class="Middle_Wrap">
        <div class="LeftContainer">
          <div class="logo-menu">
            <div class="style_Logo">
              <a href="/" class="logo">
                <img style={{ width: "100%", height: "100%", borderStyle: "none" }}
                  src={logo_fitness} />
              </a>
            </div>
          </div>
          <div class="FormSearch" style={{ flex: "1 1 0%" }}>
            <div class="FormSearch_Form">
              <input type="text" placeholder="Tìm kiếm món hàng bạn muốn.." class="FormSearch_Input" />
              <CTAButton value="Tìm kiếm" />
            </div>
          </div>
        </div>
        <div class="RightContainer">
          <div class="Userstyle_Item">
            <Popover
              content={
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {!localStorage.getItem('isAuthenticated') ?
                    <a href="/login" style={{ color: "var(--primary)", marginBottom: "5px", textDecoration: 'none' }} > Đăng nhập</a> :
                    <a style={{ color: "var(--primary)", marginBottom: "5px", textDecoration: 'none' }}
                      onClick={() => {
                        axios
                          .get(
                            `https://fitnessmall.herokuapp.com/api/user_signout/${sessionStorage.getItem("sessionID")}`
                          )
                          .then((res) => {
                            if (res.data == "Sign Out Successfully") {
                              localStorage.removeItem('isAuthenticated');
                              localStorage.removeItem('sessionID');
                              localStorage.removeItem("pwd");
                              history.push("/");
                            }

                          })
                          .catch((err) => {
                            alert(err);
                          });
                      }}
                    >Đăng xuất</a>
                  }

                  <a href="/account" style={{ color: "var(--primary)", marginBottom: "5px", textDecoration: 'none' }} >Hồ sơ</a>
                  <a onClick={hide}>Đóng</a>

                  {/* <a>Profile</a> */}
                </div>

              }
              title="Cài đặt"
              trigger="click"
              visible={visible}
              onVisibleChange={handleVisibleChange}
            >
              <img class="profile-icon" src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" />
              <span style={{ fontSize: "16px", paddingTop: "200px" }}>Tài khoản</span>
            </Popover>

          </div>
          <Link to={"/cart"}>
            <div class="Userstyle_Item">
              <img class="profile-icon" src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" />
              <span class="Userstyle_ItemText">
                <span class="account-label">
                  <span style={{ fontSize: "16px" }}>Giỏ hàng</span>
                </span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
