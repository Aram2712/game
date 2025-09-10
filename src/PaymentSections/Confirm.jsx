
import style from './payment.module.scss';
import { IoCopy } from "react-icons/io5";

function Confirm ({paymentType}) {
    return(
        <div className={style.confirmSection}>
            <div className={style.paymentMethodsInputsContainer}>
                <span className={style.paymentMethodHeadText}>
                    <span>#2</span>
                    <span>Confirm & Pay</span>
                </span>
                <span className={style.choosenPaymentData}>
                    <span className={style.paymentMethodSelectPlaceholder} style={{color: 'white'}}>
                        <img
                            src={paymentType.icon}
                            className={style.paymentMethodSelectImg}
                            alt='icon'
                        />
                        {paymentType.title}
                    </span>
                    <span className={style.paymentMethodCode}>9asdd5f4a56sd4a6sgas</span>
                </span>
                <div className = {style.paymentDataBOx}>
                    <span className={style.paymentDataTitle}>Invoice ID</span>
                    <span className={style.paymentDataValue}>9asd54fa65sd4a56sd4f56aas</span>
                </div>
                <div className = {style.paymentDataBOx}>
                    <span className={style.paymentDataTitle}>E-Mail address</span>
                    <span className={style.paymentDataValue}>buyer@gmail.com</span>
                </div>
                <div className = {style.paymentDataBOx}>
                    <span className={style.paymentDataTitle}>Total Price</span>
                    <span className={style.paymentDataValue}>€ 999</span>
                </div>
                <div className = {style.paymentDataBOx}>
                    <span className={style.paymentDataTitle}>Total Price (USD)</span>
                    <span className={style.paymentDataValue}>$ 888</span>
                </div>
                <div className = {style.paymentAutomaticallyTextBox}>
                    Your order will be automatically processed once the payment is received.
                </div>
                <div className={style.stepAndqrBox}>
                    <div className={style.stepBox}>
                        <span className={style.stepOneSpan}>1</span>
                        <span className={style.stepLineSpan}></span>
                        <span className={style.stepTwoSpan}>2</span>
                    </div>
                    <div className={style.qrAndOtherDataBox}>
                        <p className={style.sendPaymenttext}>
                            You should send a payment to the following address
                        </p>
                        <p className={style.sendPaymentQrText}>
                            You can scan the QR code
                        </p>
                        <div className={style.qrCodeBox}>

                        </div>
                        <p className={style.sendPaymentQrText}>
                            Or copy the address below
                        </p>
                        <div className = {style.paymentAutomaticallyTextBox}>
                            aajhgajksdghajksdghajkshgkajs
                            <IoCopy style = {{color: '#FFFFFF4D'}}/>
                        </div>
                        <p className={style.sendPaymenttext} style = {{ marginTop: '45px', cursor: 'pointer' }}>
                            Make sure to send the exact amount
                        </p>
                        <p className={style.sendPaymentQrText}>
                            You can copy it below
                        </p>
                        <div className = {style.paymentAutomaticallyTextBox}>
                            aajhgajksdghajksdghajkshgkajs
                            <IoCopy style = {{color: '#FFFFFF4D', cursor: 'pointer'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirm