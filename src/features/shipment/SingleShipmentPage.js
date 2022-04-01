import React from 'react'
import { Footer, Header, Sidebar, GhostButton, CTAButton } from '../../components'
import styles from './SingleShipment.module.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Close from '../../assets/icons/Close.svg'
import DeliveryTruck from '../../assets/icons/DeliveryTruck.svg'
import Package from '../../assets/icons/Package.svg'
import Line from '../../assets/icons/Line.svg'
import success from '../../assets/icons/success.svg'
import Tasklist from '../../assets/icons/Tasklist.svg'
import GHN from '../../assets/img/GHN.png'
import Radiobuttonunchecked from '../../assets/icons/Radiobuttonunchecked.svg'
import CheckCircle from '../../assets/icons/CheckCircle.svg'

export default function SingleShipmentPage() {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div className={styles.SingleShipmentPageContent}>
            <div>
                <Sidebar />
            </div>
            <div className={styles.SingleShipmentPageContent__controller}>
                <p className={styles.SingleShipmentPageContent__controller__text}>Chi tiết kiện hàng</p>
                <div className={styles.SingleShipmentPageContent__controller__content}>
                    <div className={styles.SingleShipmentPageContent__controller__contentaf}>
                        <div className={styles.SingleShipmentPageContent__controller__content__header}>
                            <img src={GHN} alt='...'/>
                        </div>
                        <div className={styles.SingleShipmentPageContent__controller__contentaf__middle}>
                            <p className={styles.SingleShipmentPageContent__controller__contentaf__middle__name}>Thông tin đối tác giao hàng</p>
                            <p>Đơn vị vận chuyển: GHN VN</p>
                            <p>Đối tác giao hàng: Nguyễn Văn An</p>
                        </div>
                        <div>
                            <p className={styles.SingleShipmentPageContent__controller__contentaf__middle__name}>Mã vận đơn</p>
                            <p>GHNST0018037485VN</p>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.SingleShipmentPageContent__controller__content__icons}>
                        <div className={styles.SingleShipmentPageContent__controller__content__icons__item}>
                            <img src={Tasklist} alt='...'/>
                            <p>Đang xử lý</p>
                        </div>
                        <div className={styles.SingleShipmentPageContent__controller__content__icons__item}>
                            <p className={styles.SingleShipmentPageContent__controller__content__icons__item__dot}>...............</p>
                        </div>
                        <div  className={styles.SingleShipmentPageContent__controller__content__icons__item}>
                            <img src={Package} alt='...'/>
                            <p>Đã đóng gói</p>
                        </div>
                        <div  className={styles.SingleShipmentPageContent__controller__content__icons__item}>
                            <p className={styles.SingleShipmentPageContent__controller__content__icons__item__dot}>...............</p>
                        </div>
                        <div  className={styles.SingleShipmentPageContent__controller__content__icons__item}>
                            <img src={DeliveryTruck} alt='...'/>
                            <p>Đang vận chuyển</p>
                        </div>
                        <div  className={styles.SingleShipmentPageContent__controller__content__icons__item}>
                            <p className={styles.SingleShipmentPageContent__controller__content__icons__item__dot}>...............</p>
                        </div>
                        <div  className={styles.SingleShipmentPageContent__controller__content__icons__item}>
                            <img src={success} alt='...'/>
                            <p>Đã giao hàng</p>
                        </div>
                    </div>
                    <div className={styles.SingleShipmentPageContent__controller__content__stepsdone}>
                        <div className={styles.SingleShipmentPageContent__controller__content__stepsdone__items}>
                            <div>
                                <p>18/03 09:11</p>
                            </div>
                            <div>
                                <img src={CheckCircle} alt='...'/>
                            </div>
                            <div>
                                <p>Đã giao hàng</p>
                                <p>Kiện hàng của bạn đã được giao thành công.</p>
                            </div>
                        </div>
                        <div className={styles.SingleShipmentPageContent__controller__content__stepsdone__items}>
                            <div>
                                <p>18/03 08:00</p>
                            </div>
                            <div>
                                <img src={CheckCircle} alt='...'/>
                            </div>
                            <div>
                                <p>Kiện hàng sắp đến!</p>
                                <p>Đơn vị vận chuyển sẽ giao hàng tới bạn trong khoảng 1 giờ tới. Hãy chú ý điện thoại giao hàng bạn nhé!</p>
                            </div>
                        </div>
                        <div className={styles.SingleShipmentPageContent__controller__content__stepsdone__items}>
                            <div>
                                <p>18/03 06:50</p>
                            </div>
                            <div>
                                <img src={CheckCircle} alt='...'/>
                            </div>
                            <div>
                                <p>Đang giao hàng</p>
                                <p>GHN sẽ giao hàng cho bạn trong hôm nay!</p>
                            </div>
                        </div>
                        <div className={styles.SingleShipmentPageContent__controller__content__stepsdone__items}>
                            <div>
                                <p>28/02 08:12</p>
                            </div>
                            <div>
                                <img src={CheckCircle} alt='...'/>
                            </div>
                            <div>
                                <p>Đã rời khỏi trạm giao hàng</p>
                                <p>Kiện hàng của bạn đã rời khỏi trạm giao hàng</p>
                            </div>
                        </div>
                        <div className={styles.SingleShipmentPageContent__controller__content__stepsdone__items}>
                            <div>
                                <p>22/02 20:00</p>
                            </div>
                            <div>
                                <img src={CheckCircle} alt='...'/>
                            </div>
                            <div>
                                <p>Đã đến trạm giao hàng</p>
                                <p>Kiện hàng của bạn đã đến trạm giao hàng</p>
                            </div>
                        </div>
                        <div className={styles.SingleShipmentPageContent__controller__content__stepsdone__items}>
                            <div>
                                <p>20/02 19:00</p>
                            </div>
                            <div>
                                <img src={CheckCircle} alt='...'/>
                            </div>
                            <div>
                                <p>Hoàn tất đóng gói</p>
                                <p>Kiện hàng của bạn đã hoàn tất đóng gói và sẵn sàng bàn giao cho đơn vị vận chuyển</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}
