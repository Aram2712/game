
import style from './purchase.module.scss';
import { useState } from "react";
import {IoIosSearch} from "react-icons/io";
import productImg from '../assets/previewImage.svg'
import { Rating } from 'react-simple-star-rating'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from "react-router-dom";

function  ProductsCatalogSection() {

    const autoYear = new Date().getFullYear();

    const navigate = useNavigate();

    const [filterData, setFilterData] = useState([
        {
            id: 1,
            title: 'All products',
            active: true
        },
        {
            id: 2,
            title: 'Subscriptions',
            active: false
        },
        {
            id: 3,
            title: 'Hourbooster',
            active: false
        },
        {
            id: 4,
            title: 'CS:GO accounts',
            active: false
        },
        {
            id: 5,
            title: 'Addons',
            active: false
        }
    ]);

    const changeActiveFilterData = (filterData) => {
        setFilterData(prevState => prevState.map((item) => {
            if (filterData.id === item.id) {
                return { ...item, active: true };
            }
            else { return { ...item, active: false }; }
        }));
    }

    return (
        <section className={style.ProductsCatalogSection}>
            <h2 className={style.feautureProductsTitle}>
                PRODUCT CATALOG
            </h2>
            <div className={style.filterAndSearchContainer}>
                <div className={style.productsFilterBox}>
                    {
                        filterData.map((item, index) => (
                            <span
                                key={index}
                                className={style.filterItemSpan}
                                style = {{
                                    backgroundColor: item.active ? '#281E11' : '#191919',
                                    border: item.active ? '1px solid #FF9F19' : '1px solid #FFFFFF1A'
                                }}
                                onClick = {() => changeActiveFilterData(item)}
                            >
                                { item.title }
                            </span>
                        ))
                    }
                </div>
                <span className={style.searchBox}>
                    <IoIosSearch
                        className={style.searchIcon}
                    />
                    <input className={style.input} placeholder={'Enter the text'}/>
                </span>
            </div>
            <div className={style.allProductsBox}>
                {
                    Array.from({ length: 16 }).map((_, i) => (
                        <div className={style.productItem} key={i}>
                            <img
                                src = {productImg}
                                className={style.productImage}
                                alt = 'product image'
                                onClick = { () => navigate('/purchase/product') }
                            />
                            <div className={style.sliderItemDataBox} style={{background: 'none', alignItems: 'flex-end'}}>
                                <div className={style.sliderItemNamePriceBox}>
                                    <span className={style.sliderItemName}>NAME OF PRODUCT</span>
                                    <span className={style.sliderItemPrice}>999 $</span>
                                </div>
                                <span className={style.sliderItemStockSpan}>
                                    999 in Stock
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 className={style.ourProductTitle}>
                OUR <span>REVIEWS</span>
            </h2>
            <p className={style.ourProductDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua
            </p>
            <div className={style.reviewBox}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                >
                {
                    Array.from({length: 3}).map((_, i) => (
                        <SwiperSlide>
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
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
            <footer className={style.otherFooter}>
                <div className={style.footerContent}>
                    <p className={style.footerText}>
                        &copy; {autoYear} All rights reserved.
                    </p>
                </div>
            </footer>
        </section>
    )
}

export default ProductsCatalogSection;