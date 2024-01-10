import React from 'react'
import { Provider } from 'react-redux'
import store from './Store/Store'
import Header from './Components/Header'
import Home from './Pages/Home'
import Cart from './Components/Cart'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Home />
        <Cart />
      </Provider>
    </div>
  )
}

export default App

