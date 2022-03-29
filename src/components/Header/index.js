import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import '../../styles/Header.css'
import { Link,Redirect} from 'react-router-dom';
import logo_fitness from '../../assets/logo/fitness_logo.png'
import {CTAButton} from '../'
import { useDispatch, useSelector } from 'react-redux';
function hello(){ console.log('Hello')}
function Header(props) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <div class="Container">
      <div class="Middle_Wrap">
        <div class="LeftContainer">
          <div class="logo-menu">
            <div class="style_Logo">
              <a href="/" class="logo">
                <img style={{width:"100%",height:"100%",borderStyle:"none"}}
                 src={logo_fitness}/>  
              </a>
            </div>
          </div>
          <div class="FormSearch" style={{flex: "1 1 0%"}}>
            <div class="FormSearch_Form">  
              <input type="text" placeholder="Search accessories you want.." class="FormSearch_Input"/>
              <CTAButton value="Search"/>
            </div> 
          </div>
        </div>
        <div class="RightContainer">
          <div class="Userstyle_Item">
            {/* <Link to={isAuthenticated?"/account":"/"}> */}
            <img class="profile-icon" src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"/>
            <span class="Userstyle_ItemText">
              <span class="account-label">
                <span style={{fontSize:"16px"}}>Account</span>
                </span>
            </span>
            {/* </Link> */}
          </div>
          <div class="Userstyle_Item">
            <img class="profile-icon" src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"/>
            <span class="Userstyle_ItemText">
              <span class="account-label">
                <span style={{fontSize:"16px"}}>Cart</span>
                </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
