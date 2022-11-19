import React, { useEffect, useState } from 'react';
import Spinning from '../../components/Spinning';
import SingleService from './SingleService';

const TotalServices = () => {
    const [services, setServices] = useState([])
  
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        fetch(`https://musico-server.vercel.app/allservices`)
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
           
        </div>
)};

export default TotalServices;