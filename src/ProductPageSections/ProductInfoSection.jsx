
import style from './product.module.scss';
import productImg from '../assets/previewImage.svg';
import { useState } from "react";
import {GiShoppingCart} from "react-icons/gi";
import viewReview from "../assets/viewReviews.svg";
import ProductReviewSection from '../ProductPageSections/ProductReviewSection.jsx';
import { useNavigate } from "react-router-dom";

function ProductInfoSection() {

    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const decrements = () => {
        if(count>0) {
            setCount(count => --count)
        }
    }

    const increment = () => {
        setCount(count => ++count);
    }

    return (
        <div className={style.productPageContainer}>
            <div className={style.productInfoBox}>
                <div className={style.productInfoImageBox}>
                    <img src = {productImg} className={style.productInfoImage} alt = 'product image'/>
                </div>
                <div className={style.productDataBox}>
                    <div className={style.productInfoNameBox}>
                        <h2>NAME OF PRODUCT</h2>
                        <span className={style.productInfoStockSpan}>
                            In Stock
                        </span>
                    </div>
                    <div className={style.productTotalPriceBox}>
                        <span className={style.productTotalPriceTitle}>
                            Total price
                        </span>
                        <span className={style.productTotalPriceValueText}>
                            999 €
                        </span>
                    </div>
                    <p className={style.productInfoDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                    <div className={style.productInfoQuantityBox}>
                        <label>Quantity</label>
                        <div className={style.productInfoCountAndBtnBox}>
                            <button
                                className={style.productCountBtn}
                                onClick={ decrements }
                            >
                                -
                            </button>
                            { count }
                            <button
                                className={style.productCountBtn}
                                onClick={increment}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className={style.buttonsBox}>
                        <button className={style.shopNowBtn}>
                           Add to Card
                        </button>
                        <button
                            className={style.reviewBtnBox}
                            onClick={() => navigate('/purchase/payment')}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            <ProductReviewSection/>
        </div>
    )
}

export default ProductInfoSection;