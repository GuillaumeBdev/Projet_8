import React from 'react';
import { NavLink } from 'react-router-dom';

const Cards = ({id, title, cover, location}) => {
    console.log(location)
    return (
        <NavLink to={`/fiche/${id}`} className='lien-location'>
            <figure className='figure-location'>
                <img className='img-location' src={cover} alt={title}/>
                <figcaption className='titre-location'>{title}</figcaption>
<div className='bg'></div>

            </figure> 
        </NavLink>
    )
};

export default Cards;