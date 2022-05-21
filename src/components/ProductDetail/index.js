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
import { FiSend } from "react-icons/fi";
import ProductCard from '../All_Products/productcard'
import StarRating from "./starRating";
const BASE_URL = "https://fitnessmall.herokuapp.com";

function ProductDetail() {
    const { type, code } = useParams();
    const [productInfo, setProductInfo] = useState([]);
    const [hotBlogs, setHotBlogs] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([])
    const [username, setUsername] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    const [checkFB, setCheckFB] = useState(false);
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
    const getHotBlogs = async () => {
        const res = await axios.get(BASE_URL + '/api/blogs');
        console.log(res.data.blogList);
        setHotBlogs(res.data.blogList);
    }
    const getRelatedProducts = async () => {
        if (type === 'food') {
            const res = await axios.get(BASE_URL + '/api/foods/hot');
            setRelatedProducts(res.data.hotFoods.slice(0, 4));
        }
        else if (type === 'equipment') {
            const res = await axios.get(BASE_URL + '/api/items/hot');
            setRelatedProducts(res.data.hotItems.slice(0, 4));
        }
    }

    const getUsername = async () => {
        const res = await axios.get(BASE_URL + "/api/user_session/" + localStorage.sessionID);
        setUsername(res.data.username);
    }
    const getDate = () => {
        var today = new Date();
        var date = today.toJSON().slice(0, 10);
        var nDate = date.slice(8, 10) + '/'
            + date.slice(5, 7) + '/'
            + date.slice(0, 4);
        setDate(nDate);
    }
    const handleSubmit = () => {
        axios.post(BASE_URL + "/api/food/feedback/", {
            username: username,
            content: content,
            date: date,
            point: 4,
            food_id: productInfo.id
        })
        setCheckFB(!checkFB);
        setContent("");
    }
    const handleChangeForm = (event) => {
        setContent(event.target.value);
    }
    useEffect(() => {
        if ("sessionID" in localStorage)
            getUsername();
        getDate();
        getProductInfo();
        getRelatedProducts();
        getHotBlogs();
    }, [checkFB]);

    if (productInfo.length === 0 || relatedProducts.length === 0 || hotBlogs.length === 0 || ("sessionID" in localStorage && username === "")) {
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
                        {console.log(productInfo)}
                        <Description name={productInfo.name} des={productInfo.description} point={productInfo.point} numOfFeedbacks={productInfo.feedback.length} itemtype={productInfo.itemtype} image={productInfo.image} id={productInfo.code} />
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
                                {!("sessionID" in localStorage) && <div style={{ color: '#B3BDC8' }}>Vui lòng <Link to="/login"><span style={{ color: '#FF2C86', fontWeight: '500' }}>đăng nhập</span></Link> để đánh giá sản phẩm!</div>}
                                {("sessionID" in localStorage) &&
                                    <div className="row feedback align-items-center mb-3">
                                        <div className="col-1">
                                            <BsPersonCircle size='24' />
                                        </div>
                                        <div className='col-2'>
                                            {username}
                                        </div>
                                        <div className='col-3 d-flex justify-content-center'>
                                            <StarRating />
                                        </div>
                                        <div className='col-6 feedback-num'>
                                            {date}
                                        </div>
                                        <div class='col-10'>
                                            <textarea class="form-control ms-5 mt-2" style={{ width: '520px' }} value={content} onChange={handleChangeForm} id="feedback" rows="1" placeholder="Vui lòng chọn sao và điền nội dung đánh giá" required></textarea>
                                        </div>
                                        <div class='col-2 mt-2'>
                                            <button type="submit" className="btn btn-send" onClick={handleSubmit}>
                                                Gửi
                                                <FiSend />
                                            </button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div class='divider mt-5'></div>
                <div class='related-product mt-3'>
                    <div className="title">SẢN PHẨM TƯƠNG TỰ</div>
                    <div className="row listblog mt-3 d-flex justify-content-center">
                        {relatedProducts.map((item) => {
                            return (
                                <div className="col-3">
                                    <ProductCard
                                        img={item.image}
                                        name={item.name}
                                        price={item.itemtype[0].price}
                                        type='food'
                                        code={item.code}
                                        point={item.point}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div class='divider mt-5'></div>
                <div class='related-blog mt-3'>
                    <div className="title">BLOG LIÊN QUAN</div>
                    <div className="row listblog mt-3 d-flex justify-content-center">
                        {hotBlogs.map((blog) => {
                            return (
                                <div className="col-4">
                                    <HotBlogCard id={blog.idBlog} img={blog.image} tags={blog.tags[0]} title={blog.title.toUpperCase()} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;