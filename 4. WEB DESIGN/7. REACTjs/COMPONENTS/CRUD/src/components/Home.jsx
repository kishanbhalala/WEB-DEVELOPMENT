import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setData(res.data)
            })

    }, [])

    return (
        <div>
            <div>
                <h1 className='font-bold text-2xl text-center my-3'>home page</h1>

                <div className=''>
                    <table>
                        <thead>
                            <tr className='border py-2 mb-5 flex w-[100vw] justify-between'>
                                <th>#</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody className='space-y-5'>
                            {
                                data.map((item, index) => {
                                    {/* console.log("ddddd",item) */ }
                                    return (
                                        <>
                                            <tr className='flex justify-between'>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.username}</td>
                                                <td>{item.email}</td>
                                                <td>
                                                    <NavLink  className="border px-2 py-1 mx-2">View</NavLink>
                                                    <NavLink className="border px-2 py-1 mx-2">Edit</NavLink>
                                                    <NavLink className="border px-2 py-1 mx-2">Delete</NavLink>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
