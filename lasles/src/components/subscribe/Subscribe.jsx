import React from 'react'

const Subscribe = () => {
  return (
    <div>
        <form action="submit" className='mx-[15vw] border-[#F53838] border-solid border-2 '>
            <input type="text" placeholder="Enter your Full Name" required />
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className='bg-[#F53838] text-xl text-white rounded-xl h-[50px] w-[200px] '>Subscribe</button>
        </form>
    </div>
  )
}

export default Subscribe