import React from 'react';
import Header from '../Components/header/Header';
import Banner from '../Components/header/Banner'
import Footer from '../Components/footer/Footer';
import Container from '../Components/main/Container';


const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Banner title='Chez vous, partout et ailleurs' className='div-banner' />
            <Container />
            <Footer />
        </React.Fragment>
    )
};

export default Home;