import React from 'react'
import { Footer, Header, Sidebar, GhostButton, CTAButton } from '../../components'
import styles from './OrdersList.module.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Close from '../../assets/icons/Close.svg'
import DeliveryTruck from '../../assets/icons/DeliveryTruck.svg'
import Package from '../../assets/icons/Package.svg'
import success from '../../assets/icons/success.svg'
import Tasklist from '../../assets/icons/Tasklist.svg'

export default function SingleOrderPage({ match }) {

  const { orderId } = match.params
  function formatToCurrency(amount) {
    amount = (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
    return amount.substring(0, amount.length - 3);
  }

  const order = useSelector((state) =>
    state.order.find((order) => order.id === orderId)
  )

  const renderState = (order) => {

    let des = order.state
    if (order.state === "Đã giao hàng") {
      des = `Đã giao hàng ngày ${order.ngaygiao}`
    }
    return (
      <div className={styles.orderlist__header__content__item__state}>
        <div className={styles.orderlist__header__content__item__state__icontext}>
          <div>
            <img src={Close} alt='cancel' />
          </div>
          <div className={styles.orderlist__header__content__item__state__text}>
            <p className={styles.orderlist__header__content__item__state__text}>{des}</p>
          </div>
        </div>
        <div>
          <Link to={`/history/order/${orderId}/${order.shipmentId}`} className={styles.orderlist__header__content__item__state__shipmentdetail}>
            <CTAButton value="Chi tiết" onClick={() => { }} />
          </Link>
        </div>
      </div>
    )
  }

  const renderItems = (order) => {
    return order.products.map(product => {
      return (
        <div className={styles.orderlist__header__content__item__info}>
          <div className={styles.orderlist__header__content__item__info__thumbquantity}>
            <div>
              <img src={product.image} alt='...' className={styles.orderlist__header__content__item__info__thumb} />
            </div>
            <div className={styles.orderlist__header__content__item__info__text}>
              <p>{product.name}</p>
              <p>x{product.quantity}</p>
            </div>
          </div>

          <div>
            <p>{formatToCurrency(product.price * product.quantity)}đ</p>
          </div>
        </div>
      )
    })
  }

  const renderedOrders =
    <div>
      <div key={order.code} className={styles.orderlist__header__content__item}>
        {renderState(order)}
        {renderItems(order)}
        <p className={styles.orderlist__header__content__item__note}>Ghi chú: {order.ghichu}</p>
      </div>
    </div>
  return (
    <div className={styles.orderdetail}>
      <div>
        <Header />
      </div>
      <div className={styles.orderdetail__content}>
        <Sidebar nameActive="3" />
        <div className={styles.orderdetail__content__info}>
          <div className={styles.orderdetail__content__info__text}>
            <p>Chi tiết đơn hàng</p>
          </div>
          <div>
            {renderedOrders}
          </div>
          <div className={styles.orderdetail__content__info__time}>
            <p>Đơn hàng {order.id}</p>
            <p className={styles.orderdetail__content__info__time__orderdate}>Đặt ngày {order.ngaydat}</p>
          </div>
          <div className={styles.orderdetail__content__info__user}>
            <div className={styles.orderdetail__content__info__name}>
              <p>{order.username}</p>
              <p>{order.diachi}</p>
              <p>{order.SDT}</p>
            </div>
            <div className={styles.orderdetail__content__info__payment}>
              <div className={styles.orderdetail__content__info__payment__items}>
                <p>Tổng tiền</p>
                <p>{formatToCurrency(order.tongtien)}đ</p>
              </div>
              <div className={styles.orderdetail__content__info__payment__items}>
                <p>Phí vận chuyển</p>
                <p>{formatToCurrency(order.phivanchuyen)}đ</p>
              </div>
              <div className={styles.orderdetail__content__info__payment__items}>
                <p>Voucher</p>
                <p>-{formatToCurrency(order.khuyenmai)}đ</p>
              </div>
              <hr />
              <div className={styles.orderdetail__content__info__payment__items}>
                <p>Tổng cộng</p>
                <p className={styles.orderdetail__content__info__payment__items__sum}>{formatToCurrency(order.tongcong)}đ</p>
              </div>
              <p>Thanh toán bằng hình thức {order.payment_method}</p>
            </div>
          </div>
          <div >
            <Link to="/history/order" className={styles.orderdetail__content__info__returnlink}>&lt;&lt; Quay lại danh sách đơn hàng</Link>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
