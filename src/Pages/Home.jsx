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
    <div className="relative min-h-screen">
      <div className='flex flex-col justify-center align-item pb-[100vh]'>
        <div className='bg-[#53678d] flex flex-col rounded-b-[7vh] rounded-bl-[7vh]'>
          <div className='bg-[#b3d6fa] flex flex-col rounded-b-[7vh] rounded-bl-[7vh]'>
            <div className="w-full bg-[#0f0] flex flex-col rounded-b-[7vh] rounded-bl-[7vh]">
              <div className="w-full bg-gradient-to-br from-[#26c6f7] to-[#c1c58d] flex flex-col rounded-b-[7vh] rounded-bl-[7vh]">
                <Navbar />
                
                {/* Hero Section */}
                <div className='flex w-full flex-col md:flex-row' style={{ 
                  padding: "clamp(15px, 3vw, 40px)",
                  minHeight: "fit-content"
                }}>
                  <div className="w-full md:w-1/2 flex flex-col" style={{
                    gap: "clamp(15px, 3vh, 30px)"
                  }}> 
                    <div className='frontQuote flex flex-wrap gap-[1vh]' style={{ 
                      fontSize: "clamp(24px, 4vw, 60px)"
                    }}>
                      <span>Find</span>
                      <span>a</span>
                      <span>local</span>
                      <span>trusted</span>
                      <span className='text-red-500'>Roofer</span>
                    </div>
                    
                    <div style={{ 
                      fontSize: "clamp(14px, 1.8vw, 24px)"
                    }}>
                      <h1>The idea framework to learn how to</h1>
                      <h1>manage all aspects of startup</h1>
                      <div className='rounded-2xl overflow-hidden bg-black w-fit mt-4'>
                        <CustomButton buttonName={"Start For Free"} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img src={broImg} alt="" style={{ 
                      width: "clamp(200px, 35vw, 400px)",
                      height: "auto"
                    }} />
                  </div>
                </div>

                {/* How It Works Section */}
                <div className='w-full flex justify-center' style={{ 
                  padding: "clamp(15px, 3vw, 40px)"
                }}>
                  <HowItWorks/>
                </div>
              </div>

              {/* Trades Section */}
              <div className="w-full flex justify-center">
                <TradesCarousel />
              </div>
            </div>

            {/* Hire Safely Section */}
            <div className="w-full flex justify-center">
              <HireSafely />
            </div>
          </div>        
          
          {/* Reviews Section */}
          <div className='w-full flex justify-center' style={{
            padding: "clamp(15px, 3vw, 40px)"
          }}>
            <ReviewsCarousel />
          </div>
        </div>

        {/* Download Section */}
        <div className='w-full flex justify-center'>
          <DownloadTradehub/>
        </div>
      </div>

      {/* Footer - Keeping original styling */}
      <div className="container-9 h-[100vh] rounded-b-[7vh] rounded-bl-[7vh] z-[-1] fixed bottom-0 bg-[#1E2939]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

