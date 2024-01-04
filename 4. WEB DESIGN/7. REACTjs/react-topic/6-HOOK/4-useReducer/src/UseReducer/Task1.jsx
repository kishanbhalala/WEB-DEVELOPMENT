import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'



const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'incre':
            return state + 1
        case 'decre':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state;
    }
};

const Task1 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [posts, setPosts] = useState({})
    const [idClick, setIdclick] = useState(10)
    const [id, setId] = useState(1)
    const [isError, setIsError] = useState("");

    const handleClick = () => {
        setIdclick(id + 1)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idClick}`)
            .then(res => {
                console.log(res);
                setPosts(res.data)
            }).catch(err => {
                setIsError(err.message)
                console.log(err);
            })
    }, [idClick])

    
    return (
        <div>


            <h2>{isError}</h2>
            <div className='button'>{count}</div>
            <div className='flex'>
                <button className='button' onClick={() => dispatch('incre')}>Increment</button>
                <button className='button' onClick={() => dispatch('decre')}>Dcrement</button>
                <button className='button' onClick={() => dispatch('reset')}>reset</button>
                <input className='button' type="text" value={id} onChange={e => setId(e.target.value)} />
                <button className='button' type='button' onClick={handleClick}>post fetch</button>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
                <div className='py-5 px-3 border border-black text-center'>
                    <h1>Id =  {posts.id}</h1>
                    <h1>title = {posts.title}</h1>
                    <h1>Body =  {posts.body}</h1>
                </div>
            </div>
        </div>
    )
}

export default Task1
