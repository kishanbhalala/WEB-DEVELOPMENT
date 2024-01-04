import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

export const Product0 = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
    </div>
  )
}

export const Product1 = ({ username, btnTaxt = "visit me", img }) => {
  return (
    <div>
      <div>
        <div className=''>
          <div className="relative h-[400px] w-[300px] rounded-md overflow-hidden mx-5 mb-10 group">

            <img src={img} alt="image" className="z-0 h-full w-full object-cover group-hover:scale-125 duration-700 " />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">{username}</h1>
              <p className="mt-2 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                debitis?
              </p>
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white border border-gray-700 rounded-2xl p-2 ">
                {btnTaxt}
              </button>
            </div>
          </div>
        </div>

        <Link to="/">Go to Home Page</Link>
      </div>
    </div>
  )
}

