import React, { useEffect, useState } from 'react'
import '../index.css'

const Data_Fetch_WithoutAxois = () => {
    const [posts, setPosts] = useState([])

    async function fetchData() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const data = await response.json();
            setPosts(data);

        } catch (error) {
            console.log("error fetching data: ", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <ul>
                {
                    posts.map(pos => (<li className='text-space' key={pos.id}>{pos.id} - {pos.body}</li>))
                }
            </ul>
        </>
    )
}

export default Data_Fetch_WithoutAxois
