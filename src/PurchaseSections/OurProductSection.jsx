
import style from './purchase.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function OurProductSection() {

    const navigate = useNavigate();

    return (
        <section className={style.ourProductSection}>
            <h2 className={style.ourProductTitle}>
                OUR <span>PRODUCTS</span>
            </h2>
            <p className={style.ourProductDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua
            </p>
            <h4 className={style.feautureProductsTitle}>
                Featured products
            </h4>
            <div className={style.ourProductSliderBox}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1} // базово для мобайла
                    breakpoints={{
                        // when window width >= 640px -> tablet
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        // when window width >= 1024px -> desktop
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                >
                    {
                        Array.from({ length: 10 }).map((_, i) => (
                            <SwiperSlide>
                                <div className={style.ourProductCaruselItem}>
                                    <div className={style.sliderItemDataBox}>
                                        <div className={style.sliderItemNamePriceBox}>
                                            <span className={style.sliderItemName}>NAME OF PRODUCT</span>
                                            <span className={style.sliderItemPrice}>999 $</span>
                                        </div>
                                        <span className={style.sliderItemArrowSpan}>
                                            <FaChevronRight
                                                style = {{color: '#FFFFFF80'}}
                                                className={style.carouselItemIcon}
                                                onClick = { () => navigate('/purchase/product') }
                                            />
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default OurProductSection