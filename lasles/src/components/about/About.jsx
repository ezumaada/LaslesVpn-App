import React from 'react';
import abt from '../../assets/images/guyimage.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-8 md:py-16 max-w-7xl mx-auto'>
      <div className='md:w-1/2 mb-8 md:mb-0'>
        <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-6'>
          Want anything to be <br className="hidden sm:inline" /> easy with <strong>LaslesVPN.</strong>
        </h1>
        <p className='font-normal text-sm sm:text-base mb-6 md:mb-8'>
          Provide a network for all your needs with ease and fun using <span className='font-medium'>LaslesVPN</span> 
          <br className="hidden sm:inline" /> discover interesting features from us.
        </p>
        <div>
          <Link to="/signin">
            <button className='bg-[#F53838] hover:bg-blue-500 text-white rounded-xl px-6 py-3 text-sm sm:text-base transition duration-300 ease-in-out transform hover:scale-105'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className='md:w-1/2'>
        <img src={abt} alt="LaslesVPN" className='w-full h-auto max-w-md mx-auto' />
      </div>
    </div>
  );
};

export default About;