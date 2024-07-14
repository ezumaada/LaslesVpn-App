import React from 'react';
import guy from '../../assets/images/heroimg.png';
import tick from '../../assets/images/greentick.png'

const Features = () => {
  return (
    <div className='flex flex-row gap-3 justify-center items-center'>
      <div>
        <img src={guy} alt="" />
      </div>
      <div>
        <h1>We Provide Many Features You Can Use</h1>
        <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
        <div>
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