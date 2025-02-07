// Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import broImg from '../assets/bro.png';
import CustomButton from '../components/CustomButton.jsx';
import TradesCarousel from '../components/TradesCarousel.jsx';
import ReviewsCarousel from '../components/ReviewCarousel.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import HireSafely from '../components/HireSafely.jsx';
import DownloadTradehub from '../components/DownloadTradehub.jsx';

const Home = () => {
  return (
    <>
    
    <div className="flex flex-col w-full bg-[#f2efef] min-h-screen overflow-x-hidden">
      <div className='fixed top-0 left-0 right-0 z-[999]' >

        <Navbar />
      </div>
      {/* Part 1 - Hero Section */}
      <div className="bg-[#f2efef] h-[80vh] py-[32px] flex justify-center flex-col items-center" style={{
        marginTop : "10vh"
      }}>
        <div className="border-2 rounded-4xl border-black flex w-11/12 mt-[144px] backdrop-blur-md flex-col sm:flex-col md:flex-row">
          <div className="flex flex-col gap-12 w-full py-3 px-3 justify-center">
            <div className="frontQuote flex flex-wrap gap-4 mt-[80px] text-[clamp(24px,4vw,60px)] justify-center">
              <p>Find a local trusted Roofer</p>
            </div>
            <div className="flex flex-col text-center align-center justify-center md:justify-center ">
              <h1 className="frontQuote text-[clamp(14px,1.8vw,24px)] m-0">The idea framework to learn how to</h1>
              <h1 className="frontQuote text-[clamp(14px,1.8vw,24px)] m-0">manage all aspects of startup</h1>
              <div className="frontQuote mt-[4vh] rounded-2xl align-center overflow-hidden flex justify-center w-full">
                <CustomButton buttonName={"Start For Free"} />
              </div>
            </div>
          </div>
          <div className="hover:scale-115 transition-transform duration-300 w-full md:w-1/2 flex justify-center items-center">
            <img className="heroImg h-auto w-[clamp(200px,35vw,400px)]" src={broImg} alt="hero" />
          </div>
        </div>
      </div>

      {/* Part 2 - How It Works */}
      <div className="bg-[#88bbd3] min-h-screen py-20 px-12 flex items-center justify-center">
        <HowItWorks />
      </div>

      {/* Part 3 - Trades Section */}
      <div className="bg-[#f2efef] min-h-screen py-20 px-12 flex items-center justify-center">
        <TradesCarousel />
      </div>

      {/* Part 4 - Hire Safely */}
      <div className="bg-[#88bbd3] h-[100vh] flex items-center justify-center" style={{
        padding : "10vh"
      }}>
        <HireSafely />
      </div>

      {/* Part 5 - Reviews and Download */}
      <div className="min-h-screen flex flex-col gap-20 py-20">
        <div className="w-full mb-20 p-12 rounded-2xl">
          <ReviewsCarousel />
        </div>
        <div className="bg-[#88bbd3] w-full p-12 rounded-2xl">
          <DownloadTradehub />
        </div>
      </div>

      {/* Footer */}
      
    </div>
    </>
  );
};

export default Home;
