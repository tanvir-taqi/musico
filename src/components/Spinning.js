import React from 'react';

const Spinning = () => {
    return (
        <div>
             <div className='py-36 text-center'>
            <div className="flex items-center justify-center ">
                <div className="w-16 h-16 border-b-4 border-red-600 rounded-full animate-spin"></div>
            </div>
        </div>
        </div>
    );
};

export default Spinning;