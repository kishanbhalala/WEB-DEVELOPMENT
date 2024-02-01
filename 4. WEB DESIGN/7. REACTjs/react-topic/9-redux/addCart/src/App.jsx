import React from 'react'
import { Provider } from 'react-redux'
import store from './Store/Store'
import Home from './Pages/Home'
import Cart from './Components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Cart />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/shop" element={<Shop />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App

