import React, { useEffect, useState } from 'react';

const About = () => {

    const [services, setServices] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://musico-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    useEffect(() => {
        fetch('https://musico-server.vercel.app/allreviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className='p-10 mx-4 md:mx-20 color-bg'>
            <h1 className="text-center my-3 text-4xl font-extrabold ">About</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <div className='md:flex hidden justify-center items-center '>
                    <div>
                        <h1 className='text-5xl colored-text font-extrabold'>{services.count}</h1>
                        <p className='text-2xl font-bold'>Services</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-center py-3 text-2xl font-extrabold colored-text">Musico</h1>
                    <p>In today's culture, music is a large part of our lives. Most people like music, but some love it. Musicians want to create their own music. They love going to stores and checking out the newest equipment. When someone becomes a musician they learn many things, that non-musicians would never know. Not everyone has the drive to be a musician. Being a musician has effected me in many positive ways.
                        Learning music at a young age taught me responsible, how to manage my time, and how to communicate with others more quickly and efficiently. As I got older if gave me a hobby and a way express myself. I learned how to read and write music. It is important to be able to read and write music because I will be able to play anything I want. I learned all the different terms that musicians use. I learned how to play music in a band. Both marching and rock band.
                        When someone is a musician, they have a different social life then people who are not. Musicians go to a lot of music clubs and concerts. Musicians also love to talk to other musicians about the newest instruments, brands, technology and ideas they have. Musicians are also popular with women. Women like musicians for their talents and love of music. Performing on stage gets you a lot of attention from people who like your music.
                        Musicians also like to create their own music. Musicians express their feelings and political stand points in their music. Musicians also play songs they like to hear. So they may do some cover songs from their favorite band on stage. They spend countless hours perfecting their instrument, so they can sound good on stage. Musicians start bands to have fun and to make their dreams come true.
                        Today's Musician does many things that you normally would not learn if you were not a musician. Whether its practicing alone, playing on stage, listening to music in my car, or talking to friends about music.
                    </p>
                </div>
                <div className='flex justify-center items-center md:hidden '>
                    <div>
                        <h1 className='text-5xl colored-text font-extrabold'>{services.count}</h1>
                        <p className='text-2xl font-bold'>Services</p>
                    </div>
                </div>
                <div className='flex justify-center items-center '>
                    <div>
                        <h1 className='text-5xl colored-text font-extrabold'>{reviews.length}</h1>
                        <p className='text-2xl font-bold'>Reviews</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;