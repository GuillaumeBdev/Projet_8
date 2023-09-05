import React, { useEffect, useState } from 'react';
import '../../styles/main.css';
import Card from './card.js';

const Location = () =>{
    const [locations, setLocations] = useState([]);
    
    useEffect(() => {
        fetch('./locations.json')
        .then(res => res.json())
        .then((result) => {
            setLocations(result);
        })
    }, []);
    
    return (
        <div className='ul-grid'>
            {locations.map(({id, title, cover, location}) => {
                return (  
                    <Card key={id} title={title} cover={cover} id={id} location={location}/>
                )
            })}
        </div>
    );
}

export default Location;