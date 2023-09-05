import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/error.css';

const MainError = () => {
    return (
        <main className='main-error'>
            <p className='p-404'>404</p>
            <p className='p-oups'>Oups ! La page que vous demandez n'existe pas</p>
            <NavLink to='/' className='retour-accueil'>Retourner sur la page d'accueil</NavLink>
        </main>
    )
}

export default MainError;