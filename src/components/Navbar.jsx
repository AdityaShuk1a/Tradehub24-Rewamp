import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import CustomButton from './CustomButton';

const Navbar = () => {
  
  return (
    <div className='w-full navbar bg-[#45455d4e] absolute flex flex-col items-center justify-center gap-2.5 top-0 left-0 right-0 z-[999] py-3 px-3 backdrop-blur-lg 
    md:flex-row md:justify-between md:items-center
    '>
      
      <div className='logo flex justify-center md:justify-start lg:justify-start'>
        <img 
          src="https://tradehub24.com/profile_images/logo.png" 
          alt="Logo" 
          className='w-[25vh] max-h-[3vh] lg:w-[30vh] lg:max-h-[3.5vh]'
        />
      </div>
      
      <div className='flex gap-2 md:flex-row md:justify-center md:gap-2 text-base'>
        <div className='nav-item cursor-pointer hover:text-blue-500 text-xs md:text-sm flex justify-center'>How It Works</div>
        <div className='nav-item cursor-pointer hover:text-blue-500 text-xs md:text-sm flex justify-center'>Join Us</div>
        <div className='nav-item cursor-pointer hover:text-blue-500 text-xs md:text-sm flex justify-center'>Popular Trades</div>
        <div className='nav-item cursor-pointer hover:text-blue-500 text-xs md:text-sm flex justify-center'>Reviews</div>
        <div className='nav-item cursor-pointer hover:text-blue-500 text-xs md:text-sm flex justify-center'>Contact</div>
      </div>

      <div className='flex lg:flex-row md:flex-row gap-2 lg:gap-4 sm:flex-col text-[clamp(10px,1.2vw,18px)] button-container justify-center '>
        <CustomButton buttonName={"Login"} className="text-xs md:text-sm lg:text-base" />
        <CustomButton buttonName={"Start Free Trial"} className="text-xs md:text-sm lg:text-base" />
      </div>
    </div>
  )
}
export default Navbar;
