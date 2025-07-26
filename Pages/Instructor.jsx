import React from 'react'
import pic from '../src/assets/instructor.png'
import pic2 from '../src/assets/instructor1.png'
import pic3 from '../src/assets/intructor3.jpg'
import background from '../src/assets/blur bg.png'
import background1 from '../src/assets/blur bg - Copy.png'
import background2 from '../src/assets/blur bg - Copy (2).png'

const Instructor = () => {
  return (
    <div>
      <h2 className='font-bold text-3xl pt-10 pb-1 text-start pl-40'>Instructor Profiles</h2>

      <div className='flex items-center justify-center gap-10 pt-20'>
        <div className='relative'>
          <img src={background} className='w-[350px] h-[350px] rounded-full' />
          <img src={pic} className='w-[250px] h-[250px] absolute top-11 left-13 ' />
          <p className='font-semibold text-gray-900 text-3xl text-center'>Isabella Clark</p>
          <p className='text-gray-900 text-center'>App Developer</p>
        </div>

        <div className='relative '>
          <img src={background1} className='w-[350px] h-[350px] rounded-full' />
          <img src={pic2} className='w-[250px] h-[250px] absolute top-11 left-13 ' />
          <p className='font-semibold text-gray-900 text-3xl text-center'>Ava Collins</p>
          <p className='text-gray-900 text-center'>Web Developer</p>
        </div>

        <div className='relative'>
          <img src={background2} className='w-[350px] h-[350px] rounded-full' />
          <img src={pic3} className='w-[250px] h-[250px] rounded-full absolute top-11 left-13 ' />
          <p className='font-semibold text-gray-900 text-3xl text-center'>Isabella Clark</p>
          <p className='text-gray-900 text-center'>IELTS/Toefl</p>
        </div>
      </div>
      </div>
  )
}

export default Instructor


