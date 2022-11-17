import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {

    const navigate = useNavigate()
    
    const handleAddService = (event)=>{

        event.preventDefault();
        const form = event.target;
        const service = form.name.value;
        const description = form.description.value;
        const picture = form.photo.value;
        const price = form.price.value;

        const newService = {
             service ,
             description ,
             picture ,
             price 
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                   
                    toast.success('Service Added Successfully', {
                        position: "top-center",
                        theme:'dark'
                  
                    });
                    form.reset();
                    
                    
                    
                }
            })
            .catch(err => alert(err));


    }

    return (
        <div className='py-32 md:px-20'>
            <ToastContainer></ToastContainer>
        <form onSubmit={handleAddService}>
            <h2 className="text-5xl mb-6 font-extrabold colored-text">You are Adding a Service</h2>
            
            <div className='flex flex-col space-y-3'>
                <input name="name" type="text" placeholder="Service Name"  className=" w-full p-3 " required/>                 
                <input name="photo" type="text" placeholder="Photo URL"  className=" w-full p-3 " required/>                 
                <input name="price" type="number" placeholder="Price per Hour"  className=" w-full p-3 " required/>
            </div>
            <textarea name="description" className="textarea textarea-bordered h-24 w-full my-3 p-3" placeholder="Service Description" required></textarea>
            <input className='font-bold text-lg bg-[#F9C6CD] py-2 px-4 rounded my-3 cursor-pointer' type="submit" value="Add Service Now" />
        </form>
    </div>
    );
};

export default AddServices;