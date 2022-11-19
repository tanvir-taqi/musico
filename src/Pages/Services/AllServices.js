import React, { useEffect } from 'react';

import TotalServices from './TotalServices';

const AllServices = () => {


    useEffect(()=>{
        document.title = 'Musico-Services';
    })
   

    return (
        <div>
           <TotalServices></TotalServices>
        </div>
    );
};

export default AllServices;