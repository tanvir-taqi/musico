import React, { useEffect } from 'react';

import About from './About/About';
import Banner from './Banner';
import FavoriteTracks from './FavoriteTracks/FavoriteTracks';
import ServiceHome from './ServiceHome/ServiceHome';

const Home = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(() => {
        document.title = 'Musico';
    })
   
    return (
        <div className='py-32'>
            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <About></About>
            <FavoriteTracks></FavoriteTracks>
        </div>
    );
};

export default Home;