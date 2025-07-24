import React from 'react'
import pic from '../src/assets/instructor.png'
import pic2 from '../src/assets/instructor1.png'
// import pic3 from '../src/assets/intructor3.jpg'
const Instructor = () => {
  return (
    <div>
      <h2 className='font-bold text-3xl pt-10 pb-1 text-start pl-40'>Instructor Profiles</h2>

      <div className='flex items-center justify-center gap-30'>
        <div>
            <img src={pic} className='w-[300px] h-[300px]' />
            <p className='font-semibold text-gray-700 text-3xl'>Isabella Clark</p>
            <p className='text-gray-600'>Web Developer</p>
        </div>
        <div>
            <img src={pic2} className='w-[300px] h-[300px]' />
            <p className='text-gray-700 text-3xl font-semibold'>Ava Collins</p>
            <p className='text-gray-600'>IELTS/TOEFL Trainer</p>
        </div>
        {/* <img src={pic3} className='w-[300px] h-[300px] rounded-4xl' /> */}
      </div>
    </div>
  )
}

export default Instructor


