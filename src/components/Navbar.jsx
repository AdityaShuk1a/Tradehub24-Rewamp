import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import CustomButton from './CustomButton';

const Navbar = () => {
  // useEffect(() => {
  //   // Initial logo animation
  //   gsap.fromTo('.logo', {
  //     y: -50,
  //     opacity: 0
  //   }, {
  //     y: 0,
  //     opacity: 1,
  //     duration: 0.5,
  //     delay: 1
  //   });

  //   // Create timeline for nav items and buttons
  //   const tl = gsap.timeline({ delay: 1.5 });
    
  //   tl.fromTo('.nav-item', {
  //     y: -30,
  //     opacity: 0
  //   }, {
  //     y: 0,
  //     opacity: 1,
  //     duration: 0.5,
  //     stagger: 0.1
  //   })
  //   .fromTo('.button-container button', {
  //     y: -30,
  //     opacity: 0
  //   }, {
  //     y: 0,
  //     opacity: 1,
  //     duration: 0.5,
  //     stagger: 0.1
  //   });
  // }, []);

  return (
    <div className='w-full flex flex-col md:flex-row justify-between items-center' style={{ 
      padding: "clamp(10px, 3vw, 5vh)",
      minHeight: "clamp(60px, 15vh, 120px)",
      gap: "clamp(10px, 2vw, 20px)"
    }}>
      <div className='logo'>
        <img 
          src="https://tradehub24.com/profile_images/logo.png" 
          alt="Logo" 
          style={{
            width: "clamp(150px, 30vw, 40vh)",
            height: "auto",
            maxHeight: "7vh"
          }}
        />
      </div>
      
      <div style={{
        fontSize: "clamp(14px, 1.8vw, 24px)",
        gap: "clamp(10px, 2.5vh, 30px)"
      }} className='flex flex-wrap justify-center gap-[2.5vh]'>
        <div className='nav-item cursor-pointer hover:text-blue-500'>How It Works</div>
        <div className='nav-item cursor-pointer hover:text-blue-500'>Join Us</div>
        <div className='nav-item cursor-pointer hover:text-blue-500'>Popular Trades</div>
        <div className='nav-item cursor-pointer hover:text-blue-500'>Reviews</div>
        <div className='nav-item cursor-pointer hover:text-blue-500'>Contact</div>
      </div>

      <div style={{
        fontSize: "clamp(12px, 1.5vw, 20px)",
        gap: "clamp(8px, 2.5vh, 25px)"
      }} className='flex gap-[2.5vh] button-container'>
        <CustomButton buttonName={"Login"} />
        <CustomButton buttonName={"Start Free Trial"} />
      </div>
    </div>
  )
}

export default Navbar;
