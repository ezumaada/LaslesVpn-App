import React from 'react';
import logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="p-4 flex flex-row justify-between mx-[5vw]">
        <div>
          <img src={logo} alt="Lasles-logo" />
        </div>
      
        <ul className="flex space-x-4">
          <li><Link className="text-black" to="/about">About</Link></li>
          <li><Link className="text-black" to="/features">Features</Link></li>
          <li><Link className="text-black" to="/pricing">Pricing</Link></li>
          <li><Link className="text-black" to="/testimonials">Testimonials</Link></li>
          <li><Link className="text-black" to="/help">Help</Link></li>
        </ul>

        <div className='flex flex-row gap-1'>
          <Link to="/signup">
            <button className="hover:border-red-500 border-black border-solid border-2 text-black px-5 py-1 rounded-xl">Sign Up</button>
          </Link>
          <Link to="/signin">
            <button className="text-red-500 hover:border-black border-2 border-solid border-red-500 px-5 py-1 rounded-xl">Sign In</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
