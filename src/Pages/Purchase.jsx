
import styles from "./Pages.module.scss";
import TitleSearchSection from "../PurchaseSections/TitleSearchSection.jsx";
import OurProductSection from "../PurchaseSections/OurProductSection.jsx";
import ProductsCatalogSection from "../PurchaseSections/ProductsCatalogSection.jsx";

function Purchase(props) {
    return(
        <div className={styles.Purchase}>
            <TitleSearchSection/>
            <OurProductSection/>
            <ProductsCatalogSection/>
        </div>
    )
}

export default Purchase;