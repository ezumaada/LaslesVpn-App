import React, { useRef } from 'react';
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
import World from './components/world/World';
import Statistics from './components/statistics/Statistics';

const App = () => {
  const sectionsRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const scrollToRef = (index) => {
    window.scrollTo({
      top: sectionsRef[index].current.offsetTop,
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route
            path="/"
            element={
              <>
                <Navbar scrollToRef={scrollToRef} />
                <div ref={sectionsRef[0]}><About /></div>
                <div ref={sectionsRef[6]}><Statistics /></div>
                <div ref={sectionsRef[1]}><Features /></div>
                <div ref={sectionsRef[2]}><Pricing /></div>
                <div ref={sectionsRef[5]}><World /></div>
                <div ref={sectionsRef[3]}><Testimonials /></div>
                 <div className='relative'>
                  <Subscription className='absolute bottom-full' />
                  <Footer />
                </div>
                <button onClick={scrollToTop} className="p-2 fixed bottom-5 right-5 bg-blue-500 text-white rounded">
                  Scroll to Top
                </button>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
