import "../../styles/ProductDetail.css"
import { Link, useParams } from 'react-router-dom';
import Description from "./description";
import Feedback from "./feedback";
import HotBlogCard from '../Home/hotblogcard';
import { CTAButton } from '../Buttons'
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
const BASE_URL = "http://localhost:8080";

const list = [1, 2, 3];

function ProductDetail() {
    const { type, code } = useParams();
    const [productInfo, setProductInfo] = useState([]);
    var typename, api;
    if (type === 'food') {
        typename = 'THỰC PHẨM DINH DƯỠNG';
        api = '/api/food/' + code;
    }
    else if (type === 'equipment') {
        typename = 'DỤNG CỤ TẬP LUYỆN';
        api = '/api/item/' + code;
    }
    const getProductInfo = async () => {
        const res = await axios.get(BASE_URL + api);
        console.log(res.data)
        setProductInfo(res.data);
    }
    useEffect(() => {
        getProductInfo();
    }, []);
    if (productInfo.length === 0) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <CircularProgress />
            </div>
        );
    }
    else {
        return (
            <div className="product-detail">
                <div className="topbar">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/" class="backtohome">TRANG CHỦ</Link></li>
                        <li className="breadcrumb-item"><Link to={"/products/" + type} class="backtohome">{typename}</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">{productInfo.name.toUpperCase()}</li>
                    </ol>
                </div>
                <div className="row product-intro mt-4">
                    <div className="col-md-6 product-image text-center">
                        <img src={productInfo.image} alt="img" />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <Description name={productInfo.name} des={productInfo.description.slice(0, 200)} numOfFeedbacks={productInfo.feedback.length} quantity={1} image={productInfo.image} id={code} price={productInfo.price} />
                    </div>
                </div>
                <div class='divider mt-5'></div>
                <div className="row more-info mt-3">
                    <div className="col-md-6 more-description">
                        <div className="title text-center">MÔ TẢ SẢN PHẨM</div>
                        <div className="content mt-2">
                            {productInfo.description}
                        </div>
                    </div>
                    <div className="col-md-6 feedbacklist text-center">
                        <div className="title text-center">ĐÁNH GIÁ ({productInfo.feedback.length})</div>
                        <div className="mt-2">
                            {productInfo.feedback.map((fb) => {
                                return (
                                    <Feedback username={fb.username} timestamp={fb.timestamp} content={fb.content} />
                                );
                            })}
                        </div>
                        <div className="action d-flex justify-content-center">
                            <CTAButton value="Thêm đánh giá" />
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
                                    <HotBlogCard img='https://www.wheystore.vn/upload/news_optimize/wst_1602494019_workout_la_gi__tam_quan_trong_cua_workout_trong_the_hinh_image_1602494019_1.jpg' tags='FITNESS' title='5 WORKOUTS YOU CAN DO ALMOST EVERYWHERE' />
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
}

export default ProductDetail;