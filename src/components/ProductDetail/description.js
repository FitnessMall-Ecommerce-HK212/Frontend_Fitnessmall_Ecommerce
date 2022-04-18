import { NavLink } from 'react-router-dom'
import '../../styles/ProductDetail.css';
import InputSpinner from 'react-bootstrap-input-spinner'  
import { CTAButton, GhostButton } from '../Buttons'
import RatingStar from "./ratingstar";
import { useState } from 'react';

function Description(props){
    const [active, setActive] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const onClick = () => setShowResult(!showResult)
    const Info = (props) => {
        return (
            <div>
                {props.des.slice(0, 200)}
                <button class="readmore" onClick={onClick}>...Xem thêm</button>
            </div>
        )
    }
    const LessInfo = (props) => {
        return (
            <div>
                {props.des}
                <button class="readmore" onClick={onClick}>...Thu gọn</button>
            </div>
        )
    }
    return (
        <div className="description">
            <div className="product-name">{props.name}</div>
            <div class="rating d-flex" style={{gap: '5px'}}>
                <RatingStar/>
                <span class="feedback-num">| {props.numOfFeedbacks} đánh giá</span> 
            </div>
            <div className="brief">
            {showResult ? <LessInfo des={props.des}/>: <Info des={props.des}/>}
            </div>
            <div className="row category">
                <div className="col-2">Phân loại:</div>
                <div className="col-4 d-flex justify-content-center">
                    {props.category.map((e) => {
                        return (
                            <button type='button' className={props.category[active] === e ? "btn btn-option ms-5 clicked": "btn btn-option ms-5"} onClick={()=>setActive(props.category.indexOf(e))}>{e.cat}</button>
                        );
                    })}
                </div>
            </div>
            <div className="row price mt-3">
                <div className="col-2">Giá:</div> 
                <div className="col-4 action text-center">{props.category[active].price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
            </div>
            <div className="row numberToOrder mt-3">
                <div className="col-2">Số lượng:</div> 
                <div className="col-4 input-spinner">
                    <InputSpinner
                        type={'int'}
                        max={props.category[active].quantity}
                        min={1}
                        step={1}
                        value={1}
                        onChange={num=>console.log(num)}
                        size="sm"
                    />
                </div>
                <div className="col-6 feedback-num">{props.category[active].quantity} sản phẩm có sẵn</div>
            </div>
            <div className="row d-flex mt-5">
                <div className="col-2"></div> 
                <div className="col-10 action d-flex">
                    <GhostButton value="Thêm vào giỏ hàng"/>
                    <CTAButton value="Mua ngay" className="after"/>
                </div>
            </div>
        </div>
    );
}

export default Description;