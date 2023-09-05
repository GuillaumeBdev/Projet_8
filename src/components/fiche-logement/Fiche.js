import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Caroussel from "./Caroussel";
import Info from "./Info-logement";
import Collapse from "../collapse/Collapse";
import MainError from "../../Components/error/Main-error";

const Fiche = () => {

    const {id} = useParams();

    const [locations, setLocations] = useState([]);
    
    useEffect( () => {
        fetch('/locations.json')
        .then(res => res.json())
        .then(data => {
            setLocations(data);
        })
        .catch(error => {
            console.error(error);
          });
    },[]);

    

    if(locations.length > 0) {
        let locationSelected = locations.find(element => element.id === id);
       
        if(!locationSelected) { 
            return <MainError />
        } else {
            return ( 
                <main>
                    <Caroussel location={locationSelected}/>
                    <Info location={locationSelected} />
                    <div className="div-description-equipement">
                        <Collapse title='Description' data={locationSelected.description}/>
                        <Collapse title='Equipements' data={locationSelected.equipments} />
                    </div>        
                </main>
            ) 
        } 
    } else {
        return (
            <div>loading...</div>
        )
    }    
}

export default Fiche;