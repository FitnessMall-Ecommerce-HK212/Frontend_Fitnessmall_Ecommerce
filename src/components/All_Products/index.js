import { Switch } from "react-router-dom";
import ProductCard from "./productcard";
import SideBar from "./sidebar";

function All_Products(){
    return (
        <div className="all_products d-flex">
            <SideBar />
            <div className="content d-flex ps-5 pt-5">
                <ProductCard 
                    img='https://static.onecms.io/wp-content/uploads/sites/35/2020/03/24/workout-dice-bells-tout1244x1244.jpg'
                    name='Tạ tay'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    price='$299.99'
                />
                <ProductCard 
                    img='https://static.onecms.io/wp-content/uploads/sites/35/2020/03/24/workout-dice-bells-tout1244x1244.jpg'
                    name='Tạ tay'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    price='$299.99'
                className='pt-5'/>
            </div>
        </div>
    );
}

export default All_Products