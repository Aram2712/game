
import './Sections.scss';
import { Link } from "react-router-dom";

function Footer() {

    const autoYear = new Date().getFullYear();

    return (
        <footer className='footerSection'>
            <div className='footerContent'>
                <p className='footerText'>
                    &copy; {autoYear} All rights reserved.
                </p>
                <nav className='footerNav'>
                    <Link to='/terms-of-service'>Terms of Service</Link>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                    <a href='https://discord.gg/0' target='_blank' rel='noopener noreferrer'>Discord</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer