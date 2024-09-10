import React from 'react';
import guy from '../../assets/images/heroimg.png';
import tick from '../../assets/images/greentick.png'

const Features = () => {
  return (
    <div className='flex flex-row px-[10vw] gap-3 justify-center items-center shadow-lg bg-gray-100'>
      <div>
        <img src={guy} alt="" />
      </div>
      <div className='px-[5vw]'>
        <h1 className='font-medium mb-4 text-3xl'>We Provide Many <br /> Features You Can Use</h1>
        <p className='mb-2'>You can explore the features that we provide with fun and have their own functions each feature.</p>
        <div className='flex flex-col mb-5 gap-2'>
          <p className='flex flex-row gap-3'><img src={tick} alt="greentick" /> Powerfull online protection.</p>
          <p className='flex flex-row gap-3'><img src={tick} alt="greentick" /> Internet without borders.</p>
          <p className='flex flex-row gap-3'><img src={tick} alt="greentick" /> Supercharged VPN.</p>
          <p className='flex flex-row gap-3'><img src={tick} alt="greentick" /> No specific time limits.</p>
        </div>
      </div>
    </div>
  )
}

export default Features