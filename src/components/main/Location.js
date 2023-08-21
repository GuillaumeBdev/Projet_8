import React, { useEffect, useState } from 'react';
import '../../styles/main.css';
import Thumb from './Thumb';

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
            {locations.map(({id, title, cover}) => {
                return (  
                    <Thumb key={id} title={title} cover={cover} id={id}/>
                )
            })}
        </div>
    );
}

export default Location;