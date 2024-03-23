import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Create = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState('')
  const history = useNavigate()


  const header = { "Access-Control-Allow-Origin": "*" }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("clicked");
    axios.post('https://65fb045f14650eb21009177d.mockapi.io/crud-op', { name: name, email: email, header })

      .then(() => {
        history('/read')
      });
  }

  return (
    <div>
      <div className='flex items-center justify-center'>
        <h2 className='text-center font-extrabold text-2xl my-10'>Create Opration</h2>
        <NavLink to="/read" className='text-center font-extrabold text-2xl my-10'> / Read</NavLink>
      </div>
      <div className='border text-center grid h-96 place-content-center'>
        <form className='space-y-5' >

          <div>
            <label htmlFor="name" className='w-20'>Name:</label>
            <input id="name" className='border px-2' type="text" placeholder='Enter your name' name='name' onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="email" className='w-20'>Email:</label>
            <input id="email" className='border px-2' type="email" placeholder='Enter your email' name='email' onChange={(e) => setEmail(e.target.value)} />
          </div>

          <button type='submit' className="border p-3 hover:bg-gray-400 hover:text-white" onClick={handleSubmit}>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Create
