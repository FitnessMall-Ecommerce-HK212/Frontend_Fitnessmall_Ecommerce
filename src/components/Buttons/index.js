import React, { useState } from 'react';
import '../../styles/Header.css'
export function CTAButton(e){
   return (
    <button className="FormSearch_Button" onClick={()=>e.onClick()}>{e.value}
    </button>
   )
}
export function GhostButton(e){
    return (
     <button className="Ghost_Button" onClick={()=>e.onClick()}>{e.value}
     </button>
    )
 }
 