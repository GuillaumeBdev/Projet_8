import React from 'react';
import { NavLink } from 'react-router-dom';

const Thumb = ({id, title, cover}) => {
    return (
        <NavLink to={`/fiche/${id}`} className='lien-location'>
            <figure className='figure-location'>
                <img className='img-location' src={cover} alt={title}/>
                <figcaption className='titre-location'>{title}</figcaption> 
            </figure> 
        </NavLink>
    )
};

export default Thumb;