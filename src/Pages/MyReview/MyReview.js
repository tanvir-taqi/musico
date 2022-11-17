import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthContext/UserContext';

import SIngleMyReview from './SIngleMyReview';

const MyReview = () => {

    const [myreview, setMyreview] = useState([])
    const { user } = useContext(AuthContext)

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete?')

        if (confirm) {

            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
                headers:{
                    authorization: `Bearer ${localStorage.getItem('musico-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        toast.success('Deleted Successfully', {
                            position: "top-center",
                            theme:'dark'
                      
                        });
                        const remaining = myreview.filter(mrc => mrc._id !== id);
                        setMyreview(remaining);
                    }
                })

        } else {
            return
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setMyreview(data)
            })
    }, [user?.email])

    return (
        <div className='py-32'>
            <ToastContainer/>

            {
                myreview.length > 0 ? myreview.map(mr => <SIngleMyReview
                    key={mr._id}
                    myreviewSingle={mr}
                    handleDelete={handleDelete}

                ></SIngleMyReview>)
                    : <div> <h1 className="text-center text-3xl colored-text font-extrabold my-3">No Review Found of Yours</h1></div>
            }
        </div>
    );
};

export default MyReview;