import React, {useState} from 'react'
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
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

export default function Confirm() {

  const items = useSelector(selectCart)
  var sum = 0
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const adresses = ['username@gmail.com', 'user02@gmail.com'];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function formatToCurrency(amount){
    amount = (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
    return amount.substring(0, amount.length-3); 
  }

  const onChecked = (itemId) => {
    dispatch(checkItem({ id: itemId}))
  }

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({id: itemId}))
  }

  const renderedItems = items.map((item) => {
      if (item.isChosen) {
        sum = sum + item.price * item.quantity
        return (
            <div key={item.id} className={styles.items}>
              <div className={styles.items__checkthumb}>
                <img className={styles.items__thumb} src={item.image} alt={item.name}/>
                <p className={styles.text_pink}>{item.name}</p>
                <p> &nbsp; x {item.quantity}</p>
              </div>
        
              <div className={styles.items__item}>
                <p className={styles.items__item__sum}>{`${formatToCurrency(item.price * item.quantity)} đ`}</p>
              </div>
            </div>
          )
      }
      else {
        return null
      }

  })
  return (
    items.length === 0?

    <NoItemInCart />

    :
    <div>
      <div>
        <Header />
      </div>
        <section className={styles.body}>
            <h3>1. Danh sách mặt hàng</h3>
            <div className={styles.alldata}>
                <div className={styles.alldata__itemslist}>
                    <div className={styles.alldata__itemslist__content}>
                    {renderedItems}
                    </div>
                    <div className={styles.alldata__itemslist__shipinfo}>
                        <div className={styles.alldata__itemslist__shipinfo__text}>
                            <p>(!) Được giao bởi J&amp;T Express (giao từ Hồ Chí Minh)</p>
                        </div>
                        <div>
                            <p>Giao hàng vào thứ Ba, 15/3</p>
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.alldata__itemslist__text}>2. Chọn hình thức thanh toán</h3>
                        <div className={styles.alldata__itemslist__paymentmethod}>
                            <div className={styles.alldata__itemslist__paymentmethod__options}>
                                <input type="radio" id="cash" name="fav_paymethod" value="cash"/>
                                <img src={cash} alt='...' className={styles.alldata__itemslist__paymentmethod__options__pic}/>
                                <label htmlFor="cash">Thanh toán tiền mặt khi nhận hàng</label><br/>
                            </div>

                            <div className={styles.alldata__itemslist__paymentmethod__options}>
                                <input type="radio" id="momo" name="fav_paymethod" value="momo"/>
                                <img src={momo} alt='...' className={styles.alldata__itemslist__paymentmethod__options__pic}/>
                                <label htmlFor="momo">Thanh toán bằng ví MoMo</label><br/>
                            </div>
                            
                            <div className={styles.alldata__itemslist__paymentmethod__options}>
                                <input type="radio" id="zalopay" name="fav_paymethod" value="zalopay"/>
                                <img src={zalopay} alt='...' className={styles.alldata__itemslist__paymentmethod__options__pic}/>
                                <label htmlFor="zalopay">Thanh toán bằng ví ZaloPay</label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.alldata__itemslist__note} onClick={handleClickOpen}>
                        <p>Thêm ghi chú giao hàng</p>
                    </div>
                    <div>
                        {/* <Button variant="outlined" onClick={handleClickOpen}>
                            Thêm ghi chú
                        </Button> */}
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Thêm Ghi Chú</DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                                Thêm ghi chú cho người giao hàng
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Ghi chú"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose}>Hủy</Button>
                            <Button onClick={handleClose}>Lưu</Button>
                            </DialogActions>
                        </Dialog>
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
                        <p className={styles.text_pink}>Chọn hoặc nhập Khuyến mãi khác</p>
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

                        <hr/>
                        <div className={styles.alldata__paymentinfo__price__realprice}>
                        <div>
                            <p>Tổng cộng</p>
                        </div>
                        <div>
                            <p className={styles.text_pink}>{sum==0? "Vui lòng chọn sản phẩm" : `${formatToCurrency(sum)}đ`}</p>
                        </div>
                        </div>
                    </div>
                    <div className={styles.alldata__paymentinfo__buybutton}>
                        <button type='button' className={styles.alldata__paymentinfo__buybutton__element}>Đặt mua</button>
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
