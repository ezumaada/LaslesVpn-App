import React, { useRef } from 'react';
import star from '../../assets/images/star.png';  
import test1 from '../../assets/images/test1.png';
import test2 from '../../assets/images/test2.png';
import test3 from '../../assets/images/test3.png';
import next from '../../assets/images/right.png';
import back from '../../assets/images/left.png';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' }); // Scroll forward
    }
  };

  const scrollBack = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' }); // Scroll backward
    }
  };

  const Card = (props) => {
    return (
      <div className='flex flex-col px-4 border-gray-400 hover:cursor-pointer hover:border-[#F53838] border-solid border-2 rounded-lg'>
        <div className='flex flex-row w-[380px] gap-14 '>
          <img src={props.img} alt="" />
          <div>
            <h2 className='font-medium'>{props.title}</h2>
            <p>{props.location}</p>
          </div>
          <div className='flex flex-row gap-2 pl-3 items-center'>
            <p>4.5</p>
            <img src={star} className='w-4 h-4' alt="Gold star" />
          </div>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='my-10'>
      <div className='text-center'>
        <h1 className='font-medium text-4xl'>Trusted by Thousands  of <br /> Happy Customers</h1>
        <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
      </div>
      <div className='flex flex-col mt-5 mx-[10vw] gap-10'>
        <div ref={scrollRef} className='flex flex-row gap-10 overflow-x-auto scroll-smooth'>
          <Card img={test1} title="Viezh Robert" location="Warsaw, Poland" description="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”." />
          <Card img={test1} title="Viezh Robert" location="Warsaw, Poland" description="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”." />
          <Card img={test2} title="Yessica Christy" location="Shanxi, China" description="“I like it because I like to travel far and still can connect with high speed.”." />
          <Card img={test2} title="Yessica Christy" location="Shanxi, China" description="“I like it because I like to travel far and still can connect with high speed.”." />
          <Card img={test3} title="Kim Young Jou" location="Seoul, South Korea" description="“This is very unusual for my business that currently requires a virtual private network that has high security.”."/>
          <Card img={test1} title="Kim Young Jou" location="Seoul, South Korea" description="“This is very unusual for my business that currently requires a virtual private network that has high security.”."/>
        </div>
        <div className='place-items-center flex-row flex'>
          <img src={back} onClick={scrollBack} className='w-[65px] h-[65px] cursor-pointer' alt="back-button" />
          <img src={next} onClick={scrollNext} className='w-[65px] h-[65px] cursor-pointer' alt="next-button" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
