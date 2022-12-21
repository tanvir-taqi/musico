import React from 'react';
import { FaUser } from 'react-icons/fa';

const SingleReview = ({review}) => {
    const {customer,message,photo} = review
    return (
        <div className='md:m-6 p-6 color-bg rounded grid grid-cols-1 md:grid-cols-2 justify-center items-center '>
          <div className='flex  justify-start items-center  '>
          <div className='mx-3'>{photo?<img src={photo} className='w-10 h-10 rounded-full' alt="" />:<FaUser></FaUser>}</div> 
        <h1 className=" text-2xl font-bold">  {customer ? customer : "Anonymous"}</h1>
          </div> 
        <p className='text-center'>{message}</p>            
        </div>
    );
};

export default SingleReview;