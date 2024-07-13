import React from 'react'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';


const App = () => {
  return (
    <div>
       <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
    </div>
  )
}

export default App