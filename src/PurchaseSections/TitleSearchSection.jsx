
import style from './purchase.module.scss';
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import viewReview from '../assets/viewReviews.svg';
import delivery from '../assets/delivery.svg';
import support from '../assets/support.svg';
import secure from '../assets/secure.svg';
import huge from '../assets/huge.svg';
import {useNavigate} from "react-router-dom";

function TitleSearchSection() {

    const navigate = useNavigate();

    return (
        <section className = {style.titleSection}>
            <div className = {style.titleBox}>
                <h2 className={style.titleText}>
                    FAST AND RELIABLE <br/>
                    IN
                    <span>
                        TEST TEST
                    </span>
                    <span className={style.diagonalBox}>
                        <span>SHOP</span>
                    </span>
                </h2>
            </div>
            <p className={style.titleSectionDescriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className={style.inputsAndButtonsBox}>
                <span className={style.inputBox}>
                    <IoIosSearch
                        className={style.searchIcon}
                    />
                    <input className={style.input} placeholder={'Search for products...'}/>
                </span>
                <div className={style.buttonsBox}>
                    <button
                        className={style.shopNowBtn}
                        onClick={() => {navigate('/purchase/payment')}}
                    >
                        <GiShoppingCart className={style.buttonIcon}/>
                        SHOP NOW
                    </button>
                    <button
                        className={style.reviewBtnBox}
                        onClick = {() => {
                            window.scrollTo({
                                top: document.body.scrollHeight,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <img src = {viewReview}  alt = 'review icon' style={{ marginRight: '10px' }} />
                        VIEW REVIEWS
                    </button>
                </div>
            </div>
            <div className={style.whyAreWeBox}>
                <h4 className={style.whyAreWeTitle}>Why are we and no one else?</h4>
                <div className={style.whyAreWeItemsBox}>
                    <div className={style.whyAreWeItem}>
                        <span>
                            <img src = { delivery } alt = 'delivery icon' style={{ marginRight: '10px' }} />
                            Instant Delivery
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud
                        </p>
                    </div>
                    <div className={style.whyAreWeItem}>
                        <span>
                            <img src = { secure } alt = 'delivery icon' style={{ marginRight: '10px' }} />
                            Secure Payments
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud
                        </p>
                    </div>
                    <div className={style.whyAreWeItem}>
                        <span>
                            <img src = { support } alt = 'delivery icon' style={{ marginRight: '10px' }} />
                            24/7 Support
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud
                        </p>
                    </div>
                    <div className={style.whyAreWeItem}>
                        <span>
                            <img src = { huge } alt = 'delivery icon' style={{ marginRight: '10px' }} />
                            Huge Selection
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TitleSearchSection;