import style from './pages.module.scss';
import ProductInfoSection from '../ProductPageSections/ProductInfoSection.jsx';
import { useLocation } from 'react-router-dom';

function ProductPage() {

    const location = useLocation();

    return (
        <div className={style.productPage}>
            <ProductInfoSection product={location.state.product} />
        </div>
    )
}

export default ProductPage;