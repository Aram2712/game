
import styles from './pages.module.scss';
import MainSection from '../MainSections/MainSections.jsx';
import ChooseUs from '../MainSections/ChooseUs.jsx';
import VideoSection from '../MainSections/VideoSection.jsx';
import FAQ from '../MainSections/FAQ.jsx';
import Footer from '../MainSections/Footer.jsx';

function Home() {
    return (
        <div className = {styles.Home}>
            <MainSection/>
            <ChooseUs/>
            <VideoSection/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default Home;