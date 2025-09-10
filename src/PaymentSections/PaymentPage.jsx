
import style from './payment.module.scss';
import PaymentProductSection from './PaymentProductSection';
import PaymentMethodsSection from './PaymentMethodsSection';

function PaymentPage() {
    return (
        <div className={style.paymentPage}>
            <PaymentProductSection/>
            <PaymentMethodsSection/>
        </div>
    )
}

export default PaymentPage;