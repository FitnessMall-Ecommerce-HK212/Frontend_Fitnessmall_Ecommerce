import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import '../../styles/Header.css'
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import logo_fitness from '../../assets/logo/fitness_logo.png'
import { CTAButton } from '../'
import { useDispatch, useSelector } from 'react-redux';
import { Popover, Button } from 'antd';
import {BsList} from "react-icons/bs";
function Header(props) {
  let history = useHistory();
  //const sign=sessionStorage.geItem("sessionID");
  const [visible, setVisible] = useState(false)

  const handleVisibleChange = visible => {
    setVisible(visible);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const setting = {
    name: 'Enable backdrop (default)',
    scroll: false,
    backdrop: true,
    placement: 'end'
  }
  return (
    <div class="Container">
        <div class="LeftContainer">
            <a href="/" class="logo">
              <img style={{ width: "100%", height: "100%", borderStyle: "none" }}
                src={logo_fitness} alt="logo"/>
            </a>
            <div class="FormSearch_Form">
              <input type="text" placeholder="Tìm kiếm ..." class="FormSearch_Input" />
              <CTAButton value="Tìm kiếm" />
            </div>
        </div>
        {!window.localStorage.getItem('isAuthenticated') ? 
        <div class="RightContainer">
          <button onClick={toggleShow}><BsList className='menu-icon' color='#FF2C86'/></button>
          <Offcanvas show={show} onHide={handleClose} {...setting}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            {!window.localStorage.getItem('isAuthenticated') ? 
            <ul style={{listStyle: 'none'}}>
              <li><Link to="/login"><button className='btn btn-send' style={{width: '100%'}}>Đăng nhập</button></Link></li>
              <li className='pt-3'><Link to="/register"><button className='btn btn-send' style={{width: '100%'}}>Đăng ký</button></Link></li>
            </ul>: 
            <ul style={{listStyle: 'none'}}>
              <li><Link to="/account"><button className='btn btn-send' style={{width: '100%'}}>Xem hồ sơ</button></Link></li>
              <li className='pt-3'><Link to="/cart"><button className='btn btn-send' style={{width: '100%'}}>Xem giỏ hàng</button></Link></li>
              <li className='pt-3'><Link to="/"
                      onClick={() => {
                        axios
                          .get(
                            `https://fitnessmall.herokuapp.com/api/user_signout/${sessionStorage.getItem("sessionID")}`
                          )
                          .then((res) => {
                            if (res.data === "Sign Out Successfully") {
                              window.localStorage.removeItem('isAuthenticated');
                              window.localStorage.removeItem('sessionID');
                              window.localStorage.removeItem("pwd");
                              history.push("/");
                            }

                          })
                          .catch((err) => {
                            alert(err);
                          });
                      }}
                    ><button className='btn btn-send' style={{width: '100%'}}>Đăng xuất</button></Link></li>
            </ul>}
            </Offcanvas.Body>
          </Offcanvas>
          <div class="Userstyle_Item">
            <img class="profile-icon" src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" alt="icon1"/>
            <Link to="/login"><span style={{ fontSize: "16px", paddingTop: "200px", color: 'white' }}>Đăng nhập</span></Link>
          </div>
          <div class="Userstyle_Item">
            <img class="profile-icon" src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" alt="icon1"/>
            <Link to="/register"><span style={{ fontSize: "16px", paddingTop: "200px", color: 'white' }}>Đăng ký</span></Link>
          </div>
        </div> :
        <div class="RightContainer">
          <button onClick={toggleShow}><BsList className='menu-icon' color='#FF2C86'/></button>
          <Offcanvas show={show} onHide={handleClose} {...setting}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            {!window.localStorage.getItem('isAuthenticated') ? 
            <ul style={{listStyle: 'none'}}>
              <li><Link to="/login"><button className='btn btn-send' style={{width: '100%'}}>Đăng nhập</button></Link></li>
              <li className='pt-3'><Link to="/register"><button className='btn btn-send' style={{width: '100%'}}>Đăng ký</button></Link></li>
            </ul>: 
            <ul style={{listStyle: 'none'}}>
              <li><Link to="/account"><button className='btn btn-send' style={{width: '100%'}}>Xem hồ sơ</button></Link></li>
              <li className='pt-3'><Link to="/cart"><button className='btn btn-send' style={{width: '100%'}}>Xem giỏ hàng</button></Link></li>
              <li className='pt-3'><Link to="/"
                      onClick={() => {
                        axios
                          .get(
                            `https://fitnessmall.herokuapp.com/api/user_signout/${sessionStorage.getItem("sessionID")}`
                          )
                          .then((res) => {
                            if (res.data === "Sign Out Successfully") {
                              window.localStorage.removeItem('isAuthenticated');
                              window.localStorage.removeItem('sessionID');
                              window.localStorage.removeItem("pwd");
                              history.push("/");
                            }

                          })
                          .catch((err) => {
                            alert(err);
                          });
                      }}
                    ><button className='btn btn-send' style={{width: '100%'}}>Đăng xuất</button></Link></li>
            </ul>}
            </Offcanvas.Body>
          </Offcanvas>
          <div class="Userstyle_Item">
            <Popover
              content={
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Link to="/account" style={{ color: "var(--primary)", marginBottom: "5px", textDecoration: 'none' }}>Hồ sơ</Link>
                  <Link to="/" style={{ color: "var(--primary)", marginBottom: "5px", textDecoration: 'none' }}
                      onClick={() => {
                        axios
                          .get(
                            `https://fitnessmall.herokuapp.com/api/user_signout/${sessionStorage.getItem("sessionID")}`
                          )
                          .then((res) => {
                            if (res.data === "Sign Out Successfully") {
                              window.localStorage.removeItem('isAuthenticated');
                              window.localStorage.removeItem('sessionID');
                              window.localStorage.removeItem("pwd");
                              history.push("/");
                            }

                          })
                          .catch((err) => {
                            alert(err);
                          });
                      }}
                    >Đăng xuất</Link>
                </div>
              }
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
        }
      </div>
  );
}

export default Header;
