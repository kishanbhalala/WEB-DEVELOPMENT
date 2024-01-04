import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Task2 = () => {
    const [mydata, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((res) => setMyData(res.data))
            .catch((err) => {
                setIsError(err.message)
                console.log(err);
            });
    }, []);

    return (
        <>
            <h1 className='text-xl mb-5'>Axios task using Grid and Card (responsive)</h1>
            <h2>{isError}</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
                {
                    mydata.slice(0, 30).map((post) => {
                        const { id, title, url } = post;
                        return <div className='py-5 px-3 border border-black' key={id}>
                            <div className='text-center'>
                                <h1 className='mb-5'>Id  = {id}</h1>
                                <h1 className='mb-5'>{title.slice(0, 30)}</h1>
                                <img src={url} alt="" />
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Task2
