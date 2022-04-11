import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link,Redirect} from 'react-router-dom';
import {Footer, Header,Sidebar,GhostButton} from '../components';
export default function Address(){
    
   return(
       <>
       <Header/>
       <div style={{backgroundColor:"white", paddingRight: "15px",marginRight: "auto",marginLeft: "auto"}}>
       <div style={{display: "flex",width: "100%",marginRight: "20px",flexWrap: "wrap"}}>
        <Sidebar nameActive="4"/>
        <div style={{flex: "1 1 0%",marginTop:"17px",marginLeft:"15px",flexWrap: "nowrap",justifyContent: "space-between",padding: "20px 40px 20px 40px",backgroundColor: "rgb(255, 255, 255)"}}>
          <div style={{padding:"15px", borderRadius:"12px",border:"solid 1px var(--primary)",backgroundColor:"var(--lightprimary)",display:"flex",justifyContent: "space-between",marginBottom:"20px"}}>
            <div style={{display:"block"}}>
                <div style={{display:"flex"}}>
                <p style={{display:"flex",marginRight:"20px"}}> Võ Hồng Phúc</p>
                <p style={{display:"flex"}}> 058548595</p>
                </div>
                <p > Nhà khách: <span style={{marginLeft:"15px"}}>Đại Học Bách Khoa TPHCM</span></p>
            </div>
            <p style={{display:"block"}}>
                <img src="https://cdn-icons.flaticon.com/png/512/439/premium/439342.png?token=exp=1649641783~hmac=e1effe332fa5e097956bf114706ce635" width="25px" height="25px" style={{cursor:"pointer"}}/>
            </p>
          </div>
          <div style={{alignItems: "center",justifyContent: "center",margin:"0 auto",display: "flex"}}>
          <GhostButton value="Thêm địa chỉ"/>
          </div>
        </div>
       </div>
       </div>
       <Footer/>
       </>
   )
}