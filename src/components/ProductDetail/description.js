import { NavLink } from 'react-router-dom'
import '../../styles/ProductDetail.css';
import InputSpinner from 'react-bootstrap-input-spinner'
import { CTAButton, GhostButton } from '../Buttons'
import RatingStar from "./ratingstar";
import { useState } from 'react';
import { increment, decrement, checkItem, removeItem, addItem } from '../../features/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from 'react'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function CustomizedSnackbars(props) {
    return (
        <Stack spacing={2} sx={{ width: "100%" }}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={props.open}
                autoHideDuration={3000}
                onClose={props.handleClose}
            >
                <Alert
                    onClose={props.handleClose}
                    severity={props.type}
                    sx={{ width: "100%" }}
                >
                    {props.type === "success" ? "Thêm vào giỏ hàng thành công" : "Thêm thất bại vui lòng thử lại!"}
                </Alert>
            </Snackbar>
        </Stack>
    );
}
function Description(props) {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");
    const handleClose = () => {
        setOpen(false);
    };


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

    // window.localStorage.clear()
    const handleAddCart = () => {
        if ("sessionID" in window.localStorage) {
            setType("success")
            dispatch(addItem(props.id, props.name, props.itemtype[active].price, props.image, numItem, props.itemtype))
            setOpen(true);
            //alert(`Thêm sản phẩm '${props.name}' vào giỏ hàng thành công!`)
        } else {
            //alert("Cần đăng nhập để thêm giỏ hàng!")
            setType("fail")
            setOpen(true)
        }

    }

    return (
        <div className="description">
            <CustomizedSnackbars type={type} open={open} handleClose={handleClose} />
            <div className="product-name">{props.name}</div>
            <div style={{ gap: '5px' }}>
                <div class="feedback-num">{props.numOfFeedbacks} đánh giá | Điểm đánh giá: <span class="badge bg-warning text-dark">{props.point.toFixed(1)}</span></div>
            </div>
            <div className="brief">
                {showResult ? <LessInfo des={props.des} /> : <Info des={props.des} />}
            </div>
            <div className="row category d-flex align-items-center pt-5">
                <div className="col-4">Phân loại:</div>
                <div className="col-8 d-flex justify-content-center">
                    {props.itemtype.map((e) => {
                        return (
                            <button type='button' className={props.itemtype[active] === e ? "btn btn-option clicked" : "btn btn-option ms-5"} onClick={() => setActive(props.itemtype.indexOf(e))}>{e.category}</button>
                        );
                    })}
                </div>
            </div>
            <div className="row price d-flex align-items-center mt-3">
                <div className="col-4">Giá:</div>
                <div className="col-8 action text-center">{props.itemtype[active].price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
            </div>
            <div className="row numberToOrder d-flex align-items-center mt-3">
                <div className="col-4">Số lượng:</div>
                <div className="col-8 input-spinner">
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
                <div className="col-4"></div>
                <div className="col-8 feedback-num text-center mt-3">{props.itemtype[active].quantity} sản phẩm có sẵn</div>
            </div>
            <div className="row d-flex mt-5">
                <div className="col-4"></div>
                <div className="col-sm-8 col-12 action d-flex justify-content-center">
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