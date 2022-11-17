import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/UserContext';

const SignUp = () => {

    const {createUser , userUpdate,setLoading ,loading} = useContext(AuthContext);
    const [ errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate();
    const location = useLocation();
    
  
    const from = location.state?.from?.pathname || "/";

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const name = form.name.value;
        const photo = form.photo.value;

        if (password === confirm){
            createUser(email, password)
            .then(result => {
                const user = result.user;
                const profile = {
                    displayName:name,
                    photoURL:photo,
                }
                userUpdate(profile)
                .then(res => {
                    setLoading(false)
                })
                .catch(err => console.log(err))
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err));
        }else{
            setErrorMsg("Password and confirmation don't match");

        }
    }

    if (loading) {
        return <div className='py-36 text-center'>
            <button type="button" class="bg-red-900 rounded-full" disabled>
                <svg class="motion-safe:animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

                </svg>

            </button>
        </div>

    }
    return (
        <div className=" py-32 w-full flex justify-center">
        <div className='p-10 bg-rose-100 w-96'>
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
                <input type="submit" className='cursor-pointer font-bold text-lg bg-[#F9C6CD] py-2 px-4 rounded my-3' value="Sign In" />
            </form>
            <h4>Already Have an Account? <Link to='/login' className='text-[rgb(233,31,99)]'>Sign In</Link></h4>
        </div>

    </div>
    );
};

export default SignUp;