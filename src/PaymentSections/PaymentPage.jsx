
import style from './payment.module.scss';
import PaymentProductSection from './PaymentProductSection';
import PaymentMethodsSection from './PaymentMethodsSection';
import { useState } from 'react';

function PaymentPage() {

    const [showConfirmed, setShowConfirmed] = useState(false);

    return (
        <div className={style.paymentPage}>
            <PaymentProductSection
                showConfirmed={showConfirmed}
            />
            <PaymentMethodsSection
                showConfirmed={showConfirmed}
                setShowConfirmed={setShowConfirmed}
            />
        </div>
    )
}

export default PaymentPage;