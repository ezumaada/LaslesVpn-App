import React from 'react';
import giftbox from '../../assets/images/Freegiftbox.png';
import check from '../../assets/images/greencheck.png';

const PricingCard = ({ title, price, features }) => (
  <div className='border-gray-400 py-4 px-5 h-full border-solid border-2 rounded-lg flex flex-col justify-between'>
    <div>
      <img src={giftbox} className='p-3 mx-auto' alt="giftbox" />
      <h2 className='font-medium text-center text-xl mb-4'>{title}</h2>
    </div>
    <div className='space-y-2'>
      {features.map((feature, index) => (
        <p key={index} className='flex items-center gap-3'>
          <img src={check} alt="green-check" className="w-4 h-4" />
          <span>{feature}</span>
        </p>
      ))}
    </div>
    <div className='mt-4'>
      <h3 className='text-center my-3 text-lg'>
        Price: <strong>{price}</strong>
      </h3>
      <button className='border-[#F53838] border-2 rounded-xl border-solid text-[#F53838] w-full py-2 hover:bg-[#F53838] hover:text-white transition-colors duration-300'>
        Select
      </button>
    </div>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: 'Free Plan',
      price: 'Free',
      features: ['Unlimited Bandwith', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices']
    },
    {
      title: 'Standard Plan',
      price: '$9 / mo',
      features: ['Unlimited Bandwith', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anywhere']
    },
    {
      title: 'Premium Plan',
      price: '$12 / mo',
      features: ['Unlimited Bandwith', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anywhere', 'Get New Features']
    }
  ];

  return (
    <div className='mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <div className='mb-12'>
        <h1 className='font-semibold text-center text-3xl sm:text-4xl mb-4'>Choose Your Plan</h1>
        <p className='text-center text-base sm:text-lg'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;