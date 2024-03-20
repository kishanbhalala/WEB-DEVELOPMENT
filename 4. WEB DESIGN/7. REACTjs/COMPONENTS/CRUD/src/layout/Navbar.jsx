import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="bg-gray-800 py-4 px-6 w-full z-10 top-0">
                <div className="container mx-auto">
                    <ul className="flex justify-between items-center">
                        <li><NavLink to="/" href="/" className="text-white font-bold">Home</NavLink></li>
                        <li><NavLink to="/about" href="/about" className="text-white hover:text-gray-300">About</NavLink></li>
                        <li><NavLink to="/contact" href="/contact" className="text-white hover:text-gray-300">Contact</NavLink></li>
                        <li><NavLink to="/users/add" href="/contact" className="text-white hover:text-gray-300">Add User</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
