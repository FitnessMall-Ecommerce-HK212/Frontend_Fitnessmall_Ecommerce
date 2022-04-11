import ProductCard from "./productcard";
import SideBar from "./sidebar";
import React from "react";
var list = [1,2,3,4,5,6,7,8];
function All_Products(){
    return (
        <div className="row all_products d-flex">
            <div className="col-md-3">
                <SideBar />
            </div>
            <div className="col-md-9">
                <div className="row content d-flex justify-content-center ms-5">
                    {list.map((i) => {
                            return (
                                <div className="col-md-4 pt-5">
                                    <ProductCard 
                                        img='https://static.onecms.io/wp-content/uploads/sites/35/2020/03/24/workout-dice-bells-tout1244x1244.jpg'
                                        name='Tạ tay'
                                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                                        price='$299.99'
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default All_Products