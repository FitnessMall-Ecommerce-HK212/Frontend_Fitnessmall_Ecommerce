import "../../styles/ProductDetail.css"
import { Link, useParams } from 'react-router-dom';
import Description from "./description";
import Feedback from "./feedback";
import HotBlogCard from '../Home/hotblogcard';
import Slider from "react-slick";
import { CTAButton, GhostButton } from '../Buttons'
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { BsPersonCircle } from 'react-icons/bs';
import { FiSend } from "react-icons/fi";
import ProductCard from '../All_Products/productcard'
import StarRating from "./starRating";
import { BASE_URL } from '../../config/host';

function ProductDetail() {
    const { type, code } = useParams();
    const [productInfo, setProductInfo] = useState([]);
    const [hotBlogs, setHotBlogs] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([])
    const [username, setUsername] = useState("");
    const [date, setDate] = useState("");
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState("");
    const [error, setError] = useState("");
    const [checkFB, setCheckFB] = useState(false);
    var typename, api;
    if (type === 'food') {
        typename = 'THỰC PHẨM DINH DƯỠNG';
        api = 'api/food/' + code;
    }
    else if (type === 'equipment') {
        typename = 'DỤNG CỤ TẬP LUYỆN';
        api = 'api/item/' + code;
    }
    const childToParent = (childdata) => {
        setRating(childdata)
    }
    const getProductInfo = async () => {
        const res = await axios.get(BASE_URL + api);
        setProductInfo(res.data);
    }
    const getHotBlogs = async () => {
        const res = await axios.get(BASE_URL + 'api/blogs');
        setHotBlogs(res.data.blogList);
    }
    const getRelatedProducts = async () => {
        if (type === 'food') {
            const res = await axios.get(BASE_URL + 'api/foods/hot');
            setRelatedProducts(res.data.hotFoods.slice(0, 4));
        }
        else if (type === 'equipment') {
            const res = await axios.get(BASE_URL + 'api/items/hot');
            setRelatedProducts(res.data.hotItems.slice(0, 4));
        }
    }
    var setting1 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1350,
            settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
            }
            },
            {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
                dots: true
            }
            },
            {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                centerMode: false,
            }
            }
        ]
    };
    var setting2 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
            breakpoint: 1350,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
                dots: true
            }
            },
            {
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                centerMode: false,
            }
            }
        ]
    };

    const getUsername = async () => {
        const res = await axios.get(BASE_URL + "api/user_session/" + window.localStorage.sessionID);
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
        if (content === "") {
            setError("Bạn chưa điền nội dung đánh giá!")
        }
        else if (rating === 0) {
            setError("Bạn chưa chọn sao!")
        }
        else {
            axios.post(BASE_URL + "api/food/feedback/", {
                username: username,
                content: content,
                date: date,
                point: rating,
                food_id: productInfo.id
            })
            setError("")
        }
        setCheckFB(!checkFB);
        setContent("");
    }
    const handleChangeForm = (event) => {
        setContent(event.target.value);
    }
    useEffect(() => {
        if ("sessionID" in window.localStorage)
            getUsername();
        getDate();
        getProductInfo();
        getRelatedProducts();
        getHotBlogs();
        window.scrollTo(0, 0);
    }, [checkFB, code]);

    if (productInfo.length === 0 || relatedProducts.length === 0 || hotBlogs.length === 0 || ("sessionID" in window.localStorage && username === "")) {
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
                    <div className="col-md-6 col-12 product-image text-center">
                        <img src={productInfo.image} alt="img" />
                    </div>
                    <div className="col-md-6 col-12">
                        <Description name={productInfo.name} des={productInfo.description} point={productInfo.point} numOfFeedbacks={productInfo.feedback.length} itemtype={productInfo.itemtype} image={productInfo.image} id={productInfo.code} />
                    </div>
                </div>
                <div class='divider mt-5'></div>
                <div className="row more-info mt-3">
                    <div className="col-md-6 more-description">
                        <div className="title text-center mt-3">MÔ TẢ SẢN PHẨM</div>
                        <div className="content mt-2">
                            {productInfo.description}
                        </div>
                    </div>
                    <div className="col-md-6 feedbacklist text-center">
                        <div className="title text-center mt-3">ĐÁNH GIÁ ({productInfo.feedback.length})</div>
                        <div className="mt-2">
                            {productInfo.feedback.map((fb) => {
                                return (
                                    <div className="mt-3">
                                        <Feedback username={fb.username} timestamp={fb.date} content={fb.content} point={fb.point} />
                                    </div>
                                );
                            })}
                            <div className="mt-3">
                                {!("sessionID" in window.localStorage) && <div style={{ color: '#B3BDC8' }}>Vui lòng <Link to="/login"><span style={{ color: '#FF2C86', fontWeight: '500' }}>đăng nhập</span></Link> để đánh giá sản phẩm!</div>}
                                {("sessionID" in window.localStorage) &&
                                    <div className="row feedback align-items-center mb-3">
                                        <div className="col-1">
                                            <BsPersonCircle size='24' />
                                        </div>
                                        <div className='col-4'>
                                            {username}
                                        </div>
                                        <div className='col-3 d-flex justify-content-center'>
                                            <StarRating childToParent={childToParent}/>
                                        </div>
                                        <div className='col-4 feedback-num'>
                                            {date}
                                        </div>
                                        <div className="col-1"></div>
                                        <div class='col-8'>
                                            <textarea class="form-control mt-2" style={{ width: '100%' }} value={content} onChange={handleChangeForm} id="feedback" rows="2" placeholder="Vui lòng chọn sao và điền nội dung đánh giá" required></textarea>
                                        </div>
                                        <div class='col-3 mt-2'>
                                            <button type="submit" className="btn btn-send" onClick={handleSubmit}>
                                                Gửi
                                                <FiSend />
                                            </button>
                                        </div>
                                        <div className="col-1"></div>
                                        <div className="col-9 mt-2" style={{color: '#FF2C86'}}>{error}</div>
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
                    <Slider {...setting1}>
                        {relatedProducts.map((item) => {
                            return (
                                <div className="pt-3 pb-3 d-flex justify-content-center">
                                    <ProductCard 
                                            img={item.image}
                                            name={item.name}
                                            price={item.itemtype[0].price}
                                            type={type}
                                            code={item.code}
                                            point={item.point}
                                        />
                                </div>
                            );
                        })}
                    </Slider>
                    </div>
                </div>
                <div class='divider mt-5'></div>
                <div class='related-blog mt-3'>
                    <div className="title pb-3">BLOG LIÊN QUAN</div>
                    <Slider {...setting2}>
                        {hotBlogs.map((blog) => {
                            return (
                                <div className="d-flex justify-content-center">
                                        <HotBlogCard id={blog.idBlog} img={blog.image} tags={blog.tags[0]} title={blog.title.toUpperCase()}/>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default ProductDetail;