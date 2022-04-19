import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
export default function Fake({match}){
    const history=useHistory();
    const data=match.params
    useEffect(()=>{
        setTimeout(() => {
            window.localStorage.setItem('sessionID',data.data)
          }, 1000);
        window.close();
        
    })
    return (
        <></>
    )
}