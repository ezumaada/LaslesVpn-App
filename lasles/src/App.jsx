import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Features from './components/features/Features';
import Pricing from './components/pricing/Pricing';
import Testimonials from './components/testimonials/Testimonials';
import Help from './components/help/Help';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Subscribe from './components/subscribe/Subscribe';
import Subscription from './components/subscription/Subscription';
import Homepage from './pages/homepage/Homepage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/help" element={<Help />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/subscribe" element={<Subscription />} />
          </Routes>
              
        
      </BrowserRouter>
    </div>
  );
};

export default App;
