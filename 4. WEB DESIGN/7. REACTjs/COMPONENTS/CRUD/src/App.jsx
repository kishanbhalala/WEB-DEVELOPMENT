import React from 'react'
import Error from './components/Error'
import Navbar from './layout/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route element={<Error />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
