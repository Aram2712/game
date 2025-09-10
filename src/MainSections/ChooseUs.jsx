
import './Sections.scss';
import chooseUsbg1 from '../assets/chooseUsbg.svg';
// import chooseUsbg2 from '../assets/chooseUsbg2.svg';
import whiteList from '../assets/whitelist.svg';
import banchecker from '../assets/banchecker.svg';
import freeLifeTime from '../assets/freelifetime.svg';
import report from '../assets/reportbot.svg';
import payment from '../assets/payments.svg';
import command from '../assets/commandbot.svg';
import { Element } from 'react-scroll';

function ChooseUs() {
    return (
        <Element name='features' style={{ width: '100%' }}>
            <section className='chooseUsSection'>
                <img src={chooseUsbg1} className='chooseUsbg' />
                <div className='chooseUsSectionDataBox'>
                    <h4 className='chooseUsTitle'>Why You Should Choose Us</h4>
                    <div className='chooseUsData1Box'>
                        <div className='chooseUsItemBox'>
                            <img src={whiteList} className='itemBoxIcon' />
                            <div className='chooseUsTextsBox'>
                                <h5>White List</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis
                                    nostrud
                                </p>
                            </div>
                        </div>
                        <div className='chooseUsItemBox'>
                            <img src={banchecker} className='itemBoxIcon' />
                            <div className='chooseUsTextsBox'>
                                <h5>Banchecker</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis
                                    nostrud
                                </p>
                            </div>
                        </div>
                        <div className='chooseUsItemBox'>
                            <img src={freeLifeTime} className='itemBoxIcon' />
                            <div className='chooseUsTextsBox'>
                                <h5>Free Lifetime Steam Hourbooster</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis
                                    nostrud
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='chooseUsData1Box'>
                        <div className='chooseUsItemBox'>
                            <img src={report} className='itemBoxIcon' />
                            <div className='chooseUsTextsBox'>
                                <h5>Report Bot</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis
                                    nostrud
                                </p>
                            </div>
                        </div>
                        <div className='chooseUsItemBox'>
                            <img src={payment} className='itemBoxIcon' />
                            <div className='chooseUsTextsBox'>
                                <h5>Payments</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis
                                    nostrud
                                </p>
                            </div>
                        </div>
                        <div className='chooseUsItemBox'>
                            <img src={command} className='itemBoxIcon' />
                            <div className='chooseUsTextsBox'>
                                <h5>Command Bot</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis
                                    nostrud
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={chooseUsbg1} className='chooseUsbg2' />
            </section>
        </Element>
    )
}

export default ChooseUs