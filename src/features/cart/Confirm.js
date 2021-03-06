import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './PurchasedItems.module.css'
import { selectCart } from './cartSlice'
import Sale from '../../assets/logo/Sale.svg'
import { checkItem, removeItem } from './cartSlice'
import NoItemInCart from './NoItemInCart'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import cash from '../../assets/icons/cash.svg'
import momo from '../../assets/icons/momo.svg'
import zalopay from '../../assets/icons/zalopay.svg'
import TextField from '@mui/material/TextField';
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
import { BASE_URL } from '../../config/host';

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
        <ListItem autoFocus button onClick={() => handleListItemClick('?????a ch??? ???????c th??m')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Th??m ?????a ch???" />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function Confirm() {
  const products = []

  const items = JSON.parse(window.localStorage.getItem(localStorage.getItem("username")))
  // const items = JSON.parse(window.localStorage.getItem(localStorage.getItem("username"))).cart

  var sum = 0
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [note, setNote] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState('');

  const [openAddress, setOpenAddress] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(addresses[0]);

  const handleClickOpenAddress = () => {
    setOpenAddress(true);
  };

  const handleCloseAddress = (value) => {
    setOpenAddress(false);
    setSelectedValue(value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function formatToCurrency(amount) {
    amount = (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
    return amount.substring(0, amount.length - 3);
  }


  const onChangePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  }

  const renderedItems = items.map((item) => {
    if (item.isChosen) {
      sum = sum + item.price * item.quantity
      products.push({ "name": item.name, "code": item.id, "itemType": item.itemType, "quantity": item.quantity, "unit_price": item.price })
      return (
        <div key={item.id} className={styles.items}>
          <div className={styles.items__checkthumb}>
            <img className={styles.items__thumb} src={item.image} alt={item.name} />
            <p className={styles.text_pink}>{item.name}</p>
            <p> &nbsp; x {item.quantity}</p>
          </div>

          <div className={styles.items__item}>
            <p className={styles.items__item__sum}>{`${formatToCurrency(item.price * item.quantity)} ??`}</p>
          </div>
        </div>
      )
    }
    else {
      return null
    }

  })

  const orderCart = async () => {
    var axios = require('axios');

    var user = await axios({
      method: 'GET',
      url: `${BASE_URL}api/user_session/${window.localStorage.sessionID}`
    });
    
    console.log(user.data)
    var data = JSON.stringify({
      "username": user.data.username,
      "account": "MOMO",
      "shipping_fee": 20000,
      "discount_order": 0,
      "discount_shipping": 0,
      "information_id": window.localStorage.information_id,
      "products": products
    });

    var config = {
      method: 'post',
      url: `${BASE_URL}api/order`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        //window.localStorage.removeItem(window.localStorage.getItem("username"))
        window.location.href = response.data
      })
      .catch(function (error) {
        console.log(error);
      });

  }

    const orderCartCash = async () => {
        var axios = require('axios');

        var user = await axios({
            method: 'GET',
            url: `${BASE_URL}api/user_session/${window.localStorage.sessionID}`
        });

        console.log(user.data)
        var data = JSON.stringify({
            "username": user.data.username,
            "account": "CASH",
            "shipping_fee": 20000,
            "discount_order": 0,
            "discount_shipping": 0,
            "information_id": window.localStorage.information_id,
            "products": products
        });

        var config = {
            method: 'post',
            url: `${BASE_URL}api/order`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                //window.localStorage.removeItem(window.localStorage.getItem("username"))
                window.location.href = response.data
            })
            .catch(function (error) {
                console.log(error);
            });

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
          <h3>1. Danh s??ch m???t h??ng</h3>
          <div className={styles.alldata}>
            <div className={styles.alldata__itemslist}>
              <div className={styles.alldata__itemslist__content}>
                {renderedItems}
              </div>
              <div className={styles.alldata__itemslist__shipinfo}>
                <div className={styles.alldata__itemslist__shipinfo__text}>
                  <p>(!) ???????c giao b???i GHN (giao t??? H??? Ch?? Minh)</p>
                </div>
                <div>
                  <p>Giao h??ng v??o th??? Ba, 15/7</p>
                </div>
              </div>
              <div>
                <h3 className={styles.alldata__itemslist__text}>2. Ch???n h??nh th???c thanh to??n</h3>
                <div className={styles.alldata__itemslist__paymentmethod}>
                  <div className={styles.alldata__itemslist__paymentmethod__options}>
                    <input type="radio" id="cash" name="fav_paymethod" value="cash" onChange={onChangePaymentMethod} />
                    <img src={cash} alt='...' className={styles.alldata__itemslist__paymentmethod__options__pic} />
                    <label htmlFor="cash">Thanh to??n ti???n m???t khi nh???n h??ng</label><br />
                  </div>

                  <div className={styles.alldata__itemslist__paymentmethod__options}>
                    <input type="radio" id="momo" name="fav_paymethod" value="momo" onChange={onChangePaymentMethod} />
                    <img src={momo} alt='...' className={styles.alldata__itemslist__paymentmethod__options__pic} />
                    <label htmlFor="momo">Thanh to??n b???ng v?? MoMo</label><br />
                  </div>

                  <div className={styles.alldata__itemslist__paymentmethod__options}>
                    <input type="radio" id="zalopay" name="fav_paymethod" value="zalopay" />
                    <img src={zalopay} alt='...' className={styles.alldata__itemslist__paymentmethod__options__pic} />
                    <label htmlFor="zalopay">Thanh to??n b???ng v?? ZaloPay</label>
                  </div>
                </div>
              </div>
              <div className={styles.alldata__itemslist__note} onClick={handleClickOpen}>
                <p>Th??m ghi ch?? giao h??ng</p>
              </div>
              <div>
                <TextField value={note} onChange={(e) => setNote(e.target.value)} placeholder="Ghi ch?? ..." />
              </div>
            </div>
            <div className={styles.alldata__paymentinfo}>
              <div className={styles.alldata__paymentinfo__diachi}>
                <div className={styles.alldata__paymentinfo__diachi__header}>
                  <div>
                    <div>
                      <h2>Giao t???i</h2>
                    </div>
                    <div className={styles.alldata__paymentinfo__diachi__namephone}>
                      <p>{window.localStorage.getItem("receiver")}</p>
                      <p>|</p>
                      <p>{window.localStorage.getItem("phone")}</p>
                    </div>
                    <div>
                      <p>{window.localStorage.getItem("address")}</p>
                    </div>
                  </div>
                  {/* <h3 className={styles.text_pink} onClick={handleClickOpenAddress}>Thay ?????i</h3> */}
                  {/* <Button variant="outlined" onClick={handleClickOpenAddress}>
                              Open simple dialog
                            </Button> */}
                </div>
                <SimpleDialog
                  selectedValue={selectedValue}
                  open={openAddress}
                  onClose={handleCloseAddress}
                />
                {selectedValue}
              </div>
              <div className={styles.alldata__paymentinfo__voucher}>
                <p>Khuy???n m??i</p>
                <div className={styles.alldata__paymentinfo__voucher__choosevoucer}>
                  <img src={Sale} alt='sale-icon' />
                  <p className={styles.text_pink}>Ch???n ho???c nh???p Khuy???n m??i kh??c</p>
                </div>

              </div>
              <div className={styles.alldata__paymentinfo__price}>
                <div className={styles.alldata__paymentinfo__price__sum}>
                  <div>
                    <p>T???ng ti???n</p>
                  </div>
                  <div>
                    <p>{`${formatToCurrency(sum)}??`}</p>
                  </div>
                </div>

                <div className={styles.alldata__paymentinfo__price__voucher}>
                  <div>
                    <p>Ph?? v???n chuy???n</p>
                  </div>
                  <div>
                    <p>+20.000??</p>
                  </div>
                </div>

                <div className={styles.alldata__paymentinfo__price__voucher}>
                  <div>
                    <p>Voucher</p>
                  </div>
                  <div>
                    <p>0??</p>
                  </div>
                </div>

                <hr />
                <div className={styles.alldata__paymentinfo__price__realprice}>
                  <div>
                    <p>T???ng c???ng</p>
                  </div>
                  <div>
                    <p className={styles.text_pink}>{sum == 0 ? "Vui l??ng ch???n s???n ph???m" : `${formatToCurrency(sum + 20000)}??`}</p>
                  </div>
                </div>
              </div>
              <div className={styles.alldata__paymentinfo__buybutton}>
                <button type='button' className={styles.alldata__paymentinfo__buybutton__element} onClick={() => {
                  if (paymentMethod == "cash") {
                    orderCartCash();
                  } else if (paymentMethod == "momo") {
                    orderCart();
                  }
                }}>?????t mua</button>
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
