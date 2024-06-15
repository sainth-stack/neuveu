import './styles.scss'
import linkedIn from '../../../public/images/assets/linkedIn.svg'
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    return (
        <div>
            <footer className="footerContainer">
                <div className='innerContainer'>
                    <div className='contentContainer'>
                        <div style={{}}>
                            <a href="https://neuveu.com/">
                                <img loading="lazy" decoding="async" width="340" height="85" src="https://neuveu.com/wp-content/uploads/2022/03/neuveu_logo_white.png" className="attachment-large size-large wp-image-2613" alt="" />
                            </a>
                        </div>
                        <div>
                            <Link href="/contactus">
                                <p style={{ color: 'white' }}>CONTACT</p>
                            </Link>
                        </div>
                        <div>
                            <a className="icon-border elementor-icon iteck-social-icon elementor-social-icon-linkedin-in elementor-repeater-item-1331773" href="https://www.linkedin.com/company/neuveu/" target="_blank">
                                <Image src={linkedIn} width={20} height={20} alt='' />
                            </a>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginTop: '50px' }}>
                        <p className='footer-desc'>© 2024 Copyrights by <a className='company-text' href="https://neuveu.com/">Neuveu Software Pvt Ltd. </a>All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;