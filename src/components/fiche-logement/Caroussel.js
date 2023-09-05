import React, { useState } from "react";
import precedent from '../../images/precedent.svg';
import suivant from '../../images/suivant.svg';
import '../../styles/fiche-logement.css';

const Caroussel = ({location}) => {
    const [index, setIndex] = useState(0);
    const pictures = location.pictures;

    const imagePrecedente = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? pictures.length - 1 : newIndex)
    }

    const imageSuivante = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= pictures.length ? 0 : newIndex)
    }
    
    return pictures.length !== 1 ? (
        <div className="carrousel">
            <img src={precedent} alt="fleche-precedent" className="fleche-precedent" onClick={imagePrecedente}/>
            <img src={pictures[index]} alt={location.title} className="img-carrousel"/>
            <img src={suivant} alt="fleche-suivant" className="fleche-suivant" onClick={imageSuivante}/>
            <p className="p-img">{`${index + 1}/${pictures.length}`}</p>
        </div>
    ) : (
        <div className="carrousel">
            <img src={pictures[index]} alt={location.title} className="img-carrousel"/>
        </div>
    )
    
}

export default Caroussel;