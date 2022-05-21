import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import ProductCard from './productcard'
import ReactPaginate from 'react-paginate';
import { CircularProgress } from "@mui/material";
const BASE_URL = "http://fitnessmall.herokuapp.com";

function All_Products(){
    const [productList, setProductList] = useState([]);
    const [link, setLink] = useState("/api/foods");
    const [pageNumber, setPageNumber] = useState(0);

    const productsPerPage = 6;
    const pagesVisited = pageNumber * productsPerPage;

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const { type } = useParams();
    const getProductList = async () => {
        const res = await axios.get(BASE_URL + link);
        setProductList(res.data);
    }
    useEffect(() => {
        getProductList();
        setPageNumber(0);
      }, [link]);

    if (productList.length === 0){
        return (
            <div className="d-flex justify-content-center mt-5">
                <CircularProgress/>
            </div>
        );
    }
    else {
        const pageCount = Math.ceil(productList.length / productsPerPage);
        const displayProducts = productList
        .slice(pagesVisited, pagesVisited + productsPerPage)
        .map((product) => {
            return (
                <div className="col-md-4 pt-5">
                    <ProductCard 
                        img={product.image}
                        name={product.name}
                        price={product.price}
                        point={product.point}
                        code={product.code}
                        type={type}
                    />
                </div>
            );
        });
        return (
            <div className="row all_products d-flex">
                <div className="col-md-3">
                <div className='sidebar-product'>
                    <div className='title pt-5'>
                        CÁC SẢN PHẨM VÀ DỊCH VỤ
                    </div>
                    <div className="optionbutton mb-5">
                        <NavLink to='/products/food' activeStyle={{color: 'white', background: '#FFA5CB'}} type='button' className="btn btn-option btn-lg mt-5" onClick={()=>setLink("/api/foods")}>Thực phẩm dinh dưỡng</NavLink>
                        <NavLink to='/products/equipment' activeStyle={{color: 'white', background: '#FFA5CB'}} type='button' className="btn btn-option btn-lg mt-5" onClick={()=>setLink("/api/items")}>Dụng cụ tập luyện</NavLink>
                    </div>
                </div>
                </div>
                <div className="col-md-9">
                    <div className="row content d-flex justify-content-center ms-5">
                        {displayProducts}
                    </div>
                    <div className="mt-5 d-flex justify-content-center"> 
                        <ReactPaginate
                            previousLabel={'<<'}
                            nextLabel={">>"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            forcePage = {pageNumber}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default All_Products