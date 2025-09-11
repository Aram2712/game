
import style from './payment.module.scss';
import preview from '../assets/previewImage.svg';
import { RiCloseLargeLine } from "react-icons/ri";
import { useGlobalContext } from '../context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentProductSection() {

    const { card, setCard } = useGlobalContext();

    const navigate = useNavigate();

    const deleteItem = (item) => {
        const updatedCard = card?.filter((product) => product.cardId !== item.cardId);
        setCard(updatedCard);
        if (updatedCard.length === 0) {
            navigate('/purchase');
        }
    }

    return (
        <div className={style.paymentProduct}>
            <div className={style.productList}>
                {
                    card?.map((item) => {
                        return (
                            <div className={style.productItem} key={item.id}>
                                <div className={style.productItemImageAndPriceBox}>
                                    <img src={preview} className={style.previewImage} alt={'Image'} />
                                    <div className={style.productNameAndPriceBox}>
                                        <span className={style.productNameBox}>{item.name} <span>X{item.cardCount}</span></span>
                                        <span className={style.productPriceBox}>{item.cardCount * item.price} €</span>
                                    </div>
                                </div>
                                <span className={style.productDeleteIcon}>
                                    <RiCloseLargeLine
                                        style={{ color: '#DF3A3A' }}
                                        onClick={deleteItem.bind(this, item)}
                                    />
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <div className={style.allProductsTotalPrice}>
                <span>Total price</span>
                <span>
                    {
                        card?.reduce((total, item) => total + (item.price * item.cardCount), 0) + ' €'
                    }
                </span>
            </div>
        </div>
    )
}

export default PaymentProductSection;