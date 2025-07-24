import React from 'react'
import Vector5 from '../src/assets/Vector5.png'
import Vector1 from '../src/assets/Vector1.png'
import Vector2 from '../src/assets/Vector2.png'
import Vector3 from '../src/assets/Vector3.png'


const Categories = () => {
  return (
    <div>
      <h2 className='font-bold text-3xl pt-10 pb-1 text-start pl-40'>Categories</h2>
      <div className='flex items-center justify-center pt-10 gap-15'>
        
        
        <button className='rounded-full bg-[#6E415E] py-2 px-6 font-semibold flex items-center text-2xl gap-3'>
          <img src={Vector5} className='rounded-3xl bg-white py-1 px-2 h-10'/> Design</button>
        
        
        <button className='rounded-full bg-[#6E415E] py-2 px-5 text-2xl font-semibold flex items-center gap-3'>
          <img src={Vector1} className='rounded-3xl bg-white py-1 px-2 h-10' /> Business</button>
        
        
        <button className='rounded-full bg-[#6E415E] py-2 px-7 text-2xl font-semibold flex items-center gap-3'>
          <img src={Vector2} className='rounded-3xl bg-white py-1 px-2 h-10' /> Maths</button>
        
        
        <button className='rounded-full bg-[#6E415E] py-2 px-8 text-2xl font-semibold flex items-center gap-3'>
          <img src={Vector3} className='rounded-3xl bg-white py-1 px-2 h-10' /> Arts</button>
      </div>

    </div>
  )
}

export default Categories
