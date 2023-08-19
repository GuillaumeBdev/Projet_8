import React from 'react';
import logo from '../../images/logo-blanc.png';
import '../../styles/footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={logo} alt='logo kasa' className='logo-footer'/>
            <p className='p-footer'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;