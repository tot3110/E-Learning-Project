import React from 'react'
import pic from '../src/assets/pic2.png'
import upcoming from '../src/assets/upcoming.png'
import PopularedCourses from './PopularedCourses'


const UpComingSessions = () => {
  return (
    <div className='relative'>
      <PopularedCourses heading="UpComing Live Sessions" />
    <div className='relative pt-8'>
      {/* <h2 className='font-bold text-3xl p-10 text-start pl-40'>Up Coming Live Sessions</h2> */}
      <img src={pic} className='md:w-[900px] md:h-[300px] h-[200px] mx-auto'/>
      <img src={upcoming} className='absolute md:top-0 md:left-55 top-15 left-4 md:w-[420px] md:h-[440px] w-[150px] h-[150px]' />
    </div>

    <div className='absolute md:top-36 md:right-80 top-24 right-8'>
      <p className='font-bold text-white md:text-3xl text-[20px] leading-snug text-center'>Digital Marketing <br /> Crash Course</p>
      <p className='text-[#704360] md:w-auto w-[200px] text-center text-sm md:text-auto'>Understanding Key Concepts of SEO, social <br/>media marketing, and email campaigns</p>
      <p className='text-[#704360] text-center text-sm md:text-auto'>By Ruby Perrin</p>
    </div>

    <div className='flex flex-col items-center px-4'>
      <div className='text-start w-full max-w-6xl'>
      <h2 className='font-semibold text-2xl pt-10 sm:pt-20 pb-3 text-[#B6116B]'>Digital Marketing Crash Course</h2>
    </div>
    <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 w-full max-w-xl justify-between'>
      <p className='text-lg sm:text-xl text-gray-700'>Time: 5 PM</p>
      <p className='text-lg sm:text-xl text-gray-700'>Date: Jan 25</p>
    </div>
    </div>
    </div>
  )
}

export default UpComingSessions
