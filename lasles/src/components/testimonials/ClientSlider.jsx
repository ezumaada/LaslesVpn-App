import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

function ClientSlider({ item }) {
  const { name, location, img, review } = item;

  return (
    <div className='slider-container bg-white rounded-lg shadow-md p-4 sm:p-6 max-w-md mx-auto'>
      <header className='testimonial-header mb-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-3'>
            <img src={img} alt={name} className='w-12 h-12 rounded-full object-cover' />
            <div>
              <p className='font-semibold text-sm sm:text-base'>{name}</p>
              <p className='text-gray-500 text-xs sm:text-sm'>{location}</p>
            </div>
          </div>
          <div className='flex items-center space-x-1'>
            <p className='font-semibold text-sm sm:text-base'>4.5</p>
            <StarIcon className='w-5 h-5 text-yellow-400' />
          </div>
        </div>
      </header>
      <main>
        <p className='text-sm sm:text-base leading-relaxed'>{review}</p>
      </main>
    </div>
  );
}

export default ClientSlider;