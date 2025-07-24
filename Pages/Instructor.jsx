import React from 'react'
import pic from '../src/assets/instructor.png'
import pic2 from '../src/assets/instructor1.png'
import pic3 from '../src/assets/intructor3.jpg'
import background from '../src/assets/blur bg.png'

const Instructor = () => {
  return (
    <div>
      <h2 className='font-bold text-3xl pt-10 pb-1 text-start pl-40'>Instructor Profiles</h2>

      <div className='flex items-center justify-center gap-30 pt-20'>
        <div>
          <img src={background} className='w-[300px] h-[300px] rounded-full' />
          <img src={pic} className='w-[200px] h-[200px] absolute top-765 left-58 ' />
          <p className='font-semibold text-gray-900 text-3xl text-center'>Isabella Clark</p>
          <p className='text-gray-900 text-center'>Web Developer</p>
        </div>
        <div>
            <div><img src={pic2} className='w-[300px] h-[300px]' /></div>
            <p className='text-gray-900 text-3xl font-semibold'>Ava Collins</p>
            <p className='text-gray-900'>IELTS/TOEFL Trainer</p>
        </div>
        <div>
          <div><img src={pic3} className='w-[300px] h-[300px] rounded-full' /></div>
          <p className='text-gray-900 text-3xl font-semibold'>Lara Loren</p>
          <p className='text-gray-900'>App Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Instructor


