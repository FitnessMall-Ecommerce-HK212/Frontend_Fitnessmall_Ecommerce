import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './PurchasedItems.module.css'
import { selectCart } from './cartSlice'
import ChangeQuantity from './ChangeQuantity'

export default function PurchasedItemsList() {

  const items = useSelector(selectCart)

  const renderedItems = items.map((item, index) => (
    <div key={item.id} className={styles.items}>
      <div className={styles.items__checkthumb}>
        <input type='checkbox' className={styles.items__checkthumb__check}/>
        <img className={styles.items__thumb} src={item.image} alt={item.name}/>
        <p>{item.name}</p>
      </div>

      <div className={styles.items__item}>
      <p>{`${item.price} đ`}</p>
      </div>

      <div className={styles.items__item}>
        <ChangeQuantity itemId={item.id} />
      </div>

      <div className={styles.items__item}>
        <p>{`${item.price * item.quantity} đ`}</p>
      </div>
      <div className={styles.items__close}>
        <p>x</p>
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

        </div>
      </div>
    </section>
  )
}
