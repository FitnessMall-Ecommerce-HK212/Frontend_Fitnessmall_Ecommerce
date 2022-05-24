import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
export default function Fake({match}){
    const history=useHistory();
    const data=match.params
    useEffect(()=>{
        window.localStorage.setItem('sessionID',data.data)
        window.localStorage.setItem('isAuthenticated',true)
        // setTimeout(() => {
        //     window.close();
        //   }, 1000);
    })
    return (
        <></>
    )
}