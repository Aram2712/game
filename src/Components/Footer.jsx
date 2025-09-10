

import './component.scss'

function Footer() {

    const autoYear = new Date().getFullYear();

    return (
        <footer className={"otherFooter"}>
            <div className={'footerContent'}>
                <p className={'footerText'}>
                    &copy; {autoYear} All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;