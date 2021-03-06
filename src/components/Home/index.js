import React from 'react';
import axios from "axios";
import Slider from "react-slick";
import '../../styles/HomePage.css'
import banner_homepage from '../../assets/banner/homepage.png'
import IntroCard from './introcard';
import ProductCard from '../All_Products/productcard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotBlogCard from './hotblogcard';
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { BASE_URL } from '../../config/host';

function Home() {
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
    console.log(BASE_URL)
    const [hotItems, setHotItems] = useState([]);
    const [hotFood, setHotFood] = useState([]);
    const [hotBlogs, setHotBlogs] = useState([]);
    const getHotItems = async () => {
        const res = await axios.get(BASE_URL + 'api/items/hot');
        console.log(res.data.hotItems);
        setHotItems(res.data.hotItems);
    }
    const getHotFood = async () => {
        const res = await axios.get(BASE_URL + 'api/foods/hot');
        console.log(res.data.hotFoods);
        setHotFood(res.data.hotFoods);
    }
    const getHotBlogs = async () => {
        const res = await axios.get(BASE_URL + 'api/blogs');
        console.log(res.data.blogList);
        setHotBlogs(res.data.blogList);
    }
    useEffect(() => {
        getHotFood();
        getHotItems();
        getHotBlogs();
      }, []);
    if (hotFood.length === 0 || hotItems.length === 0 || hotBlogs.length === 0){
        return (
            <div className="d-flex justify-content-center mt-5">
                <CircularProgress/>
            </div>
        );
    }
    else {
        return (
            <div>
                <img src={banner_homepage} alt='banner' style={{width:"100%",height:"100%",borderStyle:"none"}}/>
                <div className='all-service pt-5'>
                    <div className='intro'>
                        <div className='line'></div>
                        <h5 className='pt-2 ps-1 pe-1'>FITNESSMALL C?? G???</h5>
                        <div className='line'></div>
                    </div>
                    <div className='row mt-3 g-3'>
                        <div className='col-sm-6 col-12'><IntroCard name="Blog T?? V???n"/></div>
                        <div className='col-sm-6 col-12'><IntroCard name="S???n ph???m Fitness"/></div>
                    </div>
                </div>
                <div className='hotdeals pt-5'>
                    <div className='intro'>
                        <div className='line'></div>
                        <h5 className='pt-2 ps-1 pe-1'>Th???c ph???m n???i b???t</h5>
                        <div className='line'></div>
                    </div>
                    <Slider {...setting1}>
                        {hotFood.map((item) => {
                            return (
                                <div className="pt-3 pb-3 d-flex justify-content-center">
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
                    </Slider>
                </div>
                <div className='hotdeals pt-5'>
                    <div className='intro'>
                        <div className='line'></div>
                        <h5 className='pt-2 ps-1 pe-1'>D???ng c??? n???i b???t</h5>
                        <div className='line'></div>
                    </div>
                    <Slider {...setting1}>
                        {hotItems.map((item) => {
                            return (
                                <div className="pt-3 pb-3 d-flex justify-content-center">
                                    <ProductCard 
                                            img={item.image}
                                            name={item.name}
                                            price={item.itemtype[0].price}
                                            type='equipment'
                                            code={item.code}
                                            point={item.point}
                                        />
                                </div>
                            );
                        })}
                    </Slider>
                </div>
                <div className='hotblogs pt-5 pb-5'>
                    <div className='intro'>
                        <div className='line'></div>
                        <h5 className='pt-2 ps-1 pe-1'>Blog n???i b???t</h5>
                        <div className='line'></div>
                    </div>
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

export default Home;