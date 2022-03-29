import React, { useState } from 'react'
import { increment, decrement } from './cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import styles from './PurchasedItems.module.css'

export default function ChangeQuantity({itemId}) {

    const item = useSelector((state) =>
    state.cart.find((item) => item.id === itemId)
    )
    const [quantity, setQuantity] = useState(item.quantity)
    const dispatch = useDispatch()
    
    const onQuantityChange = e => setQuantity(e.target.value)

    const onIncreaseButtonClicked = () => {
          setQuantity(quantity+1);
          dispatch(increment({ id: itemId}))
    }

    const onDecreaseButtonClicked = () => {
        if (quantity > 1) {
            setQuantity(quantity-1);
        }
        dispatch(decrement({ id: itemId}))
    }

  return (
    <>
    <form className={styles.items__quantity}>
        <div className={styles.items__quantity__decrease} onClick={onDecreaseButtonClicked}>-</div>
        <input type="number" value={quantity} onChange={onQuantityChange} className={styles.items__quantity__value}/>
        <div className={styles.items__quantity__increase} onClick={onIncreaseButtonClicked}>+</div>
    </form>
    </>
  )
}
