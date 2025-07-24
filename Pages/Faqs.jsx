import React from 'react'
import faq from '../src/assets/faq.png'
const Faqs = () => {
  return (
    <div>
      <h2 className='font-bold text-3xl pt-10 pb-1 text-center text-pink-700'>FAQs</h2>
      <p className='text-pink-400 text-xl pt-2 pb-1 text-center'>Frequently Asked Questions</p>

      <div className='flex justify-items items-center'>
        <div>
        <img src={faq} className='w-[300px] h-[300px]' />
        </div>
        <div className='text-[#E4B4D3]'>
        <p>What is Edufy?</p>
        <p>Are the courses free or paid?</p>
        <p>Will I get a certificate after completing a course?</p>
        <p>How do I enroll in a course?</p>
        <p>Can I access courses offlines?</p>
        <p>Do you offer discounts or promotions?</p>
        </div>
      </div>
    </div>
  ) 
}

export default Faqs

