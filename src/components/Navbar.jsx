import React from 'react';

const Navbar = () => {
  return (
    <div className='w-screen h-[15vh] bg-[#5f77a9] flex justify-between items-center' style={{ padding: "5vh" }}>
      <div>
        <img src="https://tradehub24.com/profile_images/logo.png" className='w-[40vh] h-[7vh]' alt="Logo" />
      </div>
      <div className='flex gap-[2.5vh] text-xl'>
        <div>How It Works</div>
        <div>Join Us</div>
        <div>Popular Trades</div>
        <div>Reviews</div>
        <div>Contact</div>
      </div>
      <div className='text-xl flex gap-[2.5vh]'>
        <button>Login</button>
        <button>Start Free Trial</button>
      </div>
    </div>
  )
}

export default Navbar;
