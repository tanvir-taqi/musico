import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';
import './Services.css'
import Spinning from '../../components/Spinning';

const Services = () => {
    const [services, setServices] = useState([])
    const [count, setCount] = useState(0)
    const [seeAll, setSeeAll] = useState(3)
    const [loading, setLoading] = useState(true)

 


    // services load on ui
    useEffect(() => {
        setLoading(true)
        fetch(`https://musico-server.vercel.app/services/?service=${seeAll}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
                setServices(data.services)
                setLoading(false)
            })
    }, [seeAll])

    if (loading) {
        const newLocal = <Spinning></Spinning>;
        return newLocal

    }
    return (
        <div className='py-32 '>
            <div className='services-container'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        services={service}
                    ></SingleService>)
                }
            </div>
            <div className={`text-center ${seeAll == count ? 'hidden' : 'block'}`}>
                <button onClick={() => setSeeAll(count)} className={`text-lg text-gray-800 color-bg px-4 py-2 rounded-lg font-bold`} >See All</button>
            </div>

        </div>
    );
};

export default Services;