import React from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Cart from '../pages/Cart'
import WishList from '../pages/WishList'
import Footer from '../components/Footer'

const Allpage = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/WishList' element={<WishList />} />
                </Routes>
                <Footer />
            </BrowserRouter>



        </div>
    )
}

export default Allpage
