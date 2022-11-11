import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='py-32'>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;