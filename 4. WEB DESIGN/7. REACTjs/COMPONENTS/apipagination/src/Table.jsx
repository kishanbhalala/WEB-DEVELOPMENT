import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Table = () => {

    const [value, setValue] = useState()
    const [page, setPage] = useState(1)

    const getData = 10;

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setValue(res.data)
                // console.log("respons", res.data);
            })
            .catch(err => {
                console.log("this error", err);
            })
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>user Id</th>
                        <th>Id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
            </table>

            {
                value?.slice((page - 1) * getData, page * getData)?.map((item) => {
                    {/* console.log("fcxgshv", item) */ }
                    return (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <td>{item?.userId}</td>
                                        <td>{item?.id}</td>
                                        <td>{item?.title}</td>
                                        <td>{item?.body}</td>
                                    </tr>
                                </thead>
                            </table>
                        </>
                    )
                })
            }



            <Stack spacing={2}>
                <Pagination count={Math.ceil(value?.length / getData)} page={page} onChange={(event, get) => setPage(get)} />
            </Stack>


        </div>
    )
}

export default Table
