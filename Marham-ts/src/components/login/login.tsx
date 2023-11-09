import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { UserAuth } from '../../context/AuthContext'

const Login = () => {

    const { googleSignIn, facebookSignIn, user } = UserAuth()
    const navigate = useNavigate()
    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn()
      } catch (error) {
        console.log(error)
      }
    }
    const handleFacebookSignIn = async () => {
      try {
        await facebookSignIn()
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      if (user != null) {
        navigate('/account')
      }
    }, [user])

    return (
        <div className="LogIn">
            <div className='flex w-full h-screen mt-3 '>
                <div className='flex flex-col w-1/2 bg-white '>
                    <div className='w-2/3 mx-auto my-auto bg-white h-3/4'>
                        <div className='flex'>
                            <label className='text-3xl font-bold text-blue-700'>Log In</label>
                        </div>
                        <div className="relative mt-7">
                            <label className="absolute max-xl:ml-[-160px] max-lg:ml-[-135px] ml-[-200px] -mt-2 text-sm font-semibold  bg-white text-blue-400">Email</label>
                            <input type="text" className="block w-full pt-3.5 px-8 py-3.5 mt-2 text-sm placeholder-blue-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter Your Email" />
                        </div>
                        <div className="relative mt-5">
                            <label className="absolute max-xl:ml-[-160px] max-lg:ml-[-135px] ml-[-200px] -mt-2 text-sm font-semibold  bg-white text-blue-400">Password</label>
                            <input type="text" className="block w-full pt-3.5 px-8 py-3.5 mt-2 text-sm placeholder-blue-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter Your Password" />
                        </div>
                        <div className="flex flex-row w-full px-6 mt-4 max-lg:px-1 max-lg:bg-red-500">
                            <input id="disabled-radio-1" type="checkbox" value="" name="disabled-radio" className="mt-[2px] w-4 h-4 max-xl:w-3 max-xl:h-3  text-blue-400  bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2" />
                            <label htmlFor="disabled-radio-1" className="ml-2 text-sm font-normal text-blue-400 max-xl:ml-0 max-xl:text-xs">Keep Me Logged In</label>
                            <label className="text-sm font-normal text-blue-400 underline cursor-pointer ml-36 max-xl:ml-20 max-lg:ml-16 max-xl:text-xs">Forgot Password?</label>
                        </div>
                        <button className='bg-blue-900 mt-5 w-full mr-auto ml-auto border-2 border-blue-800 font-bold text-white-500 px-16 py-1.5 rounded-full text-bold text-white tracking-widest'>Log In</button>
                        <div className="w-full h-0 mt-6 ml-auto mr-auto text-black divider divider-horizontal text-md">or</div>
                        <button onClick={handleGoogleSignIn} type="button" className="btn mt-4 w-full gap-4 text-center rounded-full px-10 bg-[#ca493d] ">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657        C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36        c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                <path
                                    fill="#1976D2"
                                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
              c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                ></path>
                            </svg>
                            <span>Sign up with google</span>
                        </button>
                        <div>
                            <a onClick={handleFacebookSignIn} href="#" className="w-full gap-3 mt-4 text-center text-white transition-colors duration-200 transform bg-blue-600 border rounded-full btn px-9 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                                <span className="text-sm text-white ">Sign up with Facebook </span></a>
                        </div>
                        <div className='pt-10 text-center'>
                            <label className="text-sm font-normal text-blue-400 ">Don't Have An Account? <span className='text-sm font-bold text-blue-400 underline cursor-pointer'><a href="/" className='hover:text-blue-900'> Sign Up</a></span></label>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 '>
                    <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full" />

                </div>
            </div>
        </div>
    )
}

export default Login