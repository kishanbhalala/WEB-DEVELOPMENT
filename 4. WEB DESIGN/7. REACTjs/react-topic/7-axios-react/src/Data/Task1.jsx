import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../App.css"

const Task1 = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setMyData(res.data))
            .catch((error) => {
                setIsError(error.message)
                console.log(error);
            });
    }, []);


    // const getApiData = async () => {
    //     try {
    //         const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    //         setMyData(res.data)
    //     } catch (error) {
    //         setIsError(error.message)
    //     }

    // };
    // useEffect(() => {
    //     getApiData()
    // }, [])


    return (
        <>
            <h6>Axios Task using grid</h6>
            {<h2>{isError}</h2>}
            <div className='grid-cl'>
                {myData.slice(0, 50).map((post) => {
                    const { id, title, body } = post;
                    return <div className='card-cl' key={id}>
                        <h2>{title.slice(0, 15).toUpperCase()}</h2>
                        <p>{body.slice(0, 150)}</p>
                    </div>
                })}
            </div>
        </>
    )
}

export default Task1
