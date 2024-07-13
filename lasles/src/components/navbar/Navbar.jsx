import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><Link className="text-white" to="/">Home</Link></li>
        <li><Link className="text-white" to="/about">About</Link></li>
        <li><Link className="text-white" to="/projects">Projects</Link></li>
        <li><Link className="text-white" to="/skills">Skills</Link></li>
        <li><Link className="text-white" to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar