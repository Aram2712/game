
import styles from "./pages.module.scss";
import TitleSearchSection from "../PurchaseSections/TitleSearchSection.jsx";
import OurProductSection from "../PurchaseSections/OurProductSection.jsx";
import ProductsCatalogSection from "../PurchaseSections/ProductsCatalogSection.jsx";
import Footer from "../MainSections/Footer.jsx";

function Purchase() {
    return (
        <div className={styles.Purchase}>
            <TitleSearchSection />
            <OurProductSection />
            <ProductsCatalogSection />
            <Footer />
        </div>
    )
}

export default Purchase;