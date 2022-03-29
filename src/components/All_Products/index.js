import ProductCard from "./productcard";
import SideBar from "./sidebar";

function All_Products(){
    return (
        <div className="all_products d-flex">
            <SideBar />
            <div className="content d-flex">
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
}

export default All_Products