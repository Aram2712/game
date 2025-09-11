
import style from './product.module.scss';
import productImg from '../assets/previewImage.svg';
import ProductReviewSection from '../ProductPageSections/ProductReviewSection.jsx';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context.jsx';
import { HiOutlineMinus } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi";

function ProductInfoSection({ product }) {

    const { card, setCard } = useGlobalContext();
    const [currentProduct, setCurrentProduct] = useState({ ...product, cardCount: 1 });
    const navigate = useNavigate();

    const decrement = () => {
        if (currentProduct.cardCount > 1) {
            setCurrentProduct(prevState => { return { ...prevState, cardCount: prevState.cardCount - 1 } });
        }
    }

    const increment = () => {
        setCurrentProduct(prevState => { return { ...prevState, cardCount: prevState.cardCount + 1 } });
    }

    const addToCard = () => {
        setCard([...card, { ...currentProduct, cardId: Date.now() }]);
    }

    return (
        <div className={style.productPageContainer}>
            <div className={style.productInfoBox}>
                <div className={style.productInfoImageBox}>
                    <img src={productImg} className={style.productInfoImage} alt='product image' />
                </div>
                <div className={style.productDataBox}>
                    <div className={style.productInfoNameBox}>
                        <h2>{product?.name}</h2>
                        <span className={style.productInfoStockSpan}>
                            In Stock
                        </span>
                    </div>
                    <div className={style.productTotalPriceBox}>
                        <span className={style.productTotalPriceTitle}>
                            Total price
                        </span>
                        <span className={style.productTotalPriceValueText}>
                            {product.price} €
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
                                onClick={decrement}
                            >
                                <HiOutlineMinus style={{ fontSize: '18px', color: '#ffffff4d' }} />
                            </button>
                            {currentProduct?.cardCount || 0}
                            <button
                                className={style.productCountBtn}
                                onClick={increment}
                            >
                                <HiOutlinePlus style={{ fontSize: '18px', color: '#ffffff4d' }} />
                            </button>
                        </div>
                    </div>
                    <div className={style.buttonsBox}>
                        <button
                            className={style.shopNowBtn}
                            onClick={addToCard}
                        >
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
            <ProductReviewSection />
        </div>
    )
}

export default ProductInfoSection;