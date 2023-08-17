import React from 'react';
import logo from '../../images/logo.png';
import '../../styles/header.css';

const Logo = () => {
    return (
        <h1 className='logo-h1'>K<span className='logo-img'><img src={logo} alt='logo kasa'></img></span>sa</h1>
    )
}

export default Logo;