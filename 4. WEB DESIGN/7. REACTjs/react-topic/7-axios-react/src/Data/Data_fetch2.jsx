import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Data_fetch2 = () => {

  const [posts, setPosts] = useState({})
  const [id, setId] = useState(1)
  const [idClick, setIdclick] = useState(1)

  const handleClick = () => {
    setIdclick(id)
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idClick}`)
      .then(res => {
        console.log(res);
        setPosts(res.data)
      }).catch(err => {
        console.log(err);
      })
  }, [idClick])

  return (
    <>
      <div>
        <input className='button-input' type="text" value={id} onChange={e => setId(e.target.value)} />
        <button className='button-2' type='button' onClick={handleClick}>post fetch</button>
      </div>
      <div className='text-space'>{posts.title}</div>
    </>
  )
}

export default Data_fetch2
