import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Data_fetch1 = () => {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                // console.log(res);
                setPosts(res.data)
            }).catch(err => {
                // console.log(err);
                setId(err.message)
            })
    }, [id])

    return (
        <>
            <input className='button-input ' type="text" value={id} onChange={e => setId (e.target.value)}/>
            <div>{posts.title}</div>

            {id != "" && <h1>{setId}</h1>}
        </>
    )
}

export default Data_fetch1
