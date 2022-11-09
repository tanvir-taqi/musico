import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcMusic } from "react-icons/fc";
import './Header.css'




        const Header = () => {
            const [display, setDisplay] = useState(false)
           
        
            return (
                <div className=''>
                    <div className={`fixed z-50 w-full header py-5 header-container  flex flex-col md:flex-row justify-around items-center`}>
                        <div className="header-logo flex justify-around around items-center w-full  md:w-1/6">
        
        
                            {/* header logo and name  */}
        
                            <Link to='/'  className={`font-bold flex  text-3xl`}>
                               <h1 className='header-title'>Musico</h1>
                            </Link>
        
                            <button className='block md:hidden' onClick={() => setDisplay(!display)}> <FcMusic></FcMusic></button>
                        </div>
                        {/* header links  */}
                        <div className={`nav-menu flex  md:items-center flex-col md:flex-row   ${display ? 'flex' : 'hidden md:flex'}`} >
                            <div className="nav-menu-link items-start flex flex-col md:flex-row py-12 md:py-1 ">
                                <Link className={`mr-4 text-lg font-semibold   `} to='/home'>Home</Link>
                               
        
                            </div>
        
                            {/* header users imfo and sign out  */}
                            {/* <div className="user  md:mx-3 ">
                                {
                                    user ? <div className='flex items-center'>
                                        <Link to='/update'> {user?.photoURL ? <img src={user?.photoURL} alt="" className="user-img cursor-pointer" title={user?.displayName} /> : <FaUser></FaUser>} </Link>
                                        <button onClick={handleLogOut} className='mx-2'>Log Out</button>
        
                                    </div> : <Link to='/login' className=' font-semibold text-lg'>Log In </Link>
                                }
        
                            </div> */}
        
                   
                        </div>
                    </div>
        
                </div>
            );
        };
   

export default Header;