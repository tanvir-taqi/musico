import React from 'react';
import { FaUser } from 'react-icons/fa';

const SingleReview = ({review}) => {
    const {customer,message,photo} = review
    return (
        <div className='md:m-6 p-6 color-bg rounded flex flex-col items-center '>
            <div className=''>{photo?<img src={photo} className='w-10 h-10 rounded-xl' alt="" />:<FaUser></FaUser>}</div> 
        <h1 className="text-center text-2xl mb-4 font-bold">  {customer ? customer : "Anonymous"}</h1>
        <p className='text-center'>{message}</p>            
        </div>
    );
};

export default SingleReview;