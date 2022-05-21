import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link,Redirect} from 'react-router-dom';
import {Footer, Header,Sidebar,CTAButton,DropdownButton,GhostButton} from '../components';
import BarChart from '../components/BarChart/index'
import '../styles/HealthInfo.css'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import { DatePicker, Space,Progress,Row,Col } from 'antd';
import 'antd/dist/antd.css';
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
export default function HealthInfo(){
    const [open,setOpen]=useState(false)
    const [height,setHeight]=useState("")
    const [weight,setWeight]=useState("")
    const [username,setUsername]=useState("")
    const [open1,setOpen1]=useState(false)
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
    const [type,setType]=useState('')
    useEffect(()=>{
      axios.get(`https://fitnessmall.herokuapp.com/api/user_session/${localStorage.sessionID}`)
          .then((res) => {
            setUsername(res.data.username);
            axios.get(`https://fitnessmall.herokuapp.com/api/user/${res.data.username}`,{username:res.data.username})
          .then((res) => {
            // console.log(res.data)
             setHeight(res.data.height)
             setWeight(res.data.weight)
          })
          .catch((err) => {
          alert(err);
          });
          })
          .catch((err) => {
          alert(err);
          });
      
    },[])
    // const [part, setPart] = useState('');
    // function onChange(value, dateString) {
    //     console.log('Selected Time: ', value);
    //     console.log('Formatted Selected Time: ', dateString);
    // }
    // function onOk(value) {
    //     console.log('onOk: ', value);
    // }
    // const handlePart = (event) => {
    //   setPart(event.target.value);
    // };
    // const [day, setDay] = useState('');
    // const handleDay = (event) => {
    //   setDay(event.target.value);
    // };
    // const [value, setValue] = useState(new Date('2018-01-01T00:00:00.000Z'));
   return(
       <>
       <Header/>
       <div style={{backgroundColor:"white", paddingRight: "15px",marginRight: "auto",marginLeft: "auto"}}>
       <div style={{display: "flex",width: "100%",marginRight: "20px",flexWrap: "wrap"}}>
        <Sidebar nameActive="2"/>
        <div style={{height:(open==true?"900px":"700px"),flex: "1 1 0%",marginTop:"17px",marginLeft:"15px",flexWrap: "nowrap",justifyContent: "space-between",padding: "20px 40px 20px 40px",backgroundColor: "rgb(255, 255, 255)"}}>
          <p>Theo dõi sức khỏe</p>
          <div className="gridBox">
              <div className="healthBox">
                <p className="leftBox">
                    <img src="https://img.icons8.com/ios-filled/2x/ffffff/height.png" />
                    <span className="topRBox">Chiều cao</span>
                </p>
                <p className="rightBox">
                    <span style={{color: "var(--lightprimary)"}}>
                        <input type="text" style={{width: "30px"}} onChange={(e)=>setHeight(e.target.value)} value={height}/>cm</span>
                </p>
              </div>
              <div className="healthBox">
                <p className="leftBox">
                    <img src="https://img.icons8.com/ios-filled/2x/ffffff/weight-kg.png" />
                    <span className="topRBox">Cân nặng</span>
                </p>
                <p className="rightBox">
                    <span style={{color: "var(--lightprimary)"}}>
                        <input type="text" value={weight} onChange={(e)=>setWeight(e.target.value)} style={{width: "25px"}}/>kg</span>
                </p>
              </div>
              
          </div>
          <div style={{height:"5rem",marginTop:'10px'}}>
           <p style={{marginBottom:"10px"}}>Theo dõi luyện tập</p>
           <div style={{display:"flex"}}>
           <GhostButton style={{marginBottom:"20px",display:"flex"}} value="Liên kết gg fit" onClick={()=>{
             setOpen(!open)
            //  axios
            //  .get(
            //    "https://fitnessmall.herokuapp.com/api/google_fit"
            //  )
            //  .then((res) => {
            //    window.open(res.data,'','popup')
            //   //  localStorage.setItem('isAuthenticated',true)
            //   //  setTimeout(() => {
            //   //   history.push("/")
            //   // }, 8900);
            //  })
            //  .catch((err) => {
            //    alert(err);
            //  });
             axios
             .get(
               `https://fitnessmall.herokuapp.com/api/google_fit/data/${username}`
             )
             .then((res) => {
              //  res.data.onSnapshot((ele)=>console.log(ele.data()));
             })
             .catch((err) => {
               alert(err);
             });
          }} ></GhostButton>
          <CTAButton value="Lưu thay đổi" style={{marginLeft:"30px",
                width:"120px",height:"45px"}} onClick={()=>{axios
                   .put(
                     `https://fitnessmall.herokuapp.com/api/user/${username}/update`,{username:username,height:height,weight:weight}
                   )
                   .then((res) => {
                     setType("success")
                     console.log(res.data)
                   })
                   .catch((err) => {
                    setType("error")
                     alert(err);
                   });setOpen1(true)}
                   }/>
           </div>
           <CustomizedSnackbars type={type} open={open1} handleClose={()=>setOpen1(false)}/>
          <div id="chart" style={{visibility:(open==true?"visible":"hidden")}}>
          <Row justify="center">
            <Col span={8}><Progress type="circle" percent={75} strokeColor="#0cdbf0" />
            <p style={{margin:"10px 0 0 25px",fontSize:"15px"}}>Số bước</p>
            </Col>
            <Col span={8}><Progress type="circle" percent={75} strokeColor="#37f00c" />
            <p style={{margin:"10px 0 0 40px",fontSize:"15px"}}>Calo</p>
            </Col>
            <Col span={8}><Progress type="circle" percent={75} strokeColor="#ef4336" />
            <p style={{margin:"10px 0 0 10px",fontSize:"15px"}}>Khoảng cách di chuyển</p>
            </Col>
          </Row>
          <BarChart/></div>
          </div>
          <div>
           {/* <p>Thêm lộ trình tập</p> */}
           {/* <div style={{display:"flex"}}> */}
                {/* <DropdownButton style={{fontSize:"18px"}} value={["Tay","Chan","Co"]}/>
                <div style={{marginTop:"20px",marginLeft:"30px",marginRight:"30px"}}>
                <Space direction="vertical" size={12} style={{color:"var(--lightprimary)"}}>
                <DatePicker id="date" showTime onChange={onChange} onOk={onOk} style={{color:"var(--lightprimary)",fontSize:"18px",borderRadius: "12px",display:"flex",backgroundColor:"var(--surface)",border: "solid 1px var(--lightprimary)",padding:"10px"}}/>
                </Space>
                </div>
                <DropdownButton style={{fontSize:"18px"}} value={["1 ngay","2 ngay","1 tuan"]}/> */}
                
                
           {/* </div> */}
          </div>
        </div>
       </div>
       </div>
       <Footer/>
       </>
   )
}