import React from 'react';
import abt from '../../assets/images/guyimage.png'

const About = () => {
  return (
    <div className='flex flex-row my-4 mx-[5vw] '>
        <div>
            <h1 className='font-bold text-5xl my-3'>Want anything to be <br /> easy with <strong>LaslesVPN.</strong></h1>
            <p className='font-normal my-3'>Provide a network for all your needs with ease and fun using <span className='font-medium'>LaslesVPN</span>  <br /> discover interesting features from us.</p>
            <div className='my-5'>
                <button className='bg-[#F53838] hover:bg-blue-500 text-xl text-white rounded-xl h-[50px] w-[200px]'>Get Started</button>
            </div>
        </div>
        <div>
            <img src={abt} alt="" />
        </div>
    </div>
  )
}

export default About