import React from 'react';
import map from '../../assets/images/worldmap.png';
import sponsors from '../../assets/images/sponsor.png';

const World = () => {
  return (
    <div>
        <div>
            <h1 className='text-center text-3xl font-bold my-7 '>Huge Global Network <br /> of Fast VPN</h1>
            <p className='text-center font-normal'>See  <span className='font-medium'>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
        </div>
        <div className='my-14'>
            <img className='px-14' src={map} alt="World-map" />
        </div>
        <div>
            <img className='px-14' src={sponsors} alt="" />
        </div>
    </div>
  )
}

export default World