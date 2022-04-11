import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link,Redirect} from 'react-router-dom';
import {Footer, Header,Sidebar,CTAButton} from '../components';
import '../styles/HealthInfo.css'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
export default function HealthInfo(){
    const [part, setPart] = useState('');
    function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }
      
      function onOk(value) {
        console.log('onOk: ', value);
      }
    const handlePart = (event) => {
      setPart(event.target.value);
    };
    const [day, setDay] = useState('');
    const handleDay = (event) => {
      setDay(event.target.value);
    };
    const [value, setValue] = useState(new Date('2018-01-01T00:00:00.000Z'));
   return(
       <>
       <Header/>
       <div style={{backgroundColor:"white", paddingRight: "15px",marginRight: "auto",marginLeft: "auto"}}>
       <div style={{display: "flex",width: "100%",marginRight: "20px",flexWrap: "wrap"}}>
        <Sidebar nameActive="2"/>
        <div style={{flex: "1 1 0%",marginTop:"17px",marginLeft:"15px",flexWrap: "nowrap",justifyContent: "space-between",padding: "20px 40px 20px 40px",backgroundColor: "rgb(255, 255, 255)"}}>
          <div className="gridBox">
              <div className="healthBox">
                <p className="leftBox">
                    <img src="https://img.icons8.com/ios-filled/2x/ffffff/height.png" />
                    <span className="topRBox">Height</span>
                </p>
                <p className="rightBox">
                    {/* <span className="topRBox">Height</span> */}
                    <span style={{color: "var(--lightprimary)"}}>
                        <input type="text" value="163"/>cm</span>
                </p>
              </div>
              <div className="healthBox">
                <p className="leftBox">
                    <img src="https://img.icons8.com/ios-filled/2x/ffffff/weight-kg.png" />
                    <span className="topRBox">Weight</span>
                </p>
                <p className="rightBox">
                    {/* <span className="topRBox">Height</span> */}
                    <span style={{color: "var(--lightprimary)"}}>
                        <input type="text" value="54" style={{width: "25px"}}/>kg</span>
                </p>
              </div>
              
          </div>
          <div>
           <p>Theo dõi luyện tập</p>
          </div>
          <div>
           <p>Thêm lộ trình tập</p>
           <div style={{display:"flex"}}>
                <FormControl sx={{ m: 1, minWidth: 120 }} style={{display:"flex",marginRight:"80px"}}>
                          <Select
                            value={part}
                            onChange={handlePart}
                            className="Selected"
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            style={{color:"var(--lightprimary)",borderRadius: "12px",display:"flex"}}
                          >
                            <MenuItem value="" >
                              Tay
                            </MenuItem>
                            <MenuItem value={"Chan"}>Chân</MenuItem>
                            <MenuItem value={"Co"}>Cổ</MenuItem>
                          </Select>
                </FormControl>
                <Space direction="vertical" size={12} style={{color:"var(--lightprimary)"}}>
                <DatePicker showTime onChange={onChange} onOk={onOk} style={{color:"var(--lightprimary)",borderRadius: "12px",display:"flex",backgroundColor:"var(--surface)",border: "solid 1px var(--lightprimary)"}}/>
                </Space>
                <FormControl sx={{ m: 1, minWidth: 120 }} style={{display:"flex",marginRight:"80px"}}>
                          <Select
                            value={day}
                            onChange={handleDay}
                            className="Selected"
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            style={{color:"var(--lightprimary)",borderRadius: "12px",display:"flex"}}
                          >
                            <MenuItem value="" >
                              1 ngay
                            </MenuItem>
                            <MenuItem value={"2days"}>2 ngay</MenuItem>
                            <MenuItem value={"1week"}>1 tuan</MenuItem>
                          </Select>
                </FormControl>
                <div style={{marginTop:"10px"}}> <CTAButton value="Lưu thay đổi"/></div>
                
           </div>
          </div>
        </div>
       </div>
       </div>
       <Footer/>
       </>
   )
}