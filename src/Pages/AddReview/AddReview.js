import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/UserContext';

const AddReview = () => {
    const currentService = useLoaderData()
    const {_id , service,price} = currentService


   const { user } = useContext(AuthContext);

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = user?.email || 'unregistered';
       
        const message = form.message.value;
        const date = new Date()

        const review = {
            service: _id,
            serviceName: service,
            price,
            customer: name,
            email,
            photo: user?.photoURL,
            message,
            date:date
        }

       

        fetch('https://musico-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                   
                    form.reset();
                    window.history.go(-1)
                    
                }
            })
            .catch(err => alert(err));


    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='py-32 md:px-20'>
            <form onSubmit={handleAddReview}>
                <h2 className="text-4xl colored-text">You are Adding a Review for {service}</h2>
                <h4 className="text-3xl">Price: {price} $/hr</h4>
                <div className='flex flex-col space-y-3'>
                    <input name="name" type="text" placeholder="Name" defaultValue={user?.displayName} className=" w-full p-3 " />                 
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className=" w-full p-3 " readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full my-3 p-3" placeholder="Your Message" required></textarea>
                <input className='font-bold text-lg bg-[rgba(233,31,98,0.32)] hover:text-[rgb(233,31,99)] py-2 px-4 rounded my-3 cursor-pointer' type="submit" value="Add Review Now" />
            </form>
        </div>
    );
};

export default AddReview;