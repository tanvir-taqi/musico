import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';
import './Services.css'
import Spinning from '../../components/Spinning';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    // services load on home ui
    useEffect(() => {
        setLoading(true)
        fetch(`https://musico-server.vercel.app/services/?service=3`)
            .then(res => res.json())
            .then(data => {
               
                setServices(data.services)
                setLoading(false)
            })
    }, [])

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
    <div className='flex my-3 justify-center'>

                <Link to='/services'  className={` text-lg text-gray-800 color-bg px-4 py-2 rounded-lg font-bold text-center`} >See All</Link>
    </div>
            

        </div>
    );
};

export default Services;