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
    <div style={{
      display: "flex",
      flexDirection: "column", 
      width: "100%",
      height: "100%",
      backgroundColor: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)",
      margin: 0,
      padding: 0,
      overflowX: "hidden"
      // overflowY: "hidden",
    }}>
      {/* Part 1 - Hero Section */}
      <div style={{
        background: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)",
        Height: "100vh",
        padding: "2vh 0",
        marginTop: "14vh",
        display: "flex",
        flexDirection: "column",
        color: "#1A237E"
      }}>
        <Navbar />
        <div style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          margin: "2vh 0",
          padding: "3vw",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(5px)",
          '@media (max-width: 768px)': {
            flexDirection: "column",
            padding: "4vw",
            margin: "1vh 0"
          }
        }}>
          <div style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "3vh",
            padding: "0 2vw",
            '@media (max-width: 768px)': {
              width: "100%",
              padding: "2vw",
              gap: "2vh"
            }
          }}>
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
      <div style={{
        background: "linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)",
        Height: "100vh",
        padding: "5vh 3vw",
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#E65100"
      }}>
        <HowItWorks />
      </div>

      {/* Part 3 - Trades Section */}
      <div style={{
        background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
        Height: "100vh",
        padding: "5vh 3vw",
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#1B5E20"
      }}>
        <TradesCarousel />
      </div>

      {/* Part 4 - Hire Safely */}
      <div style={{
        background: "linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)",
        Height: "100vh",
        padding: "5vh 3vw",
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#4A148C"
      }}>
        <HireSafely />
      </div>

      {/* Part 5 - Reviews and Download */}
      <div style={{
        background: "linear-gradient(135deg, #E1F5FE 0%, #B3E5FC 100%)",
        Height: "100vh",
        padding: "5vh 3vw",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "5vh",
        color: "#01579B"
      }}>
        <div style={{
          width: "100%",
          margin: "0 0 5vh 0",
          padding: "3vh",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "2vh"
        }}>
          <ReviewsCarousel />
        </div>
        <div style={{
          width: "100%",
          margin: 0,
          padding: "3vh",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "2vh"
        }}>
          <DownloadTradehub />
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        background: "linear-gradient(to right, #1A237E, #0D47A1)",
        Height: "40vh",
        margin: 0,
        padding: "4vh 3vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
        boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)"
      }}>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

