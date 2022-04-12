import React from 'react';
import "../../styles/ProductDetail.css"
import {Link} from 'react-router-dom';
import Description from "./description";
import Feedback from "./feedback";
import HotBlogCard from '../Home/hotblogcard';
import { CTAButton } from '../Buttons'

const list = [1, 2, 3];

function ProductDetail(props){
    return (
        <div className="product-detail">
            <div className="topbar">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/" class="backtohome">TRANG CHỦ</Link></li>
                    <li className="breadcrumb-item"><Link to="/products/food" class="backtohome">THỰC PHẨM DINH DƯỠNG</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">{props.name}</li>
                </ol>
            </div>
            <div className="row product-intro mt-4">
                <div className="col-md-6 product-image text-center">
                    <img src="https://cf.shopee.vn/file/91c0b6c345fa06158e89b528b2877589" alt="img"/>
                </div>
                <div className="col-md-6 col-xs-12">
                    <Description name={props.name}/>
                </div>
            </div>
            <div class='divider mt-5'></div>
            <div className="row more-info mt-3">
                <div className="col-md-6 more-description">
                    <div className="title text-center">MÔ TẢ SẢN PHẨM</div>
                    <div className="content mt-2">
                    Lựa chọn tuyệt vời cho cho chị em ăn vặt lành mạnh không lo tăng cân. 
                    Bánh Ăn Kiêng Nguyên Cám Biscotti là một loại bánh quy thơm ngon, nổi tiếng của Ý, được nướng 2 lần để có thể tạo nên vị giòn tan khi ăn. 
                    Trong 1 túi của bánh Biscotti có rất nhiều vị cho Nàng thỏa thích lựa chọn.
                    </div>
                </div>
                <div className="col-md-6 feedbacklist text-center">
                    <div className="title text-center">ĐÁNH GIÁ (1)</div>
                    <div className="mt-2">
                        <Feedback username='hbngo21' timestamp='2022-02-28 12:03' content='Sản phẩm siêu tốt!'/>
                    </div>
                    <div className="action d-flex justify-content-center">
                        <CTAButton value="Thêm đánh giá"/>
                    </div>
                </div>
            </div>
            <div class='divider mt-5'></div>
            <div class='related-blog mt-3'>
                <div className="title">BLOG LIÊN QUAN</div>
                <div className="row listblog mt-3 d-flex justify-content-center">
                    {list.map((i) => {
                        return (
                            <div className="col-4">
                                <HotBlogCard img='https://www.wheystore.vn/upload/news_optimize/wst_1602494019_workout_la_gi__tam_quan_trong_cua_workout_trong_the_hinh_image_1602494019_1.jpg' tags='FITNESS' title='5 WORKOUTS YOU CAN DO ALMOST EVERYWHERE'/>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div class='divider mt-5'></div>
            <div class='related-product mt-3'>
                <div className="title">SẢN PHẨM TƯƠNG TỰ</div>
            </div>
        </div>
    );
}

export default ProductDetail;