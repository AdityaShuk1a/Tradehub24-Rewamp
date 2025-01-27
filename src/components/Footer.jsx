import React from 'react'
import Support from '../components/Support.jsx'

const Footer = () => {
  return (
    <div className="flex flex-col  h-screen">
      {/* Main Support Section */}
      <div className="flex-grow h-[61vh] w-screen ">
        <Support />
      </div>
      
      {/* Footer Section */}
      <div
        className="w-screen  bg-gray-800 text-white flex-grow"
        style={{
          padding: '5vh 8vw',
          marginTop: 'auto', // Ensures the footer stays at the bottom
          overflowY: 'auto', // Allows scroll for mobile view if necessary
        }}
      >
        <div
          className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4"
          style={{ maxWidth: '1200px', margin: '0 auto' }} // Ensuring a max-width for large screens
        >
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Example</h3>
            <p className="mb-2">Example</p>
            <p className="mb-2">123 Example Street, Example City, Example Country</p>
            <p className="mb-2">
              <a href="tel:+1514890000" className="hover:text-yellow-400">
                1-514-890-0000
              </a>
            </p>
            <p>
              <a
                href="mailto:calinscompagnies@calins.com"
                className="hover:text-yellow-400"
              >
                calinscompagnies@calins.com
              </a>
            </p>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Example</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Delivery Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Our Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Work at Hugs
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Example</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  My Personal Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  My Addresses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  My Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  My Favorites
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="mb-4">
              <li>
                <a href="tel:+1514890000" className="hover:text-yellow-400">
                  1-514-890-0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:calinscompagnies@calins.com"
                  className="hover:text-yellow-400"
                >
                  Send mail
                </a>
              </li>
            </ul>
            <div className="mt-4 icons" style={{ display: 'flex' }}>
              <a href="#" className="mr-2">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="mr-2">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="mailto:calinscompagnies@calins.com">
                <i className="far fa-envelope fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        <p className="text-center mt-8" style={{ marginTop: '2vh' }}>
          &copy; 2024 - All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
