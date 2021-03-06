import React, { useState, useEffect } from 'react'
import styles from './OrdersList.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectOrder } from './orderSlice'
import Close from '../../assets/icons/Close.svg'
import DeliveryTruck from '../../assets/icons/DeliveryTruck.svg'
import Package from '../../assets/icons/Package.svg'
import success from '../../assets/icons/success.svg'
import Tasklist from '../../assets/icons/Tasklist.svg'
import { Footer, Header, Sidebar, GhostButton } from '../../components'
import { addOrders } from './orderSlice'
import { CircularProgress } from '@mui/material'
import { BASE_URL } from '../../config/host';

export default function OrdersList() {

    function formatToCurrency(amount) {
        if (amount) {
            amount = (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
            return amount.substring(0, amount.length - 3);
        }
    }

    const [orders, setOrders] = useState()
    const [products, setProducts] = useState([])

    useEffect(() => {
        var axios = require('axios');
        var data = JSON.stringify({
            "username": localStorage.getItem("username")
        });

        var config = {
            method: 'get',
            url: `${BASE_URL}api/orders/${localStorage.getItem("username")}`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                // console.log(response.data)
                setOrders(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])

    const [kind, setKind] = useState("Tất cả đơn hàng")

    const onChangeKind = (e) => {
        setKind(e.target.value)
    }

    const renderState = (order) => {
        if (order.state === "Đã thanh toán") {
            return (
                <div className={styles.orderlist__header__content__item__state}>
                    <div>
                        <img src={success} alt='...' />
                    </div>
                    <div className={styles.orderlist__header__content__item__state__text}>
                        <p className={styles.orderlist__header__content__item__state__text}>Đã thanh toán ngày {order.timestamp.slice(0, 10)}</p>
                    </div>
                </div>
            )
        } else if (order.state === "Chưa thanh toán") {
            return (
                <div className={styles.orderlist__header__content__item__state}>
                    <div>
                        <img src={Package} alt='...' />
                    </div>
                    <div className={styles.orderlist__header__content__item__state__text}>
                        <p className={styles.orderlist__header__content__item__state__text}>Chưa thanh toán</p>
                    </div>
                </div>
            )
        } else if (order.state === "Thanh toán khi nhận hàng") {
            return (
                <div className={styles.orderlist__header__content__item__state}>
                    <div>
                        <img src={DeliveryTruck} alt='...' />
                    </div>
                    <div className={styles.orderlist__header__content__item__state__text}>
                        <p className={styles.orderlist__header__content__item__state__text}>Thanh toán khi nhận hàng</p>
                    </div>
                </div>
            )
        }
    }
    const renderItems = (order) => {
        return order.products.map((product, index) => {
            console.log(product)
            return (
                <div className={styles.orderlist__header__content__item__info} key={product.code}>
                    <div className={styles.orderlist__header__content__item__info__thumbquantity}>
                        <div>
                            <img src={product.image_name.image
                            } alt='...' className={styles.orderlist__header__content__item__info__thumb} />
                        </div>
                        <div className={styles.orderlist__header__content__item__info__text}>
                            <p>{product.image_name.name}</p>
                            <p>x{product.quantity}</p>
                        </div>
                    </div>

                    <div>
                        <p>{formatToCurrency(product.unit_price * product.quantity)}đ</p>
                    </div>
                </div>
            )
        })
    }

    const renderedOrders = () => {
        return orders.map(order => {
            if (kind === order.state || kind === "Tất cả đơn hàng") {
                return (
                    <div>
                        <div key={order.id} className={styles.orderlist__header__content__item}>
                            {renderState(order)}
                            {renderItems(order)}
                            <hr />
                            <div className={styles.orderlist__header__content__item__footer} >
                                <div>
                                    <Link to={`/history/order/${order.id}`} className={styles.orderlist__header__content__item__footer__linktoitem} >
                                        <GhostButton value={"Xem chi tiết"} onClick={() => { }} />
                                    </Link>
                                </div>
                                <div>
                                    <p>Tổng tiền: {formatToCurrency(order.amount)}đ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }
    return (
        (<div>
            <div>
                <Header />
            </div>
            <div className={styles.orderlist__content}>
                <div>
                    <Sidebar nameActive="3" />
                </div>
                <div className={styles.orderlist}>
                    <div className={styles.orderlist__header}>
                        <div>
                            <p className={styles.orderlist__header__text}>Hiển thị:</p>
                        </div>
                        <div>
                            <select name="kind" className={styles.orderlist__header__select} onChange={onChangeKind}>
                                <option value="Tất cả đơn hàng">Tất cả đơn hàng</option>
                                <option value="Chưa thanh toán">Chưa thanh toán</option>
                                <option value="Thanh toán khi nhận hàng">Thanh toán khi nhận hàng</option>
                                <option value="Đã thanh toán">Đã thanh toán</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.orderlist__header__content}>
                        {orders ? renderedOrders() : <div className={styles.pending}><CircularProgress /></div>}
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>)
    )
}