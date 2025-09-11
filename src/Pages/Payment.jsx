
import style from './pages.module.scss';
import PaymentPage from '../PaymentSections/PaymentPage.jsx';
import Footer from "../MainSections/Footer.jsx";

function Payment() {
    return (
        <div className={style.paymentPage}>
            <PaymentPage />
            <Footer />
        </div>
    )
}

export default Payment;