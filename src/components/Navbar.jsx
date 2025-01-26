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
    <div className='w-screen h-[15vh] flex justify-between items-center' style={{ padding: "5vh" }}>
      <div className='logo'>
        <img src="https://tradehub24.com/profile_images/logo.png" className='w-[40vh] h-[7vh]' alt="Logo" />
      </div>
      <div className='flex gap-[2.5vh] text-2xl'>
        <div className='nav-item'>How It Works</div>
        <div className='nav-item'>Join Us</div>
        <div className='nav-item'>Popular Trades</div>
        <div className='nav-item'>Reviews</div>
        <div className='nav-item'>Contact</div>
      </div>
      <div className='text-xl flex gap-[2.5vh] button-container'>
        <CustomButton buttonName={"Login"} />
        <CustomButton buttonName={"Start Free Trial"} />
      </div>
    </div>
  )
}

export default Navbar;
