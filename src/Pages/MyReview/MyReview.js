import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/UserContext';

const MyReview = () => {

    const [myreview , setMyreview] = useState([])
    const {user} = useContext(AuthContext)
    
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyreview(data))
    },[user?.email])
    
    return (
        <div className='py-32'>
            {
                
            }
        </div>
    );
};

export default MyReview;