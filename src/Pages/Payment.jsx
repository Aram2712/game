
import style from './pages.module.scss';
import PaymentPage from '../PaymentSections/PaymentPage.jsx';

function Payment() {
    return (
        <div className={style.paymentPage}>
            <PaymentPage/>
        </div>
    )
}

export default Payment;