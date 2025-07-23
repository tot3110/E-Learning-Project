import React from 'react'
import pic from '../src/assets/pic2.png'
import upcoming from '../src/assets/upcoming.png'


const UpComingSessions = () => {
  return (
    <div>
    <div>
      <h2 className='font-bold text-3xl p-10 text-center'>Up Coming Live Sessions</h2>
      <img src={pic} className='w-[900px] h-[400px] mx-auto' />
      <img src={upcoming} className='absolute top-565 left-90 w-[420px] h-[440px]' />
    </div>

    <div className='absolute top-600 right-120'>
      <p className='font-bold text-white text-3xl leading-snug'>Digital Marketing <br /> Crash Course</p>
      <p className='text-[#704360]'>Understanding Key Concepts of SEO, social <br/>media marketing, and email campaigns <br />By Ruby Perrin</p>
    </div>
    </div>
  )
}

export default UpComingSessions
