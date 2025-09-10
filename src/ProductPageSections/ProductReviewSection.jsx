
import style from './product.module.scss';
import {Rating} from "react-simple-star-rating";

function ProductReviewSection() {

    const autoYear = new Date().getFullYear();

    return (
        <div className={style.productReviewSection}>
            <h4>Reviews about this product</h4>
            <div className={style.productReviewsBox}>
            {
                Array.from({length: 9}, (_, i) => {
                    return (
                        <div className={style.reviewItemBox} key={i}>
                            <div className={style.reviewTextDateBox}>
                                <span>Thanks for the product!</span>
                                <span>26.05.2025</span>
                            </div>
                            <div className={style.reviewItemRatingBox}>
                                <Rating
                                    initialValue={3}
                                    iconsCount={5}
                                    size={25}
                                    fillColor={'#FF9F19'}
                                    emptyColor={'#323232'}
                                    allowHover={false}
                                />
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <footer className={style.otherFooter}>
                <div className={style.footerContent}>
                    <p className={style.footerText}>
                        &copy; {autoYear} All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default ProductReviewSection;