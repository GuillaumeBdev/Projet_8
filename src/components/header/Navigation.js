import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='navigation'> 
            <ul>
                <li>
                    <NavLink to="/" className='lien-navigation'>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className='lien-navigation'>A Propos</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;