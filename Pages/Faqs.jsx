import React from 'react';
import faq from '../src/assets/faq.png';

const Faqs = () => {
  return (
    <div className='w-full flex flex-col items-center px-4 sm:px-8 md:px-16'>
      <h2 className='font-bold text-2xl sm:text-3xl pt-10 pb-1 text-center text-pink-700'>FAQs</h2>
      <p className='text-pink-400 text-lg sm:text-xl text-center mb-6'>Frequently Asked Questions</p>

      <div className='flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl'>
        {/* Image Section */}
        <div className='flex-shrink-0'>
          <img 
            src={faq} 
            alt='FAQs' 
            className='w-52 h-52 sm:w-64 sm:h-64 object-contain mx-auto' 
          />
        </div>

        {/* FAQs List */}
        <div className='text-[#E8C2DB] w-full'>
          {[
            'What is Edufy?',
            'Are the courses free or paid?',
            'Will I get a certificate after completing a course?',
            'How do I enroll in a course?',
            'Can I access courses offline?',
            'Do you offer discounts or promotions?'
          ].map((question, index) => (
            <div key={index}>
              <hr className='border-pink-300' />
              <li className='flex justify-between items-center text-lg sm:text-2xl py-3 list-none'>
                <span>{question}</span>
                <span className='text-3xl sm:text-4xl'>+</span>
              </li>
            </div>
          ))}
          <hr className='border-pink-300' />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
