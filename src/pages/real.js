import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Real({match}){
    const history=useHistory();
    const data=match.params;
    useEffect(()=>{
        console.log(JSON.parse(data.data));
        console.log(localStorage.getItem('sessionID'))
        axios
             .get(
               `http://127.0.0.1:8080/api/user_session/${localStorage.getItem('sessionID').toString()}`,
             )
             .then((res) => {
                 console.log(res.data)
                axios
                .post(
                  `http://127.0.0.1:8080/api/google_fit_create`,
                  {username: res.data.username,data:JSON.parse(data.data)}
                )
                .then((res) => {
                   
         window.close();
                })
                .catch((err) => {
                  alert(err);
                });
             })
             .catch((err) => {
               alert(err);
             });
        
    })
    return (
        <></>
    )
}