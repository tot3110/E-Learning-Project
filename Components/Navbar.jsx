import React, { useState } from 'react';
import logo from '../src/assets/logo.png';
import bell from '../src/assets/bell.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-sm relative z-50">
      
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-32 sm:w-40 h-auto" />
      </div>

      
      <div className="hidden lg:flex gap-6 text-gray-700 font-medium">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">My Schedule</a>
        <a href="#">Upcoming Live Sessions</a>
        <a href="#">Instructor Profiles</a>
        <a href="#">Testimonials</a>
        <a href="#">FAQs</a>
      </div>

      
      <div className="flex items-center gap-4">
        <img src={bell} alt="Notifications" className="w-8 sm:w-10 h-auto" />
        
        <div className="lg:hidden">
          {menuOpen ? (
            <FiX
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
          <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Categories</a>
          <a href="#" onClick={() => setMenuOpen(false)}>My Schedule</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Upcoming Live Sessions</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Instructor Profiles</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#" onClick={() => setMenuOpen(false)}>FAQs</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


