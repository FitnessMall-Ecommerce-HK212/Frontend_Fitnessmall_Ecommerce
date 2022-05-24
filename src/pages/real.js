import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Real({match}){
    const history=useHistory();
    const data=match.params;
    useEffect(()=>{
        console.log(JSON.parse(data.data));
        console.log(window.localStorage.getItem('sessionID'));
        axios
             .get(
               `https://fitnessmall.herokuapp.com/api/user_session/${window.localStorage.getItem('sessionID').toString()}`,
             )
             .then((res) => {
              
                console.log(res.data)
                axios
                .post(
                  `https://fitnessmall.herokuapp.com/api/google_fit_create`,
                  {username: res.data.username,data:JSON.parse(data.data)}
                )
                .then((res) => {
                   
        //  window.close();
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