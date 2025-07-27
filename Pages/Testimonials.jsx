import React from 'react'
import testimonials from '../src/assets/testimonials.png'
import PopularedCourses from './PopularedCourses'

const Testimonials = () => {
  return (
    <div className='w-full px-6 sm:px-10 md:px-10'>
      {/* <h2 className='font-bold text-3xl pt-20 pb-1 text-start pl-40'>Testimonials</h2> */}
      <PopularedCourses heading="Testimonials" />
      <div className='md:flex justify-center gap-5'>
        <div className='flex flex-col items-center pt-15'><img src={testimonials} className='w-[250px] h-[250px] top-880 left-200'/>
      <p className='text-[#E4B4D3] pt-5'>BradySha</p>
      <p className='text-[#E4B4D3]'>Student of Data Science</p>
      <p className='text-[#E4B4D3] w-[300px] text-center pt-5'>“I'm loving it! The interactive lessons and engaging videos made learning fun and easy.I've seen 
        significant improvement in my understanding and grades. Highly recommend!”</p>
      </div>

      <div className='flex flex-col items-center pt-15'><img src={testimonials} className='w-[250px] h-[250px] top-880 left-200'/>
      <p className='text-[#E4B4D3] pt-5'>BradySha</p>
      <p className='text-[#E4B4D3]'>Student of Data Science</p>
      <p className='text-[#E4B4D3] w-[300px] text-center pt-5'>“I'm loving it! The interactive lessons and engaging videos made learning fun and easy.I've seen 
        significant improvement in my understanding and grades. Highly recommend!”</p>
      </div>


      <div className='flex flex-col items-center pt-15'><img src={testimonials} className='w-[250px] h-[250px] top-880 left-200'/>
      <p className='text-[#E4B4D3] pt-5'>BradySha</p>
      <p className='text-[#E4B4D3]'>Student of Data Science</p>
      <p className='text-[#E4B4D3] w-[300px] text-center pt-5'>“I'm loving it! The interactive lessons and engaging videos made learning fun and easy.I've seen 
        significant improvement in my understanding and grades. Highly recommend!”</p>
      </div>
      </div>
    </div>
  )
}

export default Testimonials
