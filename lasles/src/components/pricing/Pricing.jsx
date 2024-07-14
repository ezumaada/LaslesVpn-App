import React from 'react';
import giftbox from '../../assets/images/Freegiftbox.png';
import check from '../../assets/images/greencheck.png';

const Pricing = () => {
   return (
    <div className='mt-[10vw]'>
      <div className='mb-6'>
        <h1 className='font-semibold text-center text-4xl'>Choose Your Plan</h1>
        <p className='text-center text-lg'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
      </div>
      <div className='flex flex-row mx-[15vw] gap-9'>
        <div className='border-gray-400 py-4 px-5 h-[475px] border-solid border-2'>
        <div>
          <img src={giftbox} className='p-3' alt="giftbox" />
          <h2 className='font-medium text-center'>Free</h2>
        </div>
          <div >
           <p className='flex-row flex gap-3'><img src={check} alt="green-check " /> Unlimited Bandwith</p>
           <p className='flex-row flex gap-3'><img src={check} alt="green-check " /> Encrypted Connection</p>
           <p className='flex-row flex gap-3'><img src={check} alt="green-check " />No Traffic Logs</p>
           <p className='flex-row flex gap-3'><img src={check} alt="green-check " />Works on All Devices</p>
          
          </div>
          <div>
            <h3 className='text-center my-3'>Price: <strong>Free</strong> </h3>
            <button className='border-[#F53838] border-2 rounded-xl border-solid text-[#F53838] w-[170px]'>Select </button>

          </div>
        </div>
        <div className='border-gray-400 py-4 h-[475px] px-5 border-solid border-2'>
        <div>
          <img src={giftbox} className='p-3' alt="giftbox" />
          <h2 className='font-medium text-center'>Free</h2>
        </div>
          <div >
           <p className='flex-row flex gap-3'><img src={check} alt="green-check " /> Unlimited Bandwith</p>
           <p className='flex-row flex gap-3'><img src={check} alt="green-check " /> Encrypted Connection</p>
           <p className='flex-row flex gap-3'><img src={check} alt="green-check " />Yes Traffic Logs</p>
           <p className='flex-row flex gap-3'><img src={check} alt="green-check " />Works on All Devices</p>
           <p className='flex-row flex gap-3'><img src={check} alt="green-check " />Connect Anywhere</p>
          
          </div>
          <div>
            <h3 className='text-center my-3'>Price: <strong>$9 /</strong> mo </h3>
            <button className='border-[#F53838] border-2 rounded-xl border-solid text-[#F53838] w-[170px]'>Select </button>

          </div>
        </div>
        <div className='border-gray-400 py-4 h-[475px] px-5 border-solid border-2'>
        <div>
          <img src={giftbox} className='p-3' alt="giftbox" />
          <h2 className='font-medium text-center'>Free</h2>
        </div>
          <div >
           <p className='flex-row flex gap-3'><img src={check} alt="green-check " /> Unlimited Bandwith</p>
           <p className='flex-row flex gap-3'><img src={check} alt="green-check " /> Encrypted Connection</p>
           <p className='flex-row flex gap-3'><img src={check} alt="green-check " />Yes Traffic Logs</p>
           <p className='flex-row flex gap-3'><img src={check} alt="green-check " />Works on All Devices</p>
           <p className='flex-row flex gap-3'><img src={check} alt="green-check " />Connect Anywhere</p>
           <p className='flex-row flex gap-3'><img src={check} alt="green-check " />Get New Features</p>
          
          </div>
          <div>
            <h3 className='text-center my-3'>Price: <strong> $12 / </strong> mo</h3>
            <button className='border-[#F53838] border-2 rounded-xl border-solid text-[#F53838] w-[170px]'>Select </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Pricing