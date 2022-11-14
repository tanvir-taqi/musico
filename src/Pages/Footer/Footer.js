import React from 'react';
import { FaFacebook, FaSpotify, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='pt-24 md:px-24 p-6 text-center color-bg' >
        <div className='flex flex-col'>
            <h1 className="text-3xl  font-bold">My Contacts</h1>
            <p className='my-6'><strong>Phone :</strong> +8800000000</p>
            <p><strong>Email :</strong> fakemail@email.com</p>
            <div className='flex my-6 justify-center'>
                <div className='mx-2 '><FaFacebook></FaFacebook></div>
                <div className='mx-2 '><FaSpotify></FaSpotify></div>
                <div className='mx-2 '><FaTwitter></FaTwitter></div>
            </div>
           

        </div>

        <p className='text-center'><small>All Copyrights reserved: 2022</small></p>
    </div>
    );
};

export default Footer;