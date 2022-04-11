import { FaStar } from "react-icons/fa";
import '../../styles/AllProducts.css';
import InputSpinner from "./inputSpinner";
import { CTAButton, GhostButton } from '../Buttons'
import RatingStar from "./ratingstar";
import React from "react";
function Description(props){
    return (
        <div className="description">
            <div className="product-name">{props.name}</div>
            <div class="rating d-flex" style={{gap: '5px'}}>
                <RatingStar/>
                <span class="feedback-num">| 1 đánh giá</span> 
            </div>
            <div className="brief">
            Lựa chọn tuyệt vời cho cho chị em ăn vặt lành mạnh không lo tăng cân. 
            Bánh Ăn Kiêng Nguyên Cám Biscotti là một loại bánh quy thơm ngon, nổi tiếng của Ý, được nướng 2 lần để có thể tạo nên vị giòn tan khi ăn. 
            Trong 1 túi của bánh Biscotti có rất nhiều vị cho Nàng thỏa thích lựa chọn...
            <span class="readmore">Xem thêm</span>
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