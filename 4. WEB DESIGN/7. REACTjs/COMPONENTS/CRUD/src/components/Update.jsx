import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Update = () => {

    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')

    const history = useNavigate()

    // localStorage Data Show
    useEffect(() => {
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    }, [])


    // axios method ma put atle update
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://65fb045f14650eb21009177d.mockapi.io/crud-op/${id}`, { name: name, email: email })
            .then(() => {
                history('/read')
            });
    }

    return (
        <div>
            {/* <h2 className='text-center font-extrabold text-2xl my-10'>Update Opration</h2> */}

            <div className='flex items-center justify-center'>
                <h2 className='text-center font-extrabold text-2xl my-10'>Update Opration</h2>
                <NavLink to="/read" className='text-center font-extrabold text-2xl my-10'> / Read</NavLink>
            </div>
            <div className='border text-center grid h-96 place-content-center'>
                <form className='space-y-5' >

                    <div>
                        <label htmlFor="name" className='w-20'>Name:</label>
                        <input id="name" className='border px-2' type="text" placeholder='Enter your name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="email" className='w-20'>Email:</label>
                        <input id="email" className='border px-2' type="email" placeholder='Enter your email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <button type='submit' className="border p-3 hover:bg-gray-400 hover:text-white" onClick={handleUpdate}>Update</button>

                </form>
            </div>
        </div>
    )
}

export default Update
