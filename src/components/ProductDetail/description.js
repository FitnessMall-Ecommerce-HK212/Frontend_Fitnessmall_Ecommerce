import { FaStar } from "react-icons/fa";
import '../../styles/AllProducts.css';
import InputSpinner from "./inputSpinner";
import { CTAButton, GhostButton } from '../Buttons'
import RatingStar from "./ratingstar";

function Description(props){
    return (
        <div className="description">
            <div className="product-name">{props.name}</div>
            <div class="rating d-flex" style={{gap: '5px'}}>
                <RatingStar/>
                <span class="feedback-num">| {props.numOfFeedbacks} đánh giá</span> 
            </div>
            <div className="brief">
            {props.des}
            <span class="readmore">...Xem thêm</span>
            </div>
            <div className="row category">
                <div className="col-2">Phân loại:</div>
                <div className="col-4 text-center">
                    <button className="btn btn-option clicked">250g</button>
                    <button className="btn btn-option ms-5">500g</button>
                </div>
            </div>
            <div className="row price mt-3">
                <div className="col-2">Giá:</div> 
                <div className="col-4 action text-center">55.000 đ</div>
            </div>
            <div className="row numberToOrder mt-3">
                <div className="col-2">Số lượng:</div> 
                <div className="col-4">
                    <InputSpinner/>
                </div>
                <div className="col-6 feedback-num">100 sản phẩm có sẵn</div>
            </div>
            <div className="row d-flex mt-4">
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