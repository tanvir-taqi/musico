import React, { useEffect } from 'react';
import Services from './Services';

const AllServices = () => {


    useEffect(()=>{
        document.title = 'Musico-Services';
    })
   

    return (
        <div>
            <Services></Services>
        </div>
    );
};

export default AllServices;