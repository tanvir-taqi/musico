import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const SIngleMyReview = ({ myreviewSingle, handleDelete }) => {

    const { customer, email, photo, price, message, serviceName, _id } = myreviewSingle
    return (
        <div>
            
            <div className='bg-rose-200 md:mx-12 p-10 rounded'>
                <h1 className="text-center text-3xl font-extrabold my-3">{serviceName}</h1>
                <h1 className="text-2xl font-bold flex items-center my-3"> <span><img className='w-16 rounded-full mx-3' src={photo} alt="" /></span> {customer}</h1>
                <p className='text-center py-3'>{message}</p>
                <button  className='mb-5 mt-16 w-52 flex items-center justify-center py-1 rounded-full rounded-br-lg font-semibold bg-rose-400'><span className='mx-2'>Edit Review</span> <FaEdit></FaEdit> </button>
                <button onClick={() => handleDelete(_id)} className='mb-12 w-52 flex items-center justify-center py-1 rounded-full rounded-tl-lg font-semibold bg-rose-400'> <span className='mx-2'>Delete Review</span><FaTrash></FaTrash></button>
            </div>
        </div>
    );
};

export default SIngleMyReview;