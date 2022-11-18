import React from 'react';
import Services from '../Services/Services';
import About from './About/About';
import Banner from './Banner';

const Home = () => {
   
    return (
        <div className='py-32'>
            <Banner></Banner>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;