import style from './pages.module.scss';
import ProductInfoSection from '../ProductPageSections/ProductInfoSection.jsx';

function ProductPage() {
    return (
        <div className={style.productPage}>
            <ProductInfoSection />
        </div>
    )
}

export default ProductPage;