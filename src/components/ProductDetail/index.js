import "../../styles/ProductDetail.css"
import { Link, useParams } from 'react-router-dom';
import Description from "./description";
import Feedback from "./feedback";
import HotBlogCard from '../Home/hotblogcard';
import { CTAButton, GhostButton } from '../Buttons'
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { BsPersonCircle } from 'react-icons/bs';
import { FaStar, FaRegStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
const BASE_URL = "http://localhost:8080";

const list = [1, 2, 3];

function ProductDetail() {
    const { type, code } = useParams();
    const [productInfo, setProductInfo] = useState([]);
    const [username, setUsername] = useState("");
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
        console.log(res)
        setProductInfo(res.data);
    }
    const getUsername = async () => {
        const res = await axios.get(BASE_URL + "/api/user_session/" + sessionStorage.sessionID);
        setUsername(res.data.username);
    }
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    useEffect(() => {
        if (sessionStorage.length !== 0)
            getUsername();
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
                        <Description name={productInfo.name} des={productInfo.description} point={productInfo.point} numOfFeedbacks={productInfo.feedback.length} itemtype={productInfo.itemtype} image={productInfo.image} id={productInfo.id} />
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
                                    <div className="mt-3">
                                        <Feedback username={fb.username} timestamp={fb.date} content={fb.content} point={fb.point} />
                                    </div>
                                );
                            })}
                            <div className="mt-3">
                                {sessionStorage.length === 0 && <div style={{ color: '#B3BDC8' }}>Vui lòng <Link to="/login"><span style={{ color: '#FF2C86', fontWeight: '500' }}>đăng nhập</span></Link> để đánh giá sản phẩm!</div>}
                                {sessionStorage.length !== 0 &&
                                    <div>
                                        <div className="row feedback align-items-center mb-3">
                                            <div className="col-1">
                                                <BsPersonCircle size='24' />
                                            </div>
                                            <div className='col-2'>
                                                {username}
                                            </div>
                                            <div className='col-9 d-flex justify-content-center'>
                                                <ReactStars
                                                    rating={3}
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={24}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                            <div class='col-12'>
                                                <textarea class="form-control ms-5 mt-2" style={{ width: '520px' }} id="feedback" rows="2" placeholder="Vui lòng chọn sao và điền nội dung đánh giá"></textarea>
                                            </div>
                                            <div class='col-12 d-flex justify-content-center mt-4'>
                                                <CTAButton style={{ width: 'fit-content', padding: '0 10px' }} value="Gửi đánh giá" onClick={() => { }} />
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
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