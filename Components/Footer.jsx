import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import gmail from '../src/assets/gmail.png'
import linkedin from '../src/assets/linkedin.png'
import instagram from '../src/assets/instagram.png'
import facebook from '../src/assets/facebook.png'
import twitter from '../src/assets/twitter.png'


const Footer = () => {
  return (
    <footer className='px-6 py-8 text-center'>
        <h2 className='text-lg font-semibold mb-2 text-[#E8C2DB]'>Still need help? Send us a note!</h2>
        <p className='text-[#E8C2DB] text-sm mb-2'>For any other questions, please contact us at {""}
            <a href="mailto:support@edufy.com" className='text-pink-600'>support@edufy.com</a>
        </p>

        <div className='flex justify-center gap-8 text-4xl my-4'>
            <a href="">
                <img src={gmail} className='w-10 h-10' />
            </a>
            <a href="">
                <img src={linkedin} className='w-10 h-10' />
            </a>
            <a href="">
                <img src={instagram} className='w-10 h-10' />
            </a>
            <a href="">
                <img src={facebook} className='w-10 h-10' />
            </a>
            <a href="">
                <img src={twitter} className='w-10 h-10' />
            </a>
        </div>

        <hr className='text-[#B6116B]'/>

        
        <div className='text-[#E4B4D3] p-10'>
            <a href="">Terms</a>
            <a href="" className='pl-40'>Privacy</a>
            <a href="" className='pl-40'>Conditions</a>
        </div>
    </footer>
  )
}

export default Footer

