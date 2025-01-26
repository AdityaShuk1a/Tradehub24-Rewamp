import React from 'react';

const HireSafely = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-[7vh] mx-auto my-8 flex flex-col justify-center items-center max-w-[900px]">
      <h2 className="text-center text-3xl font-bold mb-6">
        Hire safely with our <br /> homeowner checklist
      </h2>
      <p className="text-center text-xl mb-6">
        Follow our top tips to ensure a safe and successful hire:
      </p>
      <ul className="list-disc pl-10 mb-6 text-lg">
        <li>Convenient job posting & tradespeople selection for clients</li>
        <li>Increased visibility & job opportunities for registered tradespeople</li>
        <li>Streamlined communication between clients and tradespeople</li>
        <li>Secure payment processing & feedback mechanisms</li>
        <li>Ongoing support & platform maintenance</li>
      </ul>
      <p className="text-center text-lg mb-6">
        Get our FREE Homeowner's Checklist today!
      </p>
      <div className="flex justify-center">
        <button className="bg-blue-600 text-white text-lg px-8 py-3 rounded-full hover:bg-blue-700">
          Sign up as Homeowner
        </button>
      </div>
    </div>
  );
};

export default HireSafely;
