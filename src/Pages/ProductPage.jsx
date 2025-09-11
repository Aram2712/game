import style from './pages.module.scss';
import ProductInfoSection from '../ProductPageSections/ProductInfoSection.jsx';
import { useLocation } from 'react-router-dom';
import Footer from "../MainSections/Footer.jsx";

function ProductPage() {

    const location = useLocation();

    return (
        <div className={style.productPage}>
            <ProductInfoSection product={location.state.product} />
            <Footer />
        </div>
    )
}

export default ProductPage;