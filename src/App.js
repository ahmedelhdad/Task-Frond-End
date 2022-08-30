import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Fills from './components/Fills';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
         <Route path="/" element={<Landing />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/fill" element={<Fills />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
