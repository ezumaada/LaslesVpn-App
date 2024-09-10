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
      <nav className="px-[7vw] pt-5 flex flex-row justify-between items-center">
      <div>
        <Link to='/' onClick={handleLogoClick}>
          <img src={logo} alt="Lasles-logo" className="h-8 w-auto" />
        </Link>
      </div>
      
      {/* Navigation links - hidden on small and medium screens */}
      <ul className="hidden lg:flex lg:space-x-4">
        <li><button className="text-black" onClick={() => scrollToRef(0)}>About</button></li>
        <li><button className="text-black" onClick={() => scrollToRef(1)}>Features</button></li>
        <li><button className="text-black" onClick={() => scrollToRef(2)}>Pricing</button></li>
        <li><button className="text-black" onClick={() => scrollToRef(3)}>Testimonials</button></li>
        <li><button className="text-black" onClick={() => scrollToRef(4)}>Help</button></li>
      </ul>
      
      {/* Sign Up and Sign In buttons */}
      <div className='flex flex-row gap-1'>
        <Link to="/signup">
          <button className="hover:border-red-500 text-black px-3 py-1 text-sm sm:px-5 sm:py-2 sm:text-base rounded-md">
            Sign Up
          </button>
        </Link>
        <Link to="/signin">
          <button className="text-red-500 border-2 border-solid border-red-500 px-3 py-1 text-sm sm:px-5 sm:py-2 sm:text-base rounded-md">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
