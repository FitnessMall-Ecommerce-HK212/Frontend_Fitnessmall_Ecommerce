import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from './productcard'
import SideBar from "./sidebar";
import ReactPaginate from 'react-paginate';
import { CircularProgress } from "@mui/material";
const BASE_URL = "http://localhost:8080";

function All_Products(){
    const [productList, setProductList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const productsPerPage = 6;
    const pagesVisited = pageNumber * productsPerPage;
    
    const pageCount = Math.ceil(productList.length / productsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const { type } = useParams();
    const getProductList = async () => {
        var api;
        if (type === 'equipment')
            api = "/api/items";
        else 
            api = "/api/foods";
        const res = await axios.get(BASE_URL + api);
        setProductList(res.data);
    }
    useEffect(() => {
        getProductList();
      }, []);

    if (productList.length === 0){
        return (
            <div className="d-flex justify-content-center mt-5">
                <CircularProgress/>
            </div>
        );
    }
    else {
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
                    <SideBar />
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