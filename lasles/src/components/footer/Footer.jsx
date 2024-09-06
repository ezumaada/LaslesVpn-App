import React from 'react';
import logo from '../../assets/images/Logo.png';
import fb from '../../assets/images/Facebook.png';
import xx from '../../assets/images/Twitter.png';
import ig from '../../assets/images/Instagram.png';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#F8F8F8] pt-20 justify-around flex flex-row px-2'>
      <div className='w-1/2'>
        <div>
          <img src={logo} alt="LAsles-logo" />
        </div>
        <div className='my-4'>
          <p className='text-base '> <strong> LaslesVPN</strong> is a private virtual network that</p>
          <p> has unique features and has high security.</p>
        </div>
        <div>
          <ul className='flex flex-row gap-2'>
            <li><a href="https://www.facebook.com/"><img src={fb} alt="facebook-logo" /></a></li>
            <li><a href="https://twitter.com/login"><img src={xx} alt="twitter-logo" /></a></li>
            <li><a href="https://www.instagram.com/accounts/login/?hl=en"><img src={ig} alt="instagram-logo" /></a></li>
          </ul>
        </div>
        <div>©2020LaslesVPN</div>
      </div>
      <div className='flex gap-16 flex-row'>
        <div>
          <ul  className='flex flex-col mx-4 gap-4'>
          <li><strong>Product</strong></li>
          <li>Download</li>
          <Link to="/pricing"><li>Pricing</li></Link> 
          <li>Locations</li>
          <li>Server</li>
          <li>Countries</li>
          <li>Blog</li>
          </ul>
        </div>
        <div> 
           <ul  className='flex flex-col mx-4 gap-4'>
          <li><strong>Engage</strong></li>
          <li>LaslesVpn?</li>
          <li>FAQ</li>
          <li>Tutorials</li>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          
         </ul>
        </div>
        <div>
          <ul  className='flex flex-col mx-4 gap-4'>
          <li><strong>Earn Money</strong></li>
          <li>Affiliate Program</li>
          <li>Become Partner</li>

        </ul></div>
      </div>
    </div>
  )
}

export default Footer