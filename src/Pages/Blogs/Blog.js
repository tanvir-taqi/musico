import React from 'react';

const Blog = ({sblog}) => {
    const {question,answer} = sblog
    return (
        <div className='md:p-10 p-2 md:m-20 m-4  space-y-3 color-bg rounded-xl'>
            <h2 className="text-2xl font-bold text-center">{question}</h2>
            <p>{answer}</p>
            
        </div>
    );
};

export default Blog;