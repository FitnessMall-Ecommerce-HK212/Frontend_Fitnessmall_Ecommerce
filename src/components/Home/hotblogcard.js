import '../../styles/HomePage.css'
import React from "react";
function HotBlogCard(props){
    return(
        <div className='hotblogcard'>
            <div class="card shadow">
            <img src={props.img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title text-center">{props.tags}</h5>
                <p class="card-text text-center">{props.title}</p>
            </div>
            </div>
        </div>
    );
}

export default HotBlogCard