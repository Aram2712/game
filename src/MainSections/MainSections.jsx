
import './Sections.scss';
import Header from '../Components/Header.jsx';
import mainImage from '../assets/main.svg'
import down from '../assets/down.svg'
import { Link, Element } from 'react-scroll';

function MainSection() {

    return (
        <Element name='home' style={{ width: '100%' }}>
            <section className='mainSection'>
                <div className='titleAndMainImageBox'>
                    <h1 className='mainTitle'>
                        <span>/// TEST TEST TE</span>
                        Test Test Test Test Test Test Test Test
                    </h1>
                    <img src={mainImage} alt='main image' className='mainImage' />
                </div>
                <Link className='scrollBellowBox' to="features" smooth={true} duration={500}>
                    <p>Scroll down below</p>
                    <img src={down} className='downArrow' />
                </Link>
            </section>
        </Element>
    )
}

export default MainSection