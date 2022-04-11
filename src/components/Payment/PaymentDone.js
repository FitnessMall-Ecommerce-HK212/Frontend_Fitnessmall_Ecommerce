import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";
import styles from "../../features/cart/PurchasedItems.module.css";
import Sale from "../../assets/logo/Sale.svg";
import CheckCircle from "../../assets/icons/CheckCircle.svg";
import { GhostButton } from "../Buttons";

const a1 = (
  <>
    <div className={styles.alldata__paymentinfo__diachi__namephone}>
      <p>Võ Hồng Phúc</p>
      <p>|</p>
      <p>0123456789</p>
    </div>
    <div>
      <p>
        Ký túc xá khu A ĐHQG TP Hồ Chí Minh, Phường Linh Trung, Quận Thủ Đức -
        TP Thủ Đức, Hồ Chí Minh
      </p>
    </div>
  </>
);

const a2 = (
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
);
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
          <ListItem
            button
            onClick={() => handleListItemClick(address)}
            key={index}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={address} />
          </ListItem>
        ))}
        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("Địa chỉ được thêm")}
        >
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

const PaymentDone = (props) => {
  function formatToCurrency(amount) {
    amount = amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&.");
    return amount.substring(0, amount.length - 3);
  }
  var sum = 0;
  const [selectedValue, setSelectedValue] = React.useState(addresses[0]);
  return (
    <section className={styles.body}>
      <div className={styles.alldata}>
        <div className={styles.alldata__itemslist}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
                <div>Giao dịch hoàn tất</div>
              <img src={CheckCircle} alt="..." style={{ width: "100%" }} />
              <div>Mã giao dịch: 1912184</div>
              <div>18:30 11/04/2022</div>
              <div>Người nhận: FitnessMall</div>
              <div>Số tài khoản: 123456789 Zalopay</div>
            </div>
          </div>
        </div>

        <div className={styles.alldata__paymentinfo}>
          <div className={styles.alldata__paymentinfo__diachi}>
            <div className={styles.alldata__paymentinfo__diachi__header}>
              <h2>Giao tới</h2>
              {/* <Button variant="outlined" onClick={handleClickOpenAddress}>
                              Open simple dialog
                            </Button> */}
            </div>
            {selectedValue}
          </div>
          <div className={styles.alldata__paymentinfo__voucher}>
            <p>Khuyến mãi</p>
            <div className={styles.alldata__paymentinfo__voucher__choosevoucer}>
              <img src={Sale} alt="sale-icon" />
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

            <hr />
            <div className={styles.alldata__paymentinfo__price__realprice}>
              <div>
                <p>Tổng cộng</p>
              </div>
              <div>
                <p className={styles.text_pink}>
                  {sum == 0
                    ? "Vui lòng chọn sản phẩm"
                    : `${formatToCurrency(sum)}đ`}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.alldata__itemslist__shipinfo__text}>
            <p>Được giao bởi J&amp;T Express</p>
          </div>
          <div className={styles.alldata__paymentinfo__buybutton}>
            <GhostButton value="Hủy đơn" />
          </div>
          <div className={styles.text_pink} style={{fontStyle: "italic", textAlign: "right"}}>
              Liên hệ hỗ trợ: 0919 999 999
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentDone;
