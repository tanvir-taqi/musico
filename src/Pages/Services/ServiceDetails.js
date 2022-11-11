import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const currentService = useLoaderData()
    const { _id, service, picture, price, description } = currentService

    return (
        <div className='py-32 px-3 md:px-32'>
            <div className='border border-rose-200 rounded-lg p-12'>

            <img src={picture} alt="" />

            <h1 className='text-4xl font-extrabold py-12 '>{service}</h1>
            <h1 className='text-xl font-bold py-12 '>{price}$/hr </h1>
            <p>{description}</p>

            <button className='my-12 w-52 flex items-center justify-center py-1 rounded-full rounded-br-lg font-semibold bg-rose-400'>Hire Me</button>

            </div>

        </div>
    );
};

export default ServiceDetails;