
import './component.scss';
import { useGlobalContext } from '../context';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import MobileMenu from './MobileMenu';
import titleIcon from '../assets/titleIcon.svg'
import cartIcon from '../assets/cart.svg'

function Header() {

    const { headerData, card } = useGlobalContext();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={'header-container'}>
            <h2 className={'headerTitle'}>
                <img src={titleIcon} alt={'titleIcon'} className='titleIcon' />
                Test Test
            </h2>
            <div className='navigationContainer'>
                {
                    headerData.map((item) => (
                        item.href ?
                            <span className='navigationItem' onClick={() => navigate(`${item.href}`)} key={item.id}>{item.title}</span>
                            :
                            <Link to={item.link} smooth={true} duration={500} key={item.id} className='navigationItem'>{item.title}</Link>
                    ))
                }
            </div>
            <span className='headerBtnBox'>
                <span
                    className='headerCardIconAndLoginBox'
                    onClick={() => {
                        if (card.length > 0) navigate('/purchase/payment')
                    }}
                >
                    <img src={cartIcon} alt={'cartIcon'} className='cartIcon' />
                    <span className='cartItemCount'>{card?.reduce((total, item) => total + item.cardCount, 0)}</span>
                </span>
                <button className='loginBtn'>
                    Login in
                </button>
                <GiHamburgerMenu
                    style={{
                        color: '#EF6731',
                        fontSize: '40px'
                    }}
                    onClick={() => setOpenMobileMenu(true)}
                    className='burgerIcon'
                />
            </span>
            <MobileMenu
                openMobileMenu={openMobileMenu}
                setOpenMobileMenu={setOpenMobileMenu}
            />
        </div>
    )
}

export default Header