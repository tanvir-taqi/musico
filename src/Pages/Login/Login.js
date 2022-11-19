import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/UserContext';
import Spinning from '../../components/Spinning';




const Login = () => {



    const { login, setLoading, loading, socialLogin } = useContext(AuthContext);
    const [showPass , setShowPass] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider()


    const from = location.state?.from?.pathname || "/";


    useEffect(()=>{
        document.title = 'Musico-Sign In';
    })


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
               
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
                        console.log(data);
                        localStorage.setItem('musico-token', data.token)
                        setLoading(false)
                       
                    })

                    navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error);
                setLoading(false)
            })
    }


    
    const handleSocialLogin = (provider) => {
        socialLogin(provider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                console.log(error)
            });

    }

    if (loading) {
        return <Spinning></Spinning>

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
                        <div className='flex justify-between items-center'>
                        <label htmlFor="password" className='font-bold'>Password</label>
                        <span onClick={()=> setShowPass(!showPass)}>
                            {
                                showPass?
                                <FaEyeSlash className='text-red-600'></FaEyeSlash>
                                :
                                 <FaEye className='text-stone-600' ></FaEye>
                               
                            }
                        </span>
                        </div>
                        <input type={showPass ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="p-2 w-full"  />
                    </div>
                    <input type="submit" className='font-bold text-lg bg-[#F9C6CD] py-2 px-4 rounded my-3 cursor-pointer' value="Sign In" />
                </form>
                <h4>New to Musico? <Link to='/signup' className='text-[rgb(233,31,99)]'>Create Account</Link></h4>
                <button onClick={() => handleSocialLogin(googleProvider)} className='flex items center justify-center px-5 py-2 rounded-full my-5 bg-[#F9C6CD]'> <span className='mt-1 mr-4'><FaGoogle></FaGoogle></span> Sign In With Google</button>
            </div>

        </div>
    );
};

export default Login;