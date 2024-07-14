import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import About from '../../components/about/About'
import Features from '../../components/features/Features'
import Statistics from '../../components/statistics/Statistics'
import Pricing from '../../components/pricing/Pricing'
import Testimonials from '../../components/testimonials/Testimonials'
import Footer from '../../components/footer/Footer'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Statistics/>
        <Features/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
        
    </div>
  )
}

export default Homepage