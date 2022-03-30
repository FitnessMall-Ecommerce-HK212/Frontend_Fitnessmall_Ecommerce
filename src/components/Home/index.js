import React from 'react';
import Slider from "react-slick";
import '../../styles/HomePage.css'
import banner_homepage from '../../assets/banner/homepage.png'
import IntroCard from './introcard';
import HotdealCard from './hotdealcard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotBlogCard from './hotblogcard';

const list = [1, 2, 3, 4, 5];

function Home(props) {
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
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
            }
            },
            {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                dots: true
            }
            },
            {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
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
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1350,
            settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
            }
            },
            {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                dots: true
            }
            },
            {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                initialSlide: 1,
                centerMode: false,
            }
            }
        ]
    };
    return (
        <div>
            <img src={banner_homepage} alt='banner' style={{width:"100%",height:"100%",borderStyle:"none"}}/>
            <div className='all-service pt-5'>
            <div className='intro'>
                    <div className='line'></div>
                    <h5 className='pt-2 ps-1 pe-1'>Sản phẩm cung cấp</h5>
                    <div className='line'></div>
                </div>
                <div className='introcard-container pt-3'>
                    <div className='row'>
                        <div className='col-4 col-xs-12 ps-5 pe-5'><IntroCard name="Personal Training"/></div>
                        <div className='col-4 col-xs-12 ps-5 pe-5'><IntroCard name="Medical Blogs"/></div>
                        <div className='col-4 col-xs-12 ps-5 pe-5'><IntroCard name="Fitness Accessories"/></div>
                    </div>
                </div>
            </div>
            <div className='hotdeals pt-5'>
                <div className='intro'>
                    <div className='line'></div>
                    <h5 className='pt-2 ps-1 pe-1'>Hot Deals</h5>
                    <div className='line'></div>
                </div>
                <Slider {...setting1}>
                    {list.map((i) => {
                        return (
                            <div className="pt-3 pb-3 d-flex justify-content-center">
                                <HotdealCard img='https://sc04.alicdn.com/kf/U197d056a90a34c05bd9e4f15240cb91bu.jpg' price='300.000'/>
                            </div>
                        );
                    })}
                </Slider>
            </div>
            <div className='hotblogs pt-5 pb-5'>
                <div className='intro'>
                    <div className='line'></div>
                    <h5 className='pt-2 ps-1 pe-1'>Hot Blogs</h5>
                    <div className='line'></div>
                </div>
                <Slider {...setting2}>
                    {list.map((i) => {
                        return (
                            <div className="pt-3 ps-5 pe-5 pb-3 d-flex justify-content-center">
                                <HotBlogCard img='https://www.wheystore.vn/upload/news_optimize/wst_1602494019_workout_la_gi__tam_quan_trong_cua_workout_trong_the_hinh_image_1602494019_1.jpg' tags='FITNESS' title='5 WORKOUTS YOU CAN DO ALMOST EVERYWHERE'/>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default Home;