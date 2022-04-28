import '../../styles/HomePage.css'
import { GrSearch } from "react-icons/gr";
import React from "react";
function IconCTAButton(){
    return (
        <div className="iconCTAbutton">
            <div className='circle-inside'>
                <GrSearch size='24'/>
            </div>
        </div>
    )
}

export default IconCTAButton;