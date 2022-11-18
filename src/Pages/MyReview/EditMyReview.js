import React from 'react';

const EditMyReview = ({ currentMyReview ,handleUpdate,reviewElement,handleNewMessage}) => {
    const { serviceName  , message} = currentMyReview
    return (
        <div className='pt-32  md:px-20'>
            <form  onSubmit={handleUpdate}>
                <h2 className="text-4xl black">You are Updating a Review for </h2>

                <div className='flex flex-col space-y-3'>
                    <input name="name" type="text" defaultValue={serviceName} readOnly className=" w-full p-3 " />

                </div>
                <textarea name="review" ref={reviewElement} onChange={handleNewMessage}  className="textarea textarea-bordered h-24 w-full my-3 p-3" defaultValue={message} required></textarea>
                <input  className='font-bold text-lg bg-[#F9C6CD] py-2 px-4 rounded my-3 cursor-pointer' type="submit" value="Update Review Now" />
            </form>
        </div>
    );
};

export default EditMyReview;