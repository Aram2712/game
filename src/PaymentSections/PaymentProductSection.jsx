
import style from './payment.module.scss';
import preview from '../assets/previewImage.svg';
import { RiCloseLargeLine } from "react-icons/ri";

function PaymentProductSection() {
    return (
        <div className={style.paymentProduct}>
            <div className={style.productList}>
            {
                Array.from({length: 5}).map((_, i) => {
                    return(
                        <div className={style.productItem}>
                            <div className={style.productItemImageAndPriceBox}>
                                <img src = {preview} className={style.previewImage} alt={'Image'}/>
                                <div className={style.productNameAndPriceBox}>
                                    <span className={style.productNameBox}>Name Of Product <span>x1</span></span>
                                    <span className={style.productPriceBox}>999 €</span>
                                </div>
                            </div>
                            <span className={style.productDeleteIcon}>
                                <RiCloseLargeLine
                                    style = {{ color: '#DF3A3A' }}
                                />
                            </span>
                        </div>
                    )
                })
            }
            </div>
            <div className={style.allProductsTotalPrice}>
                <span>Total price</span>
                <span>999 €</span>
            </div>
        </div>
    )
}

export default PaymentProductSection;