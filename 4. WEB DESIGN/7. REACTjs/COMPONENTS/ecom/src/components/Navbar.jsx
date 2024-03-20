import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
    return (
        <div>
            <nav className="bg-gray-800 py-4 px-6 fixed w-full z-10 top-0">
                {/* Your navbar content goes here */}
                <div className="container mx-auto">
                    <ul className="flex justify-between items-center">
                        <NavLink to="/"><a href="" className="text-white font-bold">Home</a></NavLink>
                        <NavLink to="/Contact"><a href="" className="text-white hover:text-gray-300">Contact</a></NavLink>
                        <NavLink to="/About"><a href="" className="text-white hover:text-gray-300">About</a></NavLink>
                        <NavLink to="/Cart"><a href="" className="text-white hover:text-gray-300"><FaShoppingCart />
                        </a></NavLink>
                        <NavLink to="/WishList"><a href="" className="text-white hover:text-gray-300"><MdFavoriteBorder /></a></NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
