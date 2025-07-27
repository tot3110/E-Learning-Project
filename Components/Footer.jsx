import React from 'react';
import gmail from '../src/assets/gmail.png';
import linkedin from '../src/assets/linkedin.png';
import instagram from '../src/assets/instagram.png';
import facebook from '../src/assets/facebook.png';
import twitter from '../src/assets/twitter.png';

const Footer = () => {
  return (
    <footer className='px-4 sm:px-8 md:px-16 py-8 text-center'>
      {/* Contact Prompt */}
      <h2 className='text-base sm:text-lg font-semibold mb-2 text-[#E8C2DB]'>
        Still need help? Send us a note!
      </h2>
      <p className='text-[#E8C2DB] text-sm mb-4'>
        For any other questions, please contact us at{' '}
        <a href='mailto:support@edufy.com' className='text-pink-600'>
          support@edufy.com
        </a>
      </p>

      {/* Social Icons */}
      <div className='flex flex-wrap justify-center gap-6 my-6'>
        {[gmail, linkedin, instagram, facebook, twitter].map((icon, idx) => (
          <a href='#' key={idx}>
            <img src={icon} alt='social-icon' className='w-8 h-8 sm:w-10 sm:h-10' />
          </a>
        ))}
      </div>

      <hr className='border-pink-400 my-4' />

      {/* Footer Links */}
      <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-12 text-[#E4B4D3] text-sm'>
        <a href='#'>Terms</a>
        <a href='#'>Privacy</a>
        <a href='#'>Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
