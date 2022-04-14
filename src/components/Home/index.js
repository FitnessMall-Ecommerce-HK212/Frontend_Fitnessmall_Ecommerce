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
const BASE_URL = "http://localhost:8080";

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
    const [hotItems, setHotItems] = useState([]);
    const [hotBlogs, setHotBlogs] = useState([]);
    const getHotItems = async () => {
        const res = await axios.get(BASE_URL + '/api/items/hot');
        console.log(res.data.hotItems);
        setHotItems(res.data.hotItems);
    }
    const getHotBlogs = async () => {
        const res = await axios.get(BASE_URL + '/api/blogs');
        console.log(res.data.blogList);
        setHotBlogs(res.data.blogList);
    }
    useEffect(() => {
        getHotItems();
        getHotBlogs();
      }, []);
    if (hotItems.length === 0 || hotBlogs.length === 0){
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
                        {hotItems.map((item) => {
                            return (
                                <div className="pt-3 pb-3 d-flex justify-content-center">
                                    <ProductCard 
                                            img={item.id.image}
                                            name={item.id.name}
                                            price={item.id.itemtype[0].price}
                                            type='equipment'
                                            code={item.id.code}
                                        />
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
                        {hotBlogs.map((blog) => {
                            return (
                                <div className="pt-3 ps-5 pe-5 pb-3 d-flex justify-content-center">
                                    <HotBlogCard img={blog.image} tags={blog.tags[0]} title={blog.title.toUpperCase()}/>
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