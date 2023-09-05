import React from "react";
import etoile from '../../images/etoile.svg';
import etoileGrise from '../../images/etoile-grise.svg';
import Tag from "./Tag";


const Info = ({location}) => {
    const title = location.title;
    const localisation = location.location;
    const tags = location.tags;
    const note = location.rating;
    const hote = location.host;
    
    const range = [1, 2, 3, 4, 5];

    const imgEtoile = <img src={etoile} alt="etoile-colorée" className="etoile-logement"/>
    const etoileGrey = <img src={etoileGrise} alt="étoile-grise" className="etoile-logement"/>
    
    let notesEtoiles = range.map((rangeElement) => 
        note >= rangeElement ? (
            <span key={rangeElement.toString()}>{imgEtoile}</span>
        ) : <span key={rangeElement.toString()}>{etoileGrey}</span>
    )

    return (
        <div className="info">
            <div className="info-logement">
                <h2 className="title-logement">{title}</h2>
                <p className="localisation-logement">{localisation}</p>
                <ul className="liste-tag">
                    {tags.map((tag, index) => {
                        return (
                            <Tag tag={tag} index={index} key={index}/>
                        )
                    })}
                </ul>
            </div>
            <div className="flex-droite">
                <div className="info-hote">
                    <p className="nom-hote">{hote.name}</p>
                    <img src={hote.picture} alt="hote" className="img-hote"/>
                </div>
                <div className="div-etoiles">
                    {notesEtoiles}
                </div>     
            </div> 
        </div>
    )
};

export default Info;