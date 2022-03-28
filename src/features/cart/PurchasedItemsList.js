import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './PurchasedItems.module.css'
import { selectCart } from './cartSlice'
import ChangeQuantity from './ChangeQuantity'
import Sale from '../../assets/logo/Sale.svg'

export default function PurchasedItemsList() {

  const items = useSelector(selectCart)

  const renderedItems = items.map((item, index) => (
    <div key={item.id} className={styles.items}>
      <div className={styles.items__checkthumb}>
        <input type='checkbox' className={styles.items__checkthumb__check}/>
        <img className={styles.items__thumb} src={item.image} alt={item.name}/>
        <p className={styles.text_pink}>{item.name}</p>
      </div>

      <div className={styles.items__item}>
      <p>{`${item.price} đ`}</p>
      </div>

      <div className={styles.items__item}>
        <ChangeQuantity itemId={item.id} />
      </div>

      <div className={styles.items__item}>
        <p className={styles.items__item__sum}>{`${item.price * item.quantity} đ`}</p>
      </div>
      <div className={styles.items__close}>
        <p className={styles.items__close__symbol}>x</p>
      </div>
    </div>
  ))

  return (
    <section>
      <h2 className={styles.title}>Giỏ hàng</h2>
      <div className={styles.alldata}>
        <div className={styles.alldata__itemslist}>
          <div className={styles.alldata__itemslist__header}>
            <div className={styles.alldata__itemslist__header__tatca}>
              <input type='checkbox' className={styles.alldata__itemslist__header__tatca__input}></input>
              <p>Tất cả (1 sản phẩm)</p>
            </div>
            <div className={styles.alldata__itemslist__header__item}>
              <p>Đơn giá</p>
            </div>
            <div className={styles.alldata__itemslist__header__item}>
              <p>Số lượng</p>
            </div>
            <div className={styles.alldata__itemslist__header__item}>
              <p>Thành tiền</p>
            </div>
          </div>
          <div className={styles.alldata__itemslist__content}>
            {renderedItems}
          </div>
        </div>

        <div className={styles.alldata__paymentinfo}>
            <div className={styles.alldata__paymentinfo__diachi}>
              <div className={styles.alldata__paymentinfo__diachi__header}>
                <h2>Giao tới</h2>
                <h3 className={styles.text_pink}>Thay đổi</h3>
              </div>
              <div className={styles.alldata__paymentinfo__diachi__namephone}>
                <p>Võ Hồng Phúc</p> 
                <p>|</p>
                <p>0123456789</p>
              </div>
              <div>
                <p>Ký túc xá khu A ĐHQG TP Hồ Chí Minh, Phường Linh Trung, Quận Thủ Đức - TP Thủ Đức, Hồ Chí Minh</p>
              </div>
            </div>
            <div className={styles.alldata__paymentinfo__voucher}>
              <p>Khuyến mãi</p>
              <div className={styles.alldata__paymentinfo__voucher__choosevoucer}>
                <img src={Sale} alt='sale-icon'/>
                <p className={[styles.text_pink]}>Chọn hoặc nhập Khuyến mãi khác</p>
              </div>

            </div>
            <div className={styles.alldata__paymentinfo__price}>
              <div className={styles.alldata__paymentinfo__price__sum}>
                <div>
                  <p>Tổng tiền</p>
                </div>
                <div>
                  <p>0đ</p>
                </div>
              </div>

              <div className={styles.alldata__paymentinfo__price__voucher}>
                <div>
                  <p>Voucher</p>
                </div>
                <div>
                  <p>0đ</p>
                </div>
              </div>

              <hr/>
              <div className={styles.alldata__paymentinfo__price__realprice}>
                <div>
                  <p>Tổng cộng</p>
                </div>
                <div>
                  <p className={styles.text_pink}>Vui lòng chọn sản phẩm</p>
                </div>
              </div>
            </div>
            <div className={styles.alldata__paymentinfo__buybutton}>
                <button type='button' className={styles.alldata__paymentinfo__buybutton__element}>Mua hàng (0)</button>
            </div>
        </div>
      </div>
    </section>
  )
}
