import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./productcard";
import SideBar from "./sidebar";
import { CircularProgress } from "@mui/material";
const BASE_URL = "http://localhost:8080";

function All_Products(){
    const [productList, setProductList] = useState([]);
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
      }, [productList]);

    if (productList.length === 0){
        return (
            <div className="d-flex justify-content-center mt-5">
                <CircularProgress/>
            </div>
        );
    }
    else {
        return (
            <div className="row all_products d-flex">
                <div className="col-md-3">
                    <SideBar />
                </div>
                <div className="col-md-9">
                    <div className="row content d-flex justify-content-center ms-5">
                        {productList.map((product) => {
                                return (
                                    <div className="col-md-4 pt-5">
                                        <ProductCard 
                                            img={product.image}
                                            name={product.name}
                                            description={product.description.slice(0, 50)}
                                            price={product.price}
                                            code={product.code}
                                            type={type}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        );
    }
}

export default All_Products