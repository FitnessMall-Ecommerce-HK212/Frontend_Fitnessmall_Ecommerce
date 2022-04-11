import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './PurchasedItems.module.css'
import { selectCart } from './cartSlice'
import ChangeQuantity from './ChangeQuantity'
import Sale from '../../assets/logo/Sale.svg'
import { checkItem, removeItem } from './cartSlice'
import NoItemInCart from './NoItemInCart'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import { Link } from 'react-router-dom'
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';

// const a1 = <>
//   <div className={styles.alldata__paymentinfo__diachi__namephone}>
//     <p>Võ Hồng Phúc</p>
//     <p>|</p>
//     <p>0123456789</p>
//   </div>
//   <div>
//     <p>Ký túc xá khu A ĐHQG TP Hồ Chí Minh, Phường Linh Trung, Quận Thủ Đức - TP Thủ Đức, Hồ Chí Minh</p>
//   </div>
// </>

// const a2 =
//   <>
//     <div className={styles.alldata__paymentinfo__diachi__namephone}>
//       <p>Võ Ngọc Quang</p>
//       <p>|</p>
//       <p>0123999999</p>
//     </div>
//     <div>
//       <p>10-12 Đinh Tiên Hoàng Quận 1 Thành phố Hồ Chí Minh</p>
//     </div>
//   </>
const addresses = [];

export class SimpleDialogProps {
  constructor(open, selectedValue, onClose) {
    this.open = open;
    this.selectedValue = selectedValue;
    this.onClose = onClose;
  }
}

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {addresses.map((address, index) => (
          <ListItem button onClick={() => handleListItemClick(address)} key={index}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={address} />
          </ListItem>
        ))}
        <ListItem autoFocus button onClick={() => handleListItemClick('Địa chỉ được thêm')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Thêm địa chỉ" />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function PurchasedItemsList() {
  const [userAd, setUserAd] = React.useState();

  React.useEffect(() => {
    var axios = require('axios');
    var data = JSON.stringify({
      "username": "giacat"
    });

    var config = {
      method: 'get',
      url: 'http://localhost:8080/api/info/ditdzangxinkdep/W3MXBuMVVh110jCUtLC3',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        if (response.data) {
          setUserAd(<>
            <div className={styles.alldata__paymentinfo__diachi__namephone}>
              <p>{response.data.username}</p>
              <p>|</p>
              <p>{response.data.phone}</p>
            </div>
            <div>
              <p>{response.data.address}, {response.data.district}, {response.data.province}</p>
            </div>
          </>)
          addresses.push(<>
            <div className={styles.alldata__paymentinfo__diachi__namephone}>
              <p>{response.data.username}</p>
              <p>|</p>
              <p>{response.data.phone}</p>
            </div>
            <div>
              <p>{response.data.address}, {response.data.district}, {response.data.province}</p>
            </div>
          </>)
          localStorage.setItem("username", response.data.username)
          localStorage.setItem("phone", response.data.phone)
          localStorage.setItem("address", `${response.data.address}, ${response.data.district}, ${response.data.province}`)
          localStorage.setItem("username", response.data.username)
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])

  const items = useSelector(selectCart)
  var isChosenAll = true
  var sum = 0
  const dispatch = useDispatch()

  const [openAddress, setOpenAddress] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(addresses[0]);

  const handleClickOpenAddress = () => {
    setOpenAddress(true);
  };

  const handleCloseAddress = (value) => {
    setOpenAddress(false);
    setSelectedValue(value);
  };
  function formatToCurrency(amount) {
    amount = (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
    return amount.substring(0, amount.length - 3);
  }

  const onChecked = (itemId) => {
    dispatch(checkItem({ id: itemId }))
  }

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }))
  }

  const renderedItems = items.map((item) => {
    if (item.isChosen) {
      sum = sum + item.price * item.quantity
    }
    if (!item.isChosen) {
      isChosenAll = false
    }
    return (
      <div key={item.id} className={styles.items}>
        <div className={styles.items__checkthumb}>
          <input type='checkbox' className={styles.items__checkthumb__check} checked={item.isChosen} onChange={() => onChecked(item.id)} />
          <img className={styles.items__thumb} src={item.image} alt={item.name} />
          <p className={styles.text_pink}>{item.name}</p>
        </div>

        <div className={styles.items__item}>
          <p>{`${formatToCurrency(item.price)}đ`}</p>
        </div>

        <div className={styles.items__item}>
          <ChangeQuantity itemId={item.id} />
        </div>

        <div className={styles.items__item}>
          <p className={styles.items__item__sum}>{`${formatToCurrency(item.price * item.quantity)} đ`}</p>
        </div>
        <div className={styles.items__close}>
          <p className={styles.items__close__symbol} onClick={() => handleRemoveItem(item.id)}>x</p>
        </div>
      </div>
    )
  })

  const handleChooseAll = () => {
    if (!isChosenAll) {
      items.map(item => {
        if (!item.isChosen) {
          onChecked(item.id)
        }
      })
    } else {
      items.map(item => {
        if (item.isChosen) {
          onChecked(item.id)
        }
      })
    }
  }

  return (
    items.length === 0 ?

      <NoItemInCart />

      :
      <div>
        <div>
          <Header />
        </div>
        <section className={styles.body}>
          <h2 className={styles.title}>Giỏ hàng</h2>
          <div className={styles.alldata}>
            <div className={styles.alldata__itemslist}>
              <div className={styles.alldata__itemslist__header}>
                <div className={styles.alldata__itemslist__header__tatca}>
                  <input type='checkbox' className={styles.alldata__itemslist__header__tatca__input} checked={isChosenAll} onChange={handleChooseAll}></input>
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
                  <h3 className={styles.text_pink} onClick={handleClickOpenAddress}>Thay đổi</h3>
                  {/* <Button variant="outlined" onClick={handleClickOpenAddress}>
                        Open simple dialog
                      </Button> */}
                </div>
                <SimpleDialog
                  selectedValue={selectedValue}
                  open={openAddress}
                  onClose={handleCloseAddress}
                />
                {userAd}
              </div>
              <div className={styles.alldata__paymentinfo__voucher}>
                <p>Khuyến mãi</p>
                <div className={styles.alldata__paymentinfo__voucher__choosevoucer}>
                  <img src={Sale} alt='sale-icon' />
                  <p className={[styles.text_pink]}>Chọn hoặc nhập Khuyến mãi khác</p>
                </div>

              </div>
              <div className={styles.alldata__paymentinfo__price}>
                <div className={styles.alldata__paymentinfo__price__sum}>
                  <div>
                    <p>Tổng tiền</p>
                  </div>
                  <div>
                    <p>{`${formatToCurrency(sum)}đ`}</p>
                  </div>
                </div>

                <div className={styles.alldata__paymentinfo__price__voucher}>
                  <div>
                    <p>Phí vận chuyển</p>
                  </div>
                  <div>
                    <p>-0đ</p>
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

                <hr />
                <div className={styles.alldata__paymentinfo__price__realprice}>
                  <div>
                    <p>Tổng cộng</p>
                  </div>
                  <div>
                    <p className={styles.text_pink}>{sum == 0 ? "Vui lòng chọn sản phẩm" : `${formatToCurrency(sum)}đ`}</p>
                  </div>
                </div>
              </div>
              <div className={styles.alldata__paymentinfo__buybutton}>
                <Link to={`cart/confirm`} >
                  <button type='button' className={styles.alldata__paymentinfo__buybutton__element}>Mua hàng</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div>
          <Footer />
        </div>
      </div>

  )
}
