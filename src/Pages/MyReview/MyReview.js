import React, { useContext, useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthContext/UserContext';
import Spinning from '../../components/Spinning';


import EditMyReview from './EditMyReview';

import SIngleMyReview from './SIngleMyReview';

const MyReview = () => {

    const [myreview, setMyreview] = useState([])
    const [currentMyReview, setCurrentMyReview] = useState([])
    const { user, logOut } = useContext(AuthContext)
    const [modal, setModal] = useState(false)
    const reviewElement = useRef()
    const [reviewLoading, setReviewLoading] = useState(false)
    const [myUpdatedReview , setMyUpdatedReview] = useState('')


    
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('musico-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setMyreview(data)
            })
    }, [user?.email ,myUpdatedReview])


    

 




    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete?')
        if (confirm) {

            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('musico-token')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return logOut()
                    }
                    return res.json()
                })
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully', {
                            position: "top-center",
                            theme: 'dark'

                        });
                        const remaining = myreview.filter(mrc => mrc._id !== id);
                        setMyreview(remaining);
                    }
                })

        } else {
            return 
        }
    }


    const handleNewMessage = () => {

        setMyUpdatedReview(reviewElement.current.value);


    }

    const handleUpdateModal = (id) => {
        setModal(true)
        const currentReview = myreview.find(myCurrRev => myCurrRev._id === id)
        setCurrentMyReview(currentReview);
    }

    const handleUpdate = (event) => {
        event.preventDefault()
        setReviewLoading(true)
        const newReview = myUpdatedReview
        console.log(newReview);
        const newUpdateReview = {
            message: newReview
        }


        fetch(`http://localhost:5000/reviews/${currentMyReview._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('musico-token')}`
            },
            body: JSON.stringify(newUpdateReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Updateded Successfully', {
                        position: "top-center",
                        theme: 'dark'

                    })

                    setReviewLoading(false)
                    setModal(false)
                }
                const newRemaining = myreview.filter(mrc => mrc._id );
                setMyreview(newRemaining);

            })

    }


    if (reviewLoading) {
        return <Spinning></Spinning>
    }

    return (
        <div className='py-32'>
            <ToastContainer />

            {
                myreview.length > 0 ? myreview.map(mr => <SIngleMyReview
                    key={mr._id}
                    myreviewSingle={mr}
                    handleDelete={handleDelete}
                    handleUpdateModal={handleUpdateModal}


                ></SIngleMyReview>)
                    : <div> <h1 className="text-center text-3xl colored-text font-extrabold my-3">No Review Found of Yours</h1></div>
            }

            <div className={`fixed inset-0 bg-rose-400 p-3 md:w-1/2 h-full ${modal ? 'block' : 'hidden'}`}>
                <div>
                    <EditMyReview
                        currentMyReview={currentMyReview}
                        handleUpdate={handleUpdate}
                        handleNewMessage={handleNewMessage}
                        reviewElement={reviewElement}
                    ></EditMyReview>
                </div>

            </div>

        </div>

    );
};

export default MyReview;