import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/UserContext';



const Login = () => {

    const { login,setLoading ,socialLogin} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider()


    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                setLoading(false)
            })
            .catch (error => console.log(error));
    }

    const handleSocialLogin = (provider) =>{
        socialLogin(provider)
           .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                setLoading(false)
            })
           .catch(error => console.log(error));

    }

return (
    <div className=" py-32 w-full flex justify-center">
        <div className='p-10 bg-rose-100 w-96'>
            <h1 className="text-center font-bold text-2xl">Sign In</h1>
            <form onSubmit={handleLogin}>
                <div className='flex flex-col my-3'>
                    <label htmlFor="email" className='font-bold'>Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" className="p-2 w-full" />
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="password" className='font-bold'>Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="p-2 w-full" />
                </div>
                <input type="submit" className='font-bold text-lg bg-[#F9C6CD] py-2 px-4 rounded my-3' value="Sign In" />
            </form>
            <h4>New to Musico? <Link to='/signup' className='text-[rgb(233,31,99)]'>Create Account</Link></h4>
            <button onClick={()=>handleSocialLogin(googleProvider)} className='flex items center justify-center px-5 py-2 rounded-full my-5 bg-[#F9C6CD]'> <span className='mt-1 mr-4'><FaGoogle></FaGoogle></span> Sign In With Google</button>
        </div>

    </div>
);
};

export default Login;