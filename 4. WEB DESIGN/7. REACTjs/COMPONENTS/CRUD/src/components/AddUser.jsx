import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const AddUser = () => {

  const navigateTo = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  })

  const { name, username, email, phone, website } = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    console.log("1");
    await axios.post("https://jsonplaceholder.typicode.com/users", user);
    console.log("2");
    navigateTo('/')
    console.log("3");
  }

  return (
    <div>
      <div className='border text-center grid h-screen place-content-center'>
        <form className='space-y-5' onSubmit={onsubmit}>
          <div >
            <label htmlFor="" className='w-20'>name : </label>
            <input className='border px-2' type="text" placeholder='enter your name' name='name' value={name} onChange={e => onInputChange(e)} />
          </div>
          <div>
            <label htmlFor="" className='w-20'>username : </label>
            <input className='border px-2' type="text" placeholder='enter your username' name='username' value={username} onChange={e => onInputChange(e)} />
          </div>
          <div>
            <label htmlFor="" className='w-20'>email : </label>
            <input className='border px-2' type="email" placeholder='enter your email' name='email' value={email} onChange={e => onInputChange(e)} />
          </div>
          <div>
            <label htmlFor="" className='w-20'>number : </label>
            <input className='border px-2' type="number" placeholder='enter your phone' name='phone' value={phone} onChange={e => onInputChange(e)} />
          </div>
          {/* <div>
          <label htmlFor=""></label>
            <input className='border px-2' type="text" placeholder='enter your website' name='website' value={website} onChange={e => onInputChange(e)} />
          </div> */}
          <button type='submit' className="border p-3 hover:bg-gray-400 hover:text-white">Add User</button>
        </form>
      </div>
    </div>
  )
}

export default AddUser
