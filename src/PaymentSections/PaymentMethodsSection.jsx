import style from './payment.module.scss';
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";
import { useState } from "react";
import crypto from '../assets/crypto.svg';
import paypal from "../assets/paypal.svg";
import stripe from "../assets/stripe.svg";
import bitcoin from '../assets/bitcoin.svg';
import etherium from "../assets/etherium.svg";
import litecoin from '../assets/litecoin.svg';
import usdt from '../assets/usdt.svg';
import usdc from '../assets/usdc.svg';
import tron from '../assets/tron.svg';
import solana from '../assets/solana.svg';
import polygon from '../assets/polygon.svg';
import bnb from '../assets/bnb.svg';
import Confirm from './Confirm.jsx'

function PaymentMethodsSection(props) {

    const [showPayment, setShowPayment] = useState(false);
    const [paymentTypes, setPaymentTypes] = useState([
        {
            id: 1,
            icon: crypto,
            title: 'Crypto',
            subCategories: [
                {
                    id: 11,
                    title: 'USDT',
                    icon: usdt,
                    networks: [
                        {
                            id: 111,
                            title: 'TRON (TRX)',
                            icon: tron
                        },
                        {
                            id: 112,
                            title: 'Solana',
                            icon: solana
                        },
                        {
                            id: 113,
                            title: 'Ethereum (ETH)',
                            icon: etherium
                        },
                        {
                            id: 114,
                            title: 'Polygon (POL)',
                            icon: polygon
                        },
                    ]
                },
                {
                    id: 12,
                    title: 'USDC',
                    icon: usdc,
                    networks: [
                        {
                            id: 111,
                            title: 'BNB Smart Chain (BSC)',
                            icon: bnb
                        },
                        {
                            id: 112,
                            title: 'Solana',
                            icon: solana
                        },
                        {
                            id: 113,
                            title: 'Ethereum (ETH)',
                            icon: etherium
                        },
                        {
                            id: 114,
                            title: 'Polygon (POL)',
                            icon: polygon
                        },
                    ]
                },
                {
                    id: 13,
                    title: 'Litecoin',
                    icon: litecoin,
                    networks: [
                        {
                            id: 131,
                            title: 'Litecoin',
                            icon: litecoin
                        }
                    ]
                },
                {
                    id: 14,
                    title: 'Bitcoin',
                    icon: bitcoin,
                    networks: [
                        {
                            id: 141,
                            title: 'Bitcoin',
                            icon: bitcoin
                        }
                    ]
                },
                {
                    id: 15,
                    title: 'Ethereum',
                    icon: etherium,
                    networks: [
                        {
                            id: 151,
                            title: 'Ethereum (ETH)',
                            icon: etherium
                        },
                        {
                            id: 152,
                            title: 'Base',
                            icon: ''
                        }
                    ]
                },
            ]
        },
        {
            id: 2,
            icon: paypal,
            title: 'Paypal'
        },
        {
            id: 3,
            icon: stripe,
            title: 'Stripe'
        },
    ]);
    const [choosenPayment, setChoosenPayment] = useState(null);
    const [choosenCryptoMethod, setChoosenCryptoMethod] = useState(null);
    const [choosenNetwork, setChoosenNetwork] = useState(null);
    const [showCryptoMethod, setShowCryptoMethod] = useState(false);
    const [showNetwork, setShowNetwork] = useState(false);
    const [showConfirmed, setShowConfirmed] = useState(false);

    return (
        !showConfirmed ?
            <div className={style.paymentMethods}>
                <div className={style.paymentMethodsInputsContainer}>
                    <span className={style.paymentMethodHeadText}>
                        <span>#1</span>
                        <span>Order Information</span>
                    </span>
                    <div className={style.paymentMethodInputBox}>
                        <label>
                            Email Address
                        </label>
                        <input type={'text'} className={style.paymentMethodInput} placeholder={'Enter Your Email'} />
                    </div>
                    <div className={style.paymentMethodInputBox}>
                        <label>
                            Coupon Code
                        </label>
                        <input type={'text'} className={style.paymentMethodInput} placeholder={'Enter coupon if you have'} />
                    </div>
                    <div className={style.paymentMethodInputBox}>
                        <label>
                            Choose Payment Method
                        </label>
                        <div className={style.paymentMethodSelect}>
                            <div
                                className={style.selectPlaceholderAndIconBox}
                                onClick={() => {
                                    setShowPayment(!showPayment);
                                    setShowCryptoMethod(false);
                                    setShowNetwork(false);
                                }}
                            >
                                {
                                    choosenPayment ?
                                        <span className={style.paymentMethodSelectPlaceholder}>
                                            <img src={choosenPayment.icon} className={style.paymentMethodSelectImg}
                                                alt='icon' />
                                            {choosenPayment.title}
                                        </span>
                                        :
                                        <span className={style.paymentMethodSelectPlaceholder}>
                                            Choose Payment Method
                                        </span>
                                }
                                <span
                                    className={style.paymentMethodSelectIcon}
                                >
                                    {
                                        showPayment ?
                                            <IoChevronUpOutline
                                                style={{ color: '#FFFFFF4D' }}
                                            />
                                            :
                                            <IoChevronDownOutline
                                                style={{ color: '#FFFFFF4D' }}
                                            />
                                    }
                                </span>
                            </div>
                            {
                                showPayment ?
                                    <div className={style.selectOptionsBox}>
                                        {
                                            paymentTypes.map((option, index) => (
                                                <span
                                                    className={style.selectOptionElement}
                                                    onClick={() => {
                                                        setChoosenPayment(option);
                                                        setShowPayment(false)
                                                    }}
                                                >
                                                    <img src={option.icon} className={style.paymentMethodSelectImg} />
                                                    {option.title}
                                                </span>
                                            ))
                                        }
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </div>
                    {
                        choosenPayment?.subCategories ?
                            <div className={style.paymentMethodInputBox}>
                                <label>
                                    Choose Crypto Method
                                </label>
                                <div className={style.paymentMethodSelect}>
                                    <div className={style.selectPlaceholderAndIconBox}
                                        onClick={() => {
                                            setShowCryptoMethod(!showCryptoMethod)
                                            setShowPayment(false);
                                            setShowNetwork(false);
                                        }}
                                    >
                                        {
                                            choosenCryptoMethod ?
                                                <span className={style.paymentMethodSelectPlaceholder}>
                                                    <img src={choosenCryptoMethod.icon}
                                                        className={style.paymentMethodSelectImg}
                                                        alt='icon' />
                                                    {choosenCryptoMethod.title}
                                                </span>
                                                :
                                                <span className={style.paymentMethodSelectPlaceholder}>
                                                    Choose Crypto Method
                                                </span>
                                        }
                                        <span
                                            className={style.paymentMethodSelectIcon}
                                        >
                                            {
                                                showCryptoMethod ?
                                                    <IoChevronUpOutline
                                                        style={{ color: '#FFFFFF4D' }}
                                                    />
                                                    :
                                                    <IoChevronDownOutline
                                                        style={{ color: '#FFFFFF4D' }}
                                                    />
                                            }
                                        </span>
                                    </div>
                                    {
                                        showCryptoMethod ?
                                            <div className={style.selectOptionsBox}>
                                                {
                                                    choosenPayment?.subCategories?.map((option, index) => (
                                                        <span
                                                            className={style.selectOptionElement}
                                                            onClick={() => {
                                                                setChoosenCryptoMethod(option);
                                                                setShowCryptoMethod(false)
                                                            }}
                                                        >
                                                            <img src={option.icon}
                                                                className={style.paymentMethodSelectImg} />
                                                            {option.title}
                                                        </span>
                                                    ))
                                                }
                                            </div>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            :
                            null
                    }
                    {
                        choosenCryptoMethod ?
                            <div className={style.paymentMethodInputBox}>
                                <label>
                                    Choose Network
                                </label>
                                <div className={style.paymentMethodSelect}>
                                    <div
                                        className={style.selectPlaceholderAndIconBox}
                                        onClick={() => {
                                            setShowNetwork(!showNetwork)
                                            setShowCryptoMethod(false);
                                            setShowPayment(false);
                                        }}
                                    >
                                        {
                                            choosenNetwork ?
                                                <span className={style.paymentMethodSelectPlaceholder}>
                                                    <img src={choosenNetwork.icon} className={style.paymentMethodSelectImg}
                                                        alt='icon' />
                                                    {choosenNetwork.title}
                                                </span>
                                                :
                                                <span className={style.paymentMethodSelectPlaceholder}>
                                                    Choose Network
                                                </span>
                                        }
                                        <span
                                            className={style.paymentMethodSelectIcon}
                                        >
                                            {
                                                showNetwork ?
                                                    <IoChevronUpOutline
                                                        style={{ color: '#FFFFFF4D' }}
                                                    />
                                                    :
                                                    <IoChevronDownOutline
                                                        style={{ color: '#FFFFFF4D' }}
                                                    />
                                            }
                                        </span>
                                    </div>
                                    {
                                        showNetwork ?
                                            <div className={style.selectOptionsBox}>
                                                {
                                                    choosenCryptoMethod?.networks?.map((option, index) => (
                                                        <span
                                                            key={option.id}
                                                            className={style.selectOptionElement}
                                                            onClick={() => {
                                                                setChoosenNetwork(option);
                                                                setShowNetwork(false)
                                                            }}
                                                        >
                                                            <img src={option.icon} className={style.paymentMethodSelectImg} />
                                                            {option.title}
                                                        </span>
                                                    ))
                                                }
                                            </div>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
                <button
                    className={style.proceedToPaymentBtn}
                    onClick={() => {
                        if (choosenCryptoMethod || choosenPayment) setShowConfirmed(true);
                    }}
                >
                    Proceed to Payment
                </button>
            </div>
            :
            (choosenCryptoMethod || choosenPayment) &&
            <Confirm
                paymentType={choosenCryptoMethod || choosenPayment}
            />
    )
}

export default PaymentMethodsSection;