import React from 'react'
import fitness_logo from '../../assets/logo/fitness_logo.png'
import styles from './PurchasedItems.module.css'
import './PurchasedItems.module.css'

export default function NoItemInCart() {
  return (
    <div className={styles.noitem}>
        <div><img src={fitness_logo} alt='logo'/></div>
        <div>
            <p className={styles.noitem__text__alert}>Không có sản phẩm nào trong giỏ hàng</p>
        </div>
        <div>
            {/* <button className={styles.noitem__button__element}>Tiếp tục mua sắm</button> */}
            <button type="button" className={styles.noitem__button__element} >Tiếp tục mua sắm</button>
        </div>
    </div>
  )
}
