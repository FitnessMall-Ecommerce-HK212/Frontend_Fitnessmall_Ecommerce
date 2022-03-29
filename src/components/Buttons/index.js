import React, { useState } from 'react';
import '../../styles/Header.css'
export function CTAButton(e){
   return (
    <button class="FormSearch_Button" onClick={()=>e.onClick()}>{e.value}
    </button>
   )
}
export function GhostButton(e){
    return (
     <button class="Ghost_Button" onClick={()=>e.onClick()}>{e.value}
     </button>
    )
 }