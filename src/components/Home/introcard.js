import React from 'react';
import '../../styles/HomePage.css'
import IconCTAButton from './iconCTAbutton';
function IntroCard(props){
    return (
        <div className="introcard">
            <div className='icon-container'><IconCTAButton/></div>
            <h5 className='name'>{props.name}</h5>
        </div>
    );
}

export default IntroCard;