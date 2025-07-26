import React from 'react'
import faq from '../src/assets/faq.png'
const Faqs = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <h2 className='font-bold text-3xl pt-15 pb-1 text-center text-pink-700'>FAQs</h2>
      <p className='text-pink-400 text-xl text-center'>Frequently Asked Questions</p>
      
      <div className='flex justify-items items-center p-15'>
        <div>
        <img src={faq} className='w-[250px] h-[250px] mr-15' />
        </div>
        <div className='text-[#E8C2DB] mr-80'>
        <hr className='text-pink-400'/>
        <li className='flex justify-between items-center text-2xl py-2'><span>What is Edufy?</span><span className='text-4xl'>+</span></li>
        <hr className='text-pink-400'/>
        <li className='flex justify-between items-center text-2xl py-2'>Are the courses free or paid?<span className='text-4xl'>+</span></li>
        <hr className='text-pink-400'/>
        <li className='flex justify-between items-center text-2xl py-2'>Will I get a certificate after completing a course?<span className='text-4xl'>+</span></li>
        <hr className='text-pink-400'/>
        <li className='flex justify-between items-center text-2xl py-2'>How do I enroll in a course?<span className='text-4xl'>+</span></li>
        <hr className='text-pink-400'/>
        <li className='flex justify-between items-center text-2xl py-2'>Can I access courses offlines?<span className='text-4xl'>+</span></li>
        <hr className='text-pink-400'/>
        <li className='flex justify-between items-center text-2xl py-2'>Do you offer discounts or promotions?<span className='text-4xl'>+</span></li>
        <hr className='text-pink-400'/>
        </div>
      </div>
    </div>
  ) 
}

export default Faqs

