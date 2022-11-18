import React from 'react';

const SingleTracks = ({track}) => {
    const {picture,name,band} = track;
    return (
        <div className='color-bg flex justify-center items-center flex-col p-6 md:p-10 rounded-lg '>
            <img src={picture} className="w-96 h-96 " alt="" />
            <h1 className='colored-text font-semibold text-xl my-2'>{name}</h1>
            <h1 className=' font-semibold text-xl my-2'>{band}</h1>
            <button className='colored-text bg-rose-100 py-2 px-4 rounded-lg font-bold'>Download</button>
            
        </div>
    );
};

export default SingleTracks;