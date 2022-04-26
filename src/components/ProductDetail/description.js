import { NavLink } from 'react-router-dom'
import '../../styles/ProductDetail.css';
import InputSpinner from 'react-bootstrap-input-spinner'
import { CTAButton, GhostButton } from '../Buttons'
import RatingStar from "./ratingstar";
import { useState } from 'react';
import { increment, decrement, checkItem, removeItem, addItem } from '../../features/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

function Description(props) {
    const dispatch = useDispatch()
    const [active, setActive] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [numItem, setNumItem] = useState(1)
    const onClick = () => setShowResult(!showResult)
    const Info = (props) => {
        return (
            <div>
                {props.des.slice(0, 200)}
                <button class="readmore" onClick={onClick}>...Xem thêm</button>
            </div>
        )
    }
    const LessInfo = (props) => {
        return (
            <div>
                {props.des}
                <button class="readmore" onClick={onClick}>...Thu gọn</button>
            </div>
        )
    }

    localStorage.clear()
    const handleAddCart = () => {
        dispatch(addItem(props.id, props.name, props.itemtype[active].price, props.image, numItem))
        alert(`Thêm sản phẩm '${props.name}' vào giỏ hàng thành công!`)
    }

    return (
        <div className="description">
            <div className="product-name">{props.name}</div>
            <div style={{ gap: '5px' }}>
                <div class="feedback-num">{props.numOfFeedbacks} đánh giá | Điểm đánh giá: <span class="badge bg-warning text-dark">{props.point.toFixed(1)}</span></div>
            </div>
            <div className="brief">
                {showResult ? <LessInfo des={props.des} /> : <Info des={props.des} />}
            </div>
            <div className="row category">
                <div className="col-2">Phân loại:</div>
                <div className="col-10 d-flex">
                    {props.itemtype.map((e) => {
                        return (
                            <button type='button' className={props.itemtype[active] === e ? "btn btn-option ms-5 clicked" : "btn btn-option ms-5"} onClick={() => setActive(props.itemtype.indexOf(e))}>{e.category}</button>
                        );
                    })}
                </div>
            </div>
            <div className="row price mt-3">
                <div className="col-2">Giá:</div>
                <div className="col-5 action text-center">{props.itemtype[active].price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
            </div>
            <div className="row numberToOrder mt-3">
                <div className="col-2">Số lượng:</div>
                <div className="col-5 input-spinner">
                    <InputSpinner
                        type={'int'}
                        max={props.itemtype[active].quantity}
                        min={1}
                        step={1}
                        value={1}
                        onChange={num => setNumItem(num)}
                        size="sm"
                    />
                </div>
                <div className="col-5 feedback-num">{props.itemtype[active].quantity} sản phẩm có sẵn</div>
            </div>
            <div className="row d-flex mt-5">
                <div className="col-2"></div>
                <div className="col-10 action d-flex">
                    <GhostButton value="Thêm vào giỏ hàng" onClick={() => handleAddCart(props.itemtype[active].price)} />
                    <Link to="/cart">
                        <CTAButton value="Mua ngay" className="after" onClick={() => handleAddCart(props.itemtype[active].price)} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Description;