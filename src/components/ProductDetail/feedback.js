import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import RatingStar from './ratingstar';

function Feedback(props){
    return (
        <div className="row feedback align-items-center">
            <div className="col-1">
                <BsPersonCircle size='24'/>
            </div>
            <div className='col-2'>
                {props.username}
            </div>
            <div className='col-2 ratingstar'>
                <RatingStar/>
            </div>
            <div className='col-7 feedback-num'>
                {props.timestamp}
            </div>
            <div class='col-auto'>
                <input class='form-control content ms-5 mt-2' style={{width: '520px'}} type='text' value={props.content} aria-label='Disabled input example' disabled readonly/>
            </div>
        </div>
    );
}

export default Feedback;