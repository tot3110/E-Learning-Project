import React from 'react'
import pic from '../src/assets/pic2.png'
import upcoming from '../src/assets/upcoming.png'


const UpComingSessions = () => {
  return (
    <div>
    <div>
      <h2 className='font-bold text-3xl p-10 text-start pl-40'>Up Coming Live Sessions</h2>
      <img src={pic} className='w-[900px] h-[300px] mx-auto' />
      <img src={upcoming} className='absolute top-650 left-65 w-[420px] h-[440px]' />
    </div>

    <div className='absolute top-680 right-100'>
      <p className='font-bold text-white text-3xl leading-snug text-center'>Digital Marketing <br /> Crash Course</p>
      <p className='text-[#704360] text-center'>Understanding Key Concepts of SEO, social <br/>media marketing, and email campaigns</p>
      <p className='text-[#704360] text-center'>By Ruby Perrin</p>
    </div>

    <div className='flex flex-col items-center'>
      <div className='text-start w-[1180px]'>
      <h2 className='font-semibold text-3xl pt-20 pb-5 text-start text-[#B6116B]'>Digital Marketing Crash Course</h2>
    </div>
    <div className='flex gap-5 w-[700px] justify-between'>
      <p className='text-xl text-gray-700'>Time: 5 PM</p>
      <p className='text-xl text-gray-700'>Date: Jan 25</p>
    </div>
    </div>
    </div>
  )
}

export default UpComingSessions
