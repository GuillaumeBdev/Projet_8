import React from 'react';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import Fiche from '../Components/fiche-logement/Fiche';

const FicheLogement = () => {
    return (
        <React.Fragment>
            <Header />
            <Fiche />
            <Footer />
        </React.Fragment>
        
    )
};

export default FicheLogement;