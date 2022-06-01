import { BsPersonCircle } from 'react-icons/bs';
import RatingStar from './ratingstar';
import React from "react";
function Feedback(props){
    return (
        <div className="row feedback align-items-center">
            <div className="col-1">
                <BsPersonCircle size='24'/>
            </div>
            <div className='col-4'>
                {props.username}
            </div>
            <div className='col-3 ratingstar'>
                <RatingStar point={props.point}/>
            </div>
            <div className='col-4 feedback-num'>
                {props.timestamp}
            </div>
            <div className="col-1">
            </div>
            <div class='col-11'>
                <input class='form-control content mt-2' style={{width: '100%'}} type='text' value={props.content} aria-label='Disabled input example' disabled readonly/>
            </div>
        </div>
    );
}

export default Feedback;