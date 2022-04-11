import '../../styles/HomePage.css'
import IconCTAButton from './iconCTAbutton';
import React from "react";
function IntroCard(props){
    return (
        <div className="introcard">
            <div className='icon-container'><IconCTAButton/></div>
            <h5 className='name'>{props.name}</h5>
        </div>
    );
}

export default IntroCard;