import React from 'react';
import CustomButton from './CustomButton';

const HireSafely = () => {
  return (
    <>
      <div className='w-[80%] h-[80%] bg-amber-500 relative flex justify-center items-center'>
        <div className="flex absolute w-[100%] h-[100%] items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          
        <div>

          <img className="object-cover rounded-t-lg h-96" src="src//assets//bro2.png" alt="" />
          <div className='w-[20vh] h-[1vh] ' style={{marginTop : "4vh"}}  >

          <CustomButton buttonName={"Sign Up As Home Owner  "} />
          </div>
        </div>
          
          
          <div className="flex flex-col bg-green-300 w-[70%] justify-between p-4 leading-normal">
            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: "4.5vh" }}>Hire safely with our homeowner checklist</h5>
            <h4 className='mb-2 tracking-tight text-gray-900 dark:text-white' style={{ fontSize: "2.5vh" }}>✔️ Follow our top tips to ensure a safe and successful hire:</h4>
            <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{ fontSize: "2.5vh" }}>✔️ Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</h4>
            <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{ fontSize: "2.5vh" }}>✔️ Convenient job posting & tradespeople selection for clients</h4>
            <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{ fontSize: "2.5vh" }}>✔️ Increased visibility & job opportunities for registered tradespeople</h4>
            <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{ fontSize: "2.5vh" }}>✔️ Streamlined communication between clients and tradespeople</h4>
            <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{ fontSize: "2.5vh" }}>✔️ Secure payment processing & feedback mechanisms</h4>
            <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{ fontSize: "2.5vh" }}>✔️ Ongoing support & platform maintenance</h4>
            <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{ fontSize: "2.5vh" }}>✔️ Get our FREE Homeowner's Checklist today!</h4>
          </div>
          
        </div>
        
      </div>
            
    </>
  );
};

export default HireSafely;
