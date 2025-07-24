import React from 'react'
import faq from '../src/assets/faq.png'
const Faqs = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <h2 className='font-bold text-3xl pt-15 pb-1 text-center text-pink-700'>FAQs</h2>
      <p className='text-pink-400 text-xl text-center'>Frequently Asked Questions</p>
      
      <div className='flex justify-items items-center'>
        <div>
        <img src={faq} className='w-[200px] h-[200px] mr-30' />
        </div>
        <div className='text-[#E4B4D3] mr-100'>
        <hr className='text-pink-400'/>
        <li className='flex justify-between items-center text-2xl py-2 '><span>What is Edufy?</span><span className='text-4xl'>+</span></li>
        <hr />
        <li>Are the courses free or paid?<span></span></li>
        <hr />
        <li>Will I get a certificate after completing a course?</li>
        <hr />
        <li>How do I enroll in a course?</li>
        <hr />
        <li>Can I access courses offlines?</li>
        <hr />
        <li>Do you offer discounts or promotions?</li>
        <hr />
        </div>
      </div>

      <div>
        icons
      </div>

      <div>
        terms
      </div>
    </div>
  ) 
}

export default Faqs

