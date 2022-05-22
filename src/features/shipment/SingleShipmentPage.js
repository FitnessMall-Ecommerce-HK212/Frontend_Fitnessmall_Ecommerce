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

export default function SingleShipmentPage({ match }) {
    const { shipmentId } = match.params
    const logs = [
        {
            "status": "picking",
            "updated_date": "2022-05-18T14:40:46.934Z"
        },
        {
            "status": "picked",
            "updated_date": "2022-05-19T14:40:59.662Z"
        },
        {
            "status": "storing",
            "updated_date": "2022-05-24T14:41:19.708Z"
        },
        {
            "status": "return",
            "updated_date": "2022-06-01T14:52:59.485Z"
        }
    ]

    const isBeforeToday = (date) => {
        var dateO = new Date(date);
        var today = new Date();
        return dateO > today;
    }

    const renderStatus = (status) => {
        if (status == "picking") {
            return <>
                <p>Đang xử lý</p>
                <p>Đơn hàng của bạn đang được xử lý</p>
            </>
        } else if (status == "picked") {
            return <>
                <p>Đã đóng gói</p>
                <p>Kiện hàng của bạn đã hoàn tất đóng gói</p>
            </>
        } else if (status == "storing") {
            return <>
                <p>Đang vận chuyển</p>
                <p>Kiện hàng của bạn đang được vận chuyển</p>
            </>
        } else if (status == "return") {
            return <>
                <p>Giao thành công</p>
                <p>Kiện hàng của bạn đã được giao thành công.</p>
            </>
        }

    }

    const renderShipmentState = logs.map(log => {
        return <div className={styles.SingleShipmentPageContent__controller__content__stepsdone__items}>
            <div className={styles.SingleShipmentPageContent__controller__content__stepsdone__items__text}>
                <p>{isBeforeToday(log.updated_date) ? "Dự kiến" : "Hoàn thành"} : {log.updated_date.substring(0, 10)}</p>
            </div>
            <div>
                {isBeforeToday(log.updated_date) ? <img src={Radiobuttonunchecked} alt='...' /> : <img src={CheckCircle} alt='...' />}
            </div>
            <div>
                {renderStatus(log.status)}
            </div>
        </div>;
    })

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
                                <img src={GHN} alt='...' />
                            </div>
                            <div className={styles.SingleShipmentPageContent__controller__contentaf__middle}>
                                <p className={styles.SingleShipmentPageContent__controller__contentaf__middle__name}>Thông tin đối tác giao hàng</p>
                                <p>Đơn vị vận chuyển: GHN VN</p>
                                <p>Đối tác giao hàng: Nguyễn Văn An</p>
                            </div>
                            <div>
                                <p className={styles.SingleShipmentPageContent__controller__contentaf__middle__name}>Mã vận đơn</p>
                                <p>{shipmentId}</p>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.SingleShipmentPageContent__controller__content__icons}>
                            <div className={styles.SingleShipmentPageContent__controller__content__icons__item}>
                                <img src={Tasklist} alt='...' />
                                <p>Đang xử lý</p>
                            </div>
                            <div className={styles.SingleShipmentPageContent__controller__content__icons__item}>
                                <p className={styles.SingleShipmentPageContent__controller__content__icons__item__dot}>...............</p>
                            </div>
                            <div className={styles.SingleShipmentPageContent__controller__content__icons__item}>
                                <img src={Package} alt='...' />
                                <p>Đã đóng gói</p>
                            </div>
                            <div className={styles.SingleShipmentPageContent__controller__content__icons__item}>
                                <p className={styles.SingleShipmentPageContent__controller__content__icons__item__dot}>...............</p>
                            </div>
                            <div className={styles.SingleShipmentPageContent__controller__content__icons__item}>
                                <img src={DeliveryTruck} alt='...' />
                                <p>Đang vận chuyển</p>
                            </div>
                            <div className={styles.SingleShipmentPageContent__controller__content__icons__item}>
                                <p className={styles.SingleShipmentPageContent__controller__content__icons__item__dot}>...............</p>
                            </div>
                            <div className={styles.SingleShipmentPageContent__controller__content__icons__item}>
                                <img src={success} alt='...' />
                                <p>Đã giao hàng</p>
                            </div>
                        </div>
                        <div className={styles.SingleShipmentPageContent__controller__content__stepsdone}>
                            {renderShipmentState}
                        </div>
                    </div>
                    <div >
                        <Link to="/history/order" className={styles.pink_link}>&lt;&lt; Quay lại danh sách đơn hàng</Link>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
