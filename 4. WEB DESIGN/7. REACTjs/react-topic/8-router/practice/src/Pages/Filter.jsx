import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../Components/Navbar';

const Filter = () => {
    const [searchParams, setsearchParams] = useSearchParams()
    console.log(searchParams.get("age"));
    console.log(searchParams.get("city"));
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='text-center'>
                <h1 className='text-6xl mb-10'>This is Filter Page</h1>
                <h2 className='mb-5'>Age is - {searchParams.get("age")}</h2>
                <h2 className='mb-5'>City is - {searchParams.get("city")}</h2>

                <input className='border border-black rounded-sm' type="text" onChange={(e) => setsearchParams({ text: e.target.value, age: 50 })} placeholder='set text' />
                <div className='grid place-content-center'>
                    <button className='button' onClick={() => setsearchParams({ age: 25 })}>set age</button>
                    <button className='button' onClick={() => setsearchParams({ city: "surat" })}>set city</button>
                </div>
            </div>
        </>
    )
}

export default Filter
