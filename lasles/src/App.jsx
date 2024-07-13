import React from 'react'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Features from './components/features/Features';
import Pricing from './components/pricing/Pricing';
import Testimonials from './components/testimonials/Testimonials';
import Help from './components/help/Help';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';


const App = () => {
  return (
    <div>
       
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
      <Footer/>
      </BrowserRouter>
      
    
    </div>
  )
}

export default App