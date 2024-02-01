
import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";


function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      
    </>
  )
}

export default App
