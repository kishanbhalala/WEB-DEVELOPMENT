import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Contact = () => {
    return (
        <>
            <div>
                <Navbar />
                <h1 className='text-5xl'>this is Contact page</h1>
                <Link to="c1" className='link'>c-1 data</Link>
                <Link to="c2" className='link'>c-2 data</Link>
                <Link to="c3" className='link'>c-3 data</Link>
                <Outlet />
            </div>
        </>
    )
}

export default Contact
