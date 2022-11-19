import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="container md:mx-auto md:p-6 p-2 md:py-44  my-10 color-bg flex flex-col md:flex-row items-center gap-6" >
                <div >

                <h1 className='text-5xl font-extrabold'>Welcome To My Site <span className='colored-text'>MUSICO</span></h1>
                <p className='text-2xl font-semibold'>I provide many services related to music. Basically I am a bass guitarist .But I am also providing some services for a couple of years successfully. Check My Services. </p>
                </div>
                <div>
                        <img src="https://i.ibb.co/Qvc6B0T/pink-headphones-wireless-digital-device-1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;