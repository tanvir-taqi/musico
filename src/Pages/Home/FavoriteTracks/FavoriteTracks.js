import React, { useEffect, useState } from 'react';
import SingleTracks from './SingleTracks';

const FavoriteTracks = () => {

    const [favTracks, setFavTracks] = useState([])

    useEffect(() => {
        fetch('favtracks.json')
            .then(res => res.json())
            .then(data => setFavTracks(data))
    }, [])


    return (
        <div className='py-16'>
            <h1 className="text-center my-3 text-4xl font-extrabold colored-text ">My Favorite Tracks of All TIme</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'> 
                {
                    favTracks.map(ft => <SingleTracks
                        key={ft.id}
                        track={ft}
                    ></SingleTracks>)
                }
            </div>
        </div>
    );
};

export default FavoriteTracks;