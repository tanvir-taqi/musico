import React from 'react';
import { Link } from 'react-router-dom';
import './singleService.css';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SingleService = ({ services }) => {

    const { _id, service, picture, price, description } = services
    return (
        <div className=' service-card'>
            <div className={`course-card rounded-3xl  p-6    border   relative`}>

                <PhotoProvider>
                    <PhotoView
                        className='photo-view'
                        src={picture}>

                        <img src={picture} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <h1 className='text-xl font-semibold py-2'>{service}</h1>
                <p>{description.length > 100 ? description.slice(0, 100) : description}...</p>
                <div className=' py-6 flex lg:flex-row flex-col justify-between items-center '>

                    <Link to={`/services/${_id}`} className='w-52 flex items-center justify-center py-1 rounded-full rounded-br-lg font-semibold bg-rose-400'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;