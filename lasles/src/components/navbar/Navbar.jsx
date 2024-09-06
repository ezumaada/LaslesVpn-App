import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';

const Navbar = ({ scrollToRef }) => {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <nav className="px-[7vw] flex flex-row justify-between">
        <div>
          <Link to='/' onClick={handleLogoClick}>
          <img src={logo} alt="Lasles-logo" /></Link>
        </div>
        <ul className="flex space-x-4">
          <li><button className="text-black" onClick={() => scrollToRef(0)}>About</button></li>
          <li><button className="text-black" onClick={() => scrollToRef(1)}>Features</button></li>
          <li><button className="text-black" onClick={() => scrollToRef(2)}>Pricing</button></li>
          <li><button className="text-black" onClick={() => scrollToRef(3)}>Testimonials</button></li>
          <li><button className="text-black" onClick={() => scrollToRef(4)}>Help</button></li>
        </ul>
        <div className='flex flex-row gap-1'>
          <Link to="/signup"><button className="hover:border-red-500 text-black px-5 py-2 rounded-md">Sign Up</button></Link>
          <Link to="/signin"><button className="text-red-500 border-2 border-solid border-red-500 px-5 py-2 rounded-md">Sign In</button></Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
