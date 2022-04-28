import React, { useState } from 'react';
import '../../styles/Header.css'
export function CTAButton(e) {
   return (
      <button type="button" className="FormSearch_Button" style={e.style} onClick={() => e.onClick()}>{e.value}
      </button>
   )
}
export function GhostButton(e) {
   return (
      <button className="Ghost_Button" style={e.style} onClick={() => e.onClick()}>{e.value}
      </button>
   )
}

export function DropdownButton(e) {
   return (
      <div>
         <select name="kind" className='dropdown-button' style={e.style} onClick={() => e.onClick()}>
            {e.value.map((item)=>
            <option value={item} >{item}</option>
            )}
            
         </select>
      </div>
   )
}
