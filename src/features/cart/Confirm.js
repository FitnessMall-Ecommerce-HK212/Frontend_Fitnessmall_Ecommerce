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
import { blue } from '@mui/material/colors';


const a1 = <>
<div className={styles.alldata__paymentinfo__diachi__namephone}>
                        <p>Võ Hồng Phúc</p> 
                        <p>|</p>
                        <p>0123456789</p>
                      </div>
                      <div>
                        <p>Ký túc xá khu A ĐHQG TP Hồ Chí Minh, Phường Linh Trung, Quận Thủ Đức - TP Thủ Đức, Hồ Chí Minh</p>
                      </div>
</>

const a2 = 
<>
<div className={styles.alldata__paymentinfo__diachi__namephone}>
                        <p>Võ Ngọc Quang</p> 
                        <p>|</p>
                        <p>0123999999</p>
                      </div>
                      <div>
                        <p>10-12 Đinh Tiên Hoàng Quận 1 Thành phố Hồ Chí Minh</p>
                      </div>
</>
const addresses = [a1, a2];

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

export default function Confirm() {

  const items = useSelector(selectCart)
  var sum = 0
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [note, setNote] = React.useState('');

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
  function formatToCurrency(amount){
    amount = (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
    return amount.substring(0, amount.length-3); 
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
                        <TextField value={note} onChange={(e)=>setNote(e.target.value)}/>
                        {/* <Dialog open={open} onClose={handleClose}>
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
                                onChange={(e)=>setNote(e.target.value)}
                            />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose}>Hủy</Button>
                            <Button onClick={handleClose}>Lưu</Button>
                            </DialogActions>
                        </Dialog> */}
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
                        {selectedValue}
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