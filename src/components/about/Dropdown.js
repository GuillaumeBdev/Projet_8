import React from 'react';
import flecheBas from '../../images/fleche-bas.png';
import flecheHaut from '../../images/fleche-haut.png';
import '../../styles/about.css';
import { useState } from 'react';

const DropDown = ({ title, data}) => {
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div>
            <h3 className='h3-description' onClick={() => setIsOpen(false)}>{title} <span><img src={flecheHaut} alt='fleche-directionnel'/></span></h3>
            {typeof data === 'string' ? 
                <p className='p-description'>{data}</p> : 
                <ul className='p-description'>
                    {data.map((element, index) => {
                        return (
                            <li key={`${index}-${element}`}>{element}</li>
                        )
                    })}
                </ul> 
            }         
        </div>        
    ) : (
        <div>
            <h3 className='h3-description' onClick={() => setIsOpen(true)}>{title} <span><img src={flecheBas} alt='fleche-directionnel'/></span></h3> 
        </div>      
    )
}

export default DropDown;
