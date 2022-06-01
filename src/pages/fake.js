import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
export default function Fake({match}){
    const history=useHistory();
    const data=match.params
    useEffect(()=>{
        window.localStorage.setItem('sessionID',data.data)
        window.localStorage.setItem('isAuthenticated',true)
        window.close();
    })
    return (
        <></>
    )
}