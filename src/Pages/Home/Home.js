import React, { useEffect } from 'react';
import Services from '../Services/Services';
import About from './About/About';
import Banner from './Banner';
import FavoriteTracks from './FavoriteTracks/FavoriteTracks';

const Home = () => {

    useEffect(() => {
        document.title = 'Musico';
    })
   
    return (
        <div className='py-32'>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <FavoriteTracks></FavoriteTracks>
        </div>
    );
};

export default Home;