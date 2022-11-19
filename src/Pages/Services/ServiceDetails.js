import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/UserContext';
import SingleReview from './SingleReview';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext)
    const currentService = useLoaderData()
    const { _id, service, picture, price, description } = currentService
    const [currentReview , setCurrentReview] = useState([])

    useEffect(()=>{
        fetch(`https://musico-server.vercel.app/reviews/${_id}`)
        .then(res => res.json())
        .then(data =>{
            
         setCurrentReview(data)
        } )
    },[_id])

    return (
        <div className='py-32 px-3 md:px-32'>
            <div className='border border-rose-200 rounded-lg p-12'>

            <img src={picture} alt="" />

            <h1 className='text-4xl font-extrabold py-12 '>{service}</h1>
            <h1 className='text-xl font-bold py-12 '>{price}$/hr </h1>
            <p>{description}</p>

            <button className='mb-5 mt-16 w-52 flex items-center justify-center py-1 rounded-full rounded-br-lg font-semibold bg-rose-400'>Hire Me</button>
            <Link to={`/addreview/${_id}`} className='mb-12 w-52 flex items-center justify-center py-1 rounded-full rounded-tl-lg font-semibold bg-rose-400'>Add Review</Link>


     <p className={user ? 'hidden' : 'block'}>Please login to add a review</p>

           

            </div>
            <div>
            <h1 className="text-center my-3 text-4xl font-extrabold colored-text ">Review Section</h1>

                {
                    currentReview.length < 1 ? <p className='colored-text font-semibold text-center my-12'>No Review Founded</p> 
                    : <div> 
                        {
                            currentReview.map(cr => <SingleReview 
                            key={cr._id}
                            review = {cr}
                            ></SingleReview>)
                        }
                         </div>
                }
            </div>

        </div>
    );
};

export default ServiceDetails;