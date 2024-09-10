import React from 'react'
import {Link } from 'react-router-dom'

const Subscription = () => {
  return (
    <div className='flex flex-row mx-[7vw] bg-white  p-4 rounded-t-lg shadow-lg -mb-16 relative z-10 justify-between'>
        <div>
            <h1 className='font-medium text-3xl'>Subscribe Now for Get Special Features!</h1>
            <p>Let's subscribe with us and find the fun.</p>
        </div>
        <Link to="/subscribe">
            <button className='bg-[#F53838] text-xl text-white rounded-xl h-[50px] w-[200px]'>Subscribe Now</button>
        </Link>
    </div>
  )
}

export default Subscription