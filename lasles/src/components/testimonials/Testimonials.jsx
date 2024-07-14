import React from 'react';
import star from '../../assets/images/star.png';  
import test1 from '../../assets/images/test1.png';

const Testimonials = () => {
  const Card = (props) => {
    return(
      <div className=' flex flex-col px-4 border-gray-400 hover:border-[#F53838] border-solid border-2 rounded-lg'>
        <div className='flex flex-row w-[380px] justify-between'>
          <img src={props.img} alt="" />
          <div>
            <h2>{props.title}</h2>
            <p>{props.location}</p>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <p>4.5</p>
            <img src={star} className='w-4 h-4' alt="Gold star" />
          </div>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className='text-center'>
        <h1 className='font-medium'>Trusted by Thousands of Happy Customer</h1>
        <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
      </div>
      <div className='flex flex-row mx-[10vw] gap-10'>
        <Card img={test1} title="Viezh Robert" location="Warsaw, Poland" description="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”." />
        <Card img={test1} title="Yessica Christy" location="Shanxi, China" description="“I like it because I like to travel far and still can connect with high speed.”." />
        <Card img={test1} title="Kim Young Jou" location="Seoul, South Korea" description="“This is very unusual for my business that currently requires a virtual private network that has high security.”."/>
      </div>
    </div>
  )
}

export default Testimonials