import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className=" py-32 w-full flex justify-center">
        <div className='p-10 bg-rose-100 w-96'>
            <h1 className="text-center font-bold text-2xl">Sign Up</h1>
            <form>
                <div className='flex flex-col my-3'>
                    <label htmlFor="name" className='font-bold'>Name</label>
                    <input type="name" name="name" id="name" placeholder="Name" className="p-2 w-full" />
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="email" className='font-bold'>Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" className="p-2 w-full" />
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="password" className='font-bold'>Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="p-2 w-full" />
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="confirm" className='font-bold'>Confirm Password</label>
                    <input type="password" name="confirm" id="confirm" placeholder="Confirm Password" className="p-2 w-full" />
                </div>
                <input type="submit" className='font-bold text-lg bg-[#F9C6CD] py-2 px-4 rounded my-3' value="Sign In" />
            </form>
            <h4>Already Have an Account? <Link to='/login' className='text-[rgb(233,31,99)]'>Sign In</Link></h4>
        </div>

    </div>
    );
};

export default SignUp;