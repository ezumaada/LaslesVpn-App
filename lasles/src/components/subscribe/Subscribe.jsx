import React from 'react';
import Navbar from '../navbar/Navbar';

const Subscribe = () => {
  return (
    <div>
      <Navbar/>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form 
        action="submit" 
        className="flex flex-col space-y-4 bg-white p-8 rounded-xl shadow-lg border-2 border-[#F53838]"
      >
        <h2 className="text-2xl font-semibold text-center text-[#F53838]">Subscribe Now</h2>
        <input 
          type="text" 
          placeholder="Enter your Full Name" 
          required 
          className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#F53838]"
        />
        <input 
          type="email" 
          placeholder="Enter your email" 
          required 
          className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#F53838]"
        />
        <button 
          type="submit" 
          className="bg-[#F53838] text-xl text-white rounded-xl h-[50px] w-full hover:bg-[#e12d2d] transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
    </div>
  );
}

export default Subscribe;
