import React from 'react'
import logo from '../src/assets/logo.png'
import bell from '../src/assets/bell.png'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-6 py-4'>
        <div className='flex items-center'>
            <img src={logo} alt="" className='w-40 h-auto'/>
        </div>
      <div className='hidden lg:flex gap-6 text-gray-700 font-medium'>
        <a href="">Home</a>
        <a href="">Categories</a>
        <a href="">My Schedule</a>
        <a href="">Upcoming Live Sessions</a>
        <a href="">Instructor Profiles</a>
        <a href="">Testimonials</a>
        <a href="FAQs">FAQs</a>
      </div>
      <div>
        <img src={bell} alt="" className='w-10 h-10' />
      </div>
    </nav>
  )
}

export default Navbar


