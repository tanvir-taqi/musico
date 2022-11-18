import React from 'react';

const EditMyReview = ({ currentMyReview ,handleUpdate,reviewElement,handleNewMessage ,setModal}) => {
    const { serviceName  } = currentMyReview
    return (
        <div className='pt-32  md:px-20'>
            <div className='flex justify-end'>

            <button onClick={()=>setModal(false)} className=' font-extrabold text-2xl'>X</button>
           
            </div>

            <form  onSubmit={handleUpdate}>
                <h2 className="text-4xl black py-6">You are Updating a Review for </h2>

                <div className='flex flex-col space-y-3'>
                    <input name="name" type="text" defaultValue={serviceName} readOnly className=" w-full p-3 font-semibold " />

                </div>
                <textarea name="review" ref={reviewElement} onChange={handleNewMessage}  className="textarea textarea-bordered h-24 w-full my-3 p-3" placeholder='Place Your New Review' required></textarea>
                <input  className='font-bold text-lg bg-[#F9C6CD] py-2 px-4 rounded my-3 cursor-pointer' type="submit" value="Update Review Now" />
            </form>
            
        </div>
    );
};

export default EditMyReview;