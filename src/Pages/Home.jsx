// Home.jsx
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import broImg from '../assets/bro.png';
import CustomButton from '../components/CustomButton.jsx'
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import TradesCarousel from '../components/TradesCarousel.jsx';
import ReviewsCarousel from '../components/ReviewCarousel.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import HireSafely from '../components/HireSafely.jsx';
import DownloadTradehub from '../components/DownloadTradehub.jsx';



// b3d6fa
// 53678d
//bdf
//e99f9f

const topL = '#1D8189'
const botR = '#B89D91'
const innerLight = '#767572'
const butRed ="#CAAA9E"
const fillLightP2 = '#EEE3DB'
const p3topR = '#2C8796'
const p3botL = "#4E6E72"
const p3CardDark = '#EEE3DB'
const p3CardLight = '#F7F4F3'
const CardDark = '#151114'


const Home = () => {
  return (
    <div className="flex flex-col w-full h-full bg-black m-0 p-0 overflow-x-hidden">
      {/* Part 1 - Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-200 h-screen py-[2vh] m-0 flex flex-col text-blue-900">
        <Navbar />
        <div className="flex w-full flex-row m-[2vh] p-[3vw] ">
          <div className="w-full flex flex-col gap-[3vh] p-[0_2vw]">
            <div className='frontQuote' style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1vh",
              margin: "7vh 0 0 3vh",
              fontSize: "clamp(24px,4vw,60px)"
            }}>
              <p>
                Find a local trusted
              </p>
              <p className='text-[#4299E1]'>Roofer</p>
            </div>
            <div style={{
              margin: "0 0 0 3vh"
            }}>
              <h1 className='frontQuote' style={{
                fontSize: "clamp(14px,1.8vw,24px)",
                margin: "0"
              }}>The idea framework to learn how to</h1>
              <h1 className='frontQuote' style={{
                fontSize: "clamp(14px,1.8vw,24px)",
                margin: "0  "
              }}>manage all aspects of startup</h1>
              
              <div style={{
                
                marginTop: "3vh",
                borderRadius: "2xl",
                overflow: "hidden",
                width: "fit-content"
              }}>
                <div className='frontQuote'>

                <CustomButton  buttonName={"Start For Free"} />
                </div>
                
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
                
            <img className='heroImg w-[clamp(200px,35vw,400px)] h-auto' src={broImg} alt="hero" />
          </div>
        </div>
      </div>

      {/* Part 2 - How It Works */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-200 h-screen py-[5vh] px-[3vw] m-0 flex items-center justify-center text-orange-900">
        <HowItWorks />
      </div>

      {/* Part 3 - Trades Section */}
      <div className="bg-gradient-to-br from-green-50 to-green-200 h-screen py-[5vh] px-[3vw] m-0 flex items-center justify-center text-green-900">
        <TradesCarousel />
      </div>

      {/* Part 4 - Hire Safely */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-200 h-screen py-[5vh] px-[3vw] m-0 flex items-center justify-center text-purple-900">
        <HireSafely />
      </div>

      {/* Part 5 - Reviews and Download */}
      <div className="bg-gradient-to-br from-sky-50 to-sky-200 h-screen py-[5vh] px-[3vw] m-0 flex flex-col gap-[5vh] text-sky-900">
        <div className="w-full mb-[5vh] p-[3vh] bg-white/20">
          <ReviewsCarousel />
        </div>
        <div className="w-full m-0 p-[3vh] bg-white/20">
          <DownloadTradehub />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 h-[40vh] m-0 py-[4vh] px-[3vw] flex items-center justify-center text-white shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

