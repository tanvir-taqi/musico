import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../AuthContext/UserContext';
import Spinning from '../../components/Spinning';

const SignUp = () => {

    const { createUser, userUpdate, setLoading, loading } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        document.title = 'Musico-Sign Up';
    })

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const name = form.name.value;
        const photo = form.photo.value;
        

        if (password === confirm) {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    const profile = {
                        displayName: name,
                        photoURL: photo,
                    }
                    userUpdate(profile)
                        .then(res => {

                            const currentUser = {
                                email: user.email
                            }

                            fetch('https://musico-server.vercel.app/jwt', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(currentUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    localStorage.setItem('musico-token', data.token)
                                    form.reset()
                                })

                        })
                        .catch(err => {
                            setLoading(false)
                            console.log(err)
                        })
                        setLoading(false)
                        navigate(from, { replace: true });

                })
                .catch(err => {
                    setLoading(false)
                    if(err){
                        setErrorMsg("Password should be at least 6 characters long..");
                    }
                });
        } else {
            setErrorMsg("Password and confirmation don't match");

        }
    }

    if (loading) {
        return <Spinning></Spinning>
    }
    return (
        <div className=" py-32 w-full flex justify-center">
            <div className='p-10 bg-[#FAC6D7] rounded w-96'>
                <h1 className="text-center font-bold text-2xl">Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="name" className='font-bold'>Name</label>
                        <input required type="text" name="name" id="name" placeholder="Name" className="p-2 w-full" />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="name" className='font-bold'>Photo URL</label>
                        <input required type="text" name="photo" id="photo" placeholder="Photo URL" className="p-2 w-full" />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input required type="email" name="email" id="email" placeholder="Email" className="p-2 w-full" />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="password" className='font-bold'>Password</label>
                        <input required type="password" name="password" id="password" placeholder="Password" className="p-2 w-full" />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="confirm" className='font-bold'>Confirm Password</label>
                        <input required type="password" name="confirm" id="confirm" placeholder="Confirm Password" className="p-2 w-full" />
                    </div>
                    <p className='text-red-600'>{errorMsg}</p>
                    <input type="submit" className='cursor-pointer font-bold text-lg bg-[rgba(233,31,98,0.32)] hover:text-[rgb(233,31,99)] py-2 px-4 rounded my-3' value="Sign Up" />
                </form>
                <h4>Already Have an Account? <Link to='/login' className='text-[rgb(233,31,99)]'>Sign In</Link></h4>
            </div>

        </div>
    );
};

export default SignUp;