import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Read = () => {

    const [data, setData] = useState([])

    function getdata() {
        axios.get('https://65fb045f14650eb21009177d.mockapi.io/crud-op')
            .then((res) => {
                // console.log("sdd",res.data);
                setData(res.data)
            })
    }

    function handleDelete(id) {
        axios.delete(`https://65fb045f14650eb21009177d.mockapi.io/crud-op/${id}`)
            .then(() => {
                getdata()
            })
    }

    const setLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <div className='px-20'>
            <div className='flex items-center justify-center'>
                <h2 className='text-center font-extrabold text-2xl my-10'>Read Opration</h2>
                <NavLink to="/" className='text-center font-extrabold text-2xl my-10'> / Create</NavLink>
            </div>

            <div className='flex items-center py-4 border mb-3 px-5'>
                <h1 className='w-[500px] font-bold text-xl'>id</h1>
                <h1 className='w-[500px] font-bold text-xl'>name</h1>
                <h1 className='w-[500px] font-bold text-xl'>email</h1>
                <h1 className='w-[500px] font-bold text-xlpl-6'>Action</h1>
            </div>
            {
                data.map((item) => {
                    return (
                        <>
                            <div className='flex items-center px-5 border-b'>
                                <h1 className='w-[500px] '>{item?.id}</h1>
                                <h1 className='w-[500px] '>{item?.name}</h1>
                                <h1 className='w-[500px] '>{item?.email}</h1>
                                <div className='w-[500px] my-4'>
                                    <Link to="/update">
                                        <button className='border p-2' onClick={() => setLocalStorage(item?.id, item?.name, item?.email)}>Edit</button>
                                    </Link>
                                    <button className='border p-2' onClick={() => handleDelete(item?.id)}>delete</button>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </div>
    )
}

export default Read
