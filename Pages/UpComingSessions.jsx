import React from 'react'
import pic from '../src/assets/pic2.png'
import upcoming from '../src/assets/upcoming.png'


const UpComingSessions = () => {
  return (
    <div>
    <div>
      <h2 className='font-bold text-3xl p-10 text-start pl-40'>Up Coming Live Sessions</h2>
      <img src={pic} className='w-[900px] h-[400px] mx-auto' />
      <img src={upcoming} className='absolute top-580 left-60 w-[420px] h-[440px]' />
    </div>

    <div className='absolute top-620 right-110'>
      <p className='font-bold text-white text-3xl leading-snug'>Digital Marketing <br /> Crash Course</p>
      <p className='text-[#704360]'>Understanding Key Concepts of SEO, social <br/>media marketing, and email campaigns</p>
      <p className='text-[#704360]'>By Ruby Perrin</p>
    </div>

    <div>
      <div>
      <h2 className='text-pink-600 font-semibold p-15 text-start text-2xl'>Digital Marketing Crash Course</h2>
    </div>
    <div className='flex gap-10'>
      <p className='text-xl text-gray-600 pl-100'>Time: 5 PM</p>
      <p className='text-xl text-gray-600'>Date: Jan 25</p>
    </div>
    </div>
    </div>
  )
}

export default UpComingSessions
