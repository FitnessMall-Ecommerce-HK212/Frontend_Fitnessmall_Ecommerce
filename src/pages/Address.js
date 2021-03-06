import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link,Redirect} from 'react-router-dom';
import {Footer, Header,Sidebar,GhostButton} from '../components';
import axios from "axios";
import '../styles/Login_Register.css'
import {Modal,Popover} from 'antd';
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { BASE_URL } from '../config/host';
const Input= {
  width: "380px",
  height: "48px",
  borderRadius: "15px",
  marginBottom: "12px",
  marginTop:"10px",
  outline: "none",
  padding: "16px 12px",
  border:"1px solid #979CA3",
  boxShadow:"4px 4px 1px rgba(36,37,94,0.1) ",
  color:"var(--lightprimary)",
  placeholder: {
    color: "var(--lightprimary)",
    opacity: "1",
}
}
export default function Address(){
  const [address,setAddress]=useState('');
  const [username, setUsername]=useState('');
  //for the change a address
  const [curAddress,changeAddress]=useState('');
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  //for the add a new address
  const [newAddress,addAddress]=useState({'address':'','province':'','district':'','ward':'','phone':'','receiver':''});
  const [isModalVisible, setIsModalVisible] = useState(false);
  //check for change to reload the elements
  const [checkChange,setCheck]=useState(false);
  
  //For alert
  const [open,setOpen]=useState(false)
  const [type,setType]=useState('')
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
            {props.type === "success" ? "Successfully" : "Failed, please retry!"}
          </Alert>
        </Snackbar>
      </Stack>
    );
  }
  useEffect(()=>{
    axios.get(`${BASE_URL}api/user_session/${window.localStorage.sessionID}`)
        .then((res) => {
        if (res.data.username!=undefined) {
          setUsername(res.data.username)
        axios.get(`${BASE_URL}api/infos/${res.data.username}`)
        .then((res) => {
           if (res.data!='No Information record found'){
              setAddress(res.data)
              console.log(address)
           }
        })
        .catch((err) => {
        alert(err);
        });
        }
        })
        .catch((err) => {
        alert(err);
        });
    
  },[checkChange])
   return(
    address!=''?
       <>
       <Header/>
       <div style={{backgroundColor:"white", paddingRight: "15px",marginRight: "auto",marginLeft: "auto"}}>
       <div style={{display: "flex",width: "100%",marginRight: "20px",flexWrap: "wrap"}}>
        <Sidebar nameActive="4"/>
        <div style={{flex: "1 1 0%",marginTop:"17px",marginLeft:"15px",flexWrap: "nowrap",justifyContent: "space-between",padding: "20px 40px 20px 40px",backgroundColor: "rgb(255, 255, 255)"}}>
            {
            address.map((item)=>
            <div key={item.id} style={{padding:"15px", borderRadius:"12px",border:"solid 1px var(--primary)",backgroundColor:"var(--lightprimary)",display:"flex",justifyContent: "space-between",marginBottom:"20px"}}>
            <div style={{display:"block"}}>
                <div style={{display:"flex"}}>
                <p style={{display:"flex",marginRight:"20px"}}>Ng?????i nh???n:</p>
                <p style={{display:"flex"}}> {item.receiver}</p>
                </div>
                <div style={{display:"flex"}}>
                <p style={{display:"flex",marginRight:"20px"}}>S??? ??i???n tho???i:</p>
                <p style={{display:"flex"}}> {item.phone}</p>
                </div>
                <p > ?????a ch???: <span style={{marginLeft:"15px"}}>{item.address+'   '+item.ward+' Ph?????ng   '+item.district+' Qu???n   '+item.province+'   T???nh'}</span></p>
            </div>
            <p style={{display:"block"}}>
              <div style={{display:"flex"}}>
              <img src="https://cdn-icons-png.flaticon.com/512/900/900834.png" width="25px" height="25px" style={{display:"flex",cursor:"pointer",marginRight:"10px"}} onClick={()=>{setIsModalVisible1(true);console.log(item);changeAddress(item)}}/>
            <Modal title="Ch???nh ?????a ch???" visible={isModalVisible1} onOk={
              ()=>{setOpen(true);setIsModalVisible1(false);axios.put(`${BASE_URL}api/info/${username}/${curAddress.id}`,curAddress).then((res) =>{setType("success");setCheck(!checkChange);console.log(item);changeAddress({...curAddress,'id':'','address':'','province':'','district':'','ward':'','phone':'','receiver':''})}).catch((err) => {setType("error");alert(err);}
      ); }} onCancel={()=>setIsModalVisible1(false)}>
        <label style={{color:"var(--lightprimary)",marginRight:"45px"}}>T???nh: </label>
        <input type="text" id="inputAll" value={curAddress.province} style={Input} placeholder="S???a t???nh" onChange={(e)=>changeAddress({...curAddress,'province':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"40px"}}>Qu???n: </label>
        <input type="text" id="inputAll" value={curAddress.district} style={Input} placeholder="S???a qu???n" onChange={(e)=>changeAddress({...curAddress,'district':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"25px"}}>Ph?????ng: </label>
        <label style={{color:"var(--lightprimary)",marginRight:"30px"}}>?????a ch???: </label>
        <input type="text" id="inputAll" value={curAddress.address} style={Input} placeholder="S???a ?????a ch???" onChange={(e)=>changeAddress({...curAddress,'address':e.target.value})}></input>
                <input type="text" id="inputAll" value={curAddress.ward} style={Input} placeholder="S???a ph?????ng" onChange={(e)=>changeAddress({...curAddress,'ward':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"15px"}}>??i???n tho???i: </label>
        <input type="text" id="inputAll" value={curAddress.phone} style={Input} placeholder="S???a ??i???n tho???i" onChange={(e)=>changeAddress({...curAddress,'phone':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"10px"}}>Ng?????i nh???n: </label>
        <input type="text" id="inputAll" value={curAddress.receiver} style={Input} placeholder="S???a ng?????i nh???n" onChange={(e)=>changeAddress({...curAddress,'receiver':e.target.value})}></input>
        </Modal>
              <img src="https://img.icons8.com/plasticine/344/filled-trash.png" width="28px" height="30px" style={{display:"flex",cursor:"pointer"}} onClick={()=>{ setOpen(true);axios.delete(`${BASE_URL}api/info/${username}/${item.id}`)
        .then((res) => {
          setType("success");
          setCheck(!checkChange);
           console.log(res.data)
        })
        .catch((err) => {
          setType("error");
        alert(err);
        });}}/>
              </div>
            </p>
          </div>
            )}
            <Modal title="Th??m ?????a ch???" visible={isModalVisible} onOk={
              ()=>{setOpen(true);setIsModalVisible(false);axios.post(`${BASE_URL}api/info/${username}`,newAddress).then((res) =>{setType("success");setCheck(!checkChange);addAddress({...newAddress,'address':'','province':'','district':'','ward':'','phone':'','receiver':''})}).catch((err) => {alert(err);setType("error")}
      ); }} onCancel={()=>setIsModalVisible(false)}>
        <label style={{color:"var(--lightprimary)",marginRight:"45px"}}>T???nh: </label>
        <input type="text" id="inputAll" value={newAddress.province} style={Input} placeholder="??i???n t???nh" onChange={(e)=>addAddress({...newAddress,'province':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"40px"}}>Qu???n: </label>
        <input type="text" id="inputAll" value={newAddress.district} style={Input} placeholder="??i???n qu???n" onChange={(e)=>addAddress({...newAddress,'district':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"30px"}}>Ph?????ng: </label>
        <input type="text" id="inputAll" value={newAddress.ward} style={Input} placeholder="??i???n ph?????ng" onChange={(e)=>addAddress({...newAddress,'ward':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"35px"}}>?????a ch???: </label>
        <input type="text" id="inputAll" value={newAddress.address} style={Input} placeholder="??i???n ?????a ch???" onChange={(e)=>addAddress({...newAddress,'address':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"60px"}}>S??t: </label>
        <input type="text" id="inputAll" value={newAddress.phone} style={Input} placeholder="??i???n s??? ??i???n tho???i" onChange={(e)=>addAddress({...newAddress,'phone':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"10px"}}>Ng?????i nh???n: </label>
        <input type="text" id="inputAll" value={newAddress.receiver} style={Input} placeholder="??i???n ng?????i nh???n" onChange={(e)=>addAddress({...newAddress,'receiver':e.target.value})}></input>
        </Modal>
          <div style={{alignItems: "center",justifyContent: "center",margin:"0 auto",display: "flex"}}>
          <GhostButton value="Th??m ?????a ch???" onClick={()=>setIsModalVisible(true)}/>
          </div>
          <CustomizedSnackbars type={type} open={open} handleClose={()=>setOpen(false)}/>
        </div>
       </div>
       </div>
       <Footer/>
       </>:<div></div>
   )
}