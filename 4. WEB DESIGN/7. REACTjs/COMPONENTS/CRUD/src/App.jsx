import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './layout/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './components/Error'
import AddUser from './components/AddUser'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route element={<Error />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
