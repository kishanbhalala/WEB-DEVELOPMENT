
import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Login = () => {

    const login = () => {
        localStorage.getItem('login', true)
        Navigate('/')
    }
    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem('login');
        if (login) {    
            navigate("/")
        }
    });

    return (
        <>
            <div>
                <Navbar />
                <h1 className='text-center text-2xl my-10'>Login Form</h1>
                <div className='  max-w-sm mx-auto bg-slate-500 p-10 rounded-md'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-whit' htmlFor="username">Username</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id='username' autoComplete='given-name' /><br />

                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-whit' htmlFor="password">Password</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" id="password" autoComplete="new-password" /><br />

                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={login}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login
