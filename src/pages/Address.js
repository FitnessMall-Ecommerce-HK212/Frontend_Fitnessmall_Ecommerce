import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link,Redirect} from 'react-router-dom';
import {Footer, Header,Sidebar,GhostButton} from '../components';
import axios from "axios";
import '../styles/Login_Register.css'
import {Modal,Popover} from 'antd';
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
  useEffect(()=>{
    axios.get(`http://localhost:8080/api/user_session/${localStorage.sessionID}`)
        .then((res) => {
        if (res.data.username!=undefined) {
          setUsername(res.data.username)
        axios.get(`http://127.0.0.1:8080/api/infos/${res.data.username}`)
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
                <p style={{display:"flex",marginRight:"20px"}}>Người nhận:</p>
                <p style={{display:"flex"}}> {item.receiver}</p>
                </div>
                <div style={{display:"flex"}}>
                <p style={{display:"flex",marginRight:"20px"}}>Số điện thoại:</p>
                <p style={{display:"flex"}}> {item.phone}</p>
                </div>
                <p > Địa chỉ: <span style={{marginLeft:"15px"}}>{item.address+'   '+item.ward+' Phường   '+item.district+' Quận   '+item.province+'   Tỉnh'}</span></p>
            </div>
            <p style={{display:"block"}}>
              <div style={{display:"flex"}}>
              <img src="https://cdn-icons-png.flaticon.com/512/900/900834.png" width="25px" height="25px" style={{display:"flex",cursor:"pointer",marginRight:"10px"}} onClick={()=>{setIsModalVisible1(true);console.log(item);changeAddress(item)}}/>
            <Modal title="Chỉnh địa chỉ" visible={isModalVisible1} onOk={
              ()=>{setIsModalVisible1(false);axios.put(`http://localhost:8080/api/info/${username}/${curAddress.id}`,curAddress).then((res) =>{setCheck(!checkChange);console.log(item);changeAddress({...curAddress,'id':'','address':'','province':'','district':'','ward':'','phone':'','receiver':''})}).catch((err) => alert(err)
      ); }} onCancel={()=>setIsModalVisible1(false)}>
        <label style={{color:"var(--lightprimary)",marginRight:"30px"}}>Địa chỉ: </label>
        <input type="text" id="inputAll" value={curAddress.address} style={Input} placeholder="Sửa địa chỉ" onChange={(e)=>changeAddress({...curAddress,'address':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"45px"}}>Tỉnh: </label>
        <input type="text" id="inputAll" value={curAddress.province} style={Input} placeholder="Sửa tỉnh" onChange={(e)=>changeAddress({...curAddress,'province':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"40px"}}>Quận: </label>
        <input type="text" id="inputAll" value={curAddress.district} style={Input} placeholder="Sửa quận" onChange={(e)=>changeAddress({...curAddress,'district':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"25px"}}>Phường: </label>
        <input type="text" id="inputAll" value={curAddress.ward} style={Input} placeholder="Sửa phường" onChange={(e)=>changeAddress({...curAddress,'ward':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"15px"}}>Điện thoại: </label>
        <input type="text" id="inputAll" value={curAddress.phone} style={Input} placeholder="Sửa điện thoại" onChange={(e)=>changeAddress({...curAddress,'phone':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"10px"}}>Người nhận: </label>
        <input type="text" id="inputAll" value={curAddress.receiver} style={Input} placeholder="Sửa người nhận" onChange={(e)=>changeAddress({...curAddress,'receiver':e.target.value})}></input>
        </Modal>
              <img src="https://img.icons8.com/plasticine/344/filled-trash.png" width="28px" height="30px" style={{display:"flex",cursor:"pointer"}} onClick={()=>{ axios.delete(`http://127.0.0.1:8080/api/info/${username}/${item.id}`)
        .then((res) => {
          setCheck(!checkChange);
           console.log(res.data)
        })
        .catch((err) => {
        alert(err);
        });}}/>
              </div>
            </p>
          </div>
            )}
            <Modal title="Thêm địa chỉ" visible={isModalVisible} onOk={
              ()=>{setIsModalVisible(false);axios.post(`http://localhost:8080/api/info/${username}`,newAddress).then((res) =>{setCheck(!checkChange);addAddress({...newAddress,'address':'','province':'','district':'','ward':'','phone':'','receiver':''})}).catch((err) => alert(err)
      ); }} onCancel={()=>setIsModalVisible(false)}>
        <label style={{color:"var(--lightprimary)",marginRight:"35px"}}>Địa chỉ: </label>
        <input type="text" id="inputAll" value={newAddress.address} style={Input} placeholder="Điền địa chỉ" onChange={(e)=>addAddress({...newAddress,'address':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"45px"}}>Tỉnh: </label>
        <input type="text" id="inputAll" value={newAddress.province} style={Input} placeholder="Điền tỉnh" onChange={(e)=>addAddress({...newAddress,'province':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"40px"}}>Quận: </label>
        <input type="text" id="inputAll" value={newAddress.district} style={Input} placeholder="Điền quận" onChange={(e)=>addAddress({...newAddress,'district':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"30px"}}>Phường: </label>
        <input type="text" id="inputAll" value={newAddress.ward} style={Input} placeholder="Điền phường" onChange={(e)=>addAddress({...newAddress,'ward':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"60px"}}>Sđt: </label>
        <input type="text" id="inputAll" value={newAddress.phone} style={Input} placeholder="Điền số điện thoại" onChange={(e)=>addAddress({...newAddress,'phone':e.target.value})}></input>
        <label style={{color:"var(--lightprimary)",marginRight:"10px"}}>Người nhận: </label>
        <input type="text" id="inputAll" value={newAddress.receiver} style={Input} placeholder="Điền người nhận" onChange={(e)=>addAddress({...newAddress,'receiver':e.target.value})}></input>
        </Modal>
          <div style={{alignItems: "center",justifyContent: "center",margin:"0 auto",display: "flex"}}>
          <GhostButton value="Thêm địa chỉ" onClick={()=>setIsModalVisible(true)}/>
          </div>
        </div>
       </div>
       </div>
       <Footer/>
       </>:<div></div>
   )
}