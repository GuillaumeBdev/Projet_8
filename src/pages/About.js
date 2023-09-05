import React from 'react';
import Header from '../Components/header/Header';
import Banner from '../Components/header/Banner';
import Footer from '../Components/footer/Footer';
import Collapse from '../Components/collapse/Collapse';
import '../styles/about.css';


const recommandation = [
    {
        key : 'recommandation-1',
        title : "Fiabilité",
        data : 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    },
    {
        key : 'recommandation-2',
        title : "Respect",
        data : 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
        key : 'recommandation-3',
        title : "Service",
        data : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {   
        key : 'recommandation-4',
        title : "Sécurité",
        data : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
]

const About = () => { 
    return (
        <React.Fragment>
            <Header />
            <Banner title={null} className='banner-about' />
            <main className='div-collapse'>
                <ul>
                    {recommandation.map(({ key, title, data}) => (
                        <li key={key}>
                            <Collapse title={title} data={data} className='titre-deroule' className2='h3-deroule' classP='p-deroulant'/>
                        </li> 
                    ))}
                </ul>
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default About;
