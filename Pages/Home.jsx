import React from 'react'
import pic2 from '../src/assets/pic2.png'
import pic1 from '../src/assets/pic1.png'
import vector from '../src/assets/Vector.png'
import { FiSearch, FiSliders } from 'react-icons/fi';


const Home = () => {
  return (
    <div className='min-h-screen pt-10'>
        <div className='relative w-full h-full'>
            <img src={pic2} alt="" className='w-[900px] h-[300px] mx-auto' />
            <img src={pic1} alt="" className='absolute top-0 left-60 w-[400px] h-[270px]' />
        </div>

        <div className='absolute top-1/3 right-90'>
            <p className='font-bold text-4xl text-white leading-snug'>BEST COURSES <br />FOR YOU !</p>
        </div>
        
        <button className='absolute top-1/2 right-110 mt-8 px-6 py-2 rounded-full font-medium shadow-md
         bg-[#6E415E] text-white'>Explore More</button>

        <div className='flex justify-center h-[200px] items-center gap-5'>
            <button className='bg-[#6E415E] p-2 rounded-2xl'>
            <img src={vector} className='h-8 w-8'/>
            </button>


            <div className='relative'>
            <FiSearch className='text-[#7a2b5f] absolute top-4 left-4' />
            <input type="text"
            placeholder='Search'
            className='text-[#7a2b5f] border border-b rounded-4xl bg-white py-2 w-100 h-12 pl-12' />
            </div>
         </div>

    </div>
  )
}

export default Home
