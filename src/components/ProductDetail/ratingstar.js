import { FaStar, FaRegStar } from "react-icons/fa";
function RatingStar(props){
    var list = [];
    for (var i = 0; i < 5; i++){
        if (i + 1 <= props.point)
            list[i] = <FaStar style={{color: '#F8B84E'}}/>;
        else
            list[i] = <FaRegStar style={{color: '#F8B84E'}}/>;
    }
    return (
        <div>
            {list}
        </div>
    );
}

export default RatingStar;