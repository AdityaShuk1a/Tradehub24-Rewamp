// Home.jsx
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import broImg from '../assets/bro.png';
import CustomButton from '../components/CustomButton.jsx'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import TradesCarousel from '../components/TradesCarousel.jsx';
import ReviewsCarousel from '../components/ReviewCarousel.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import HireSafely from '../components/HireSafely.jsx';

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
    <>
      <div className='container-1 h-full bg-[#b3d6fa] flex flex-col z-10 rounded-b-[7vh] rounded-bl-[7vh]'>
        <div className='container-2 h-[390vh] bg-[#53678d] flex flex-col rounded-b-[7vh] rounded-bl-[7vh]'>
          <div className='container-3 h-full bg-[#b3d6fa] flex flex-col rounded-b-[7vh] rounded-bl-[7vh]'>
            <div className="container-4 h-[210vh] w-screen bg-[#0f0] flex flex-col  rounded-b-[7vh] rounded-bl-[7vh]">
              <div className="container-5 h-[110vh] w-screen bg-gradient-to-br from-[#26c6f7] to-[#c1c58d] justify-center rounded-b-[7vh] rounded-bl-[7vh]">
                <Navbar />
                <div className='flex w-screen' style={{ marginTop: "7vh", marginLeft : "5vh" }}>
                  <div className="container-7 h-[50vh]  w-1/2"> 
                    <div className='flex flex-wrap w-[57vh] bg-transparent text-[7vh] gap-[1vh]' style={{ padding: "1vh" , marginLeft : "3vh"}}>
                      <span style={{marginBottom : "-2vh"}} >Find</span>
                      <span style={{marginBottom : "-2vh"}} >a</span>
                      <span style={{marginBottom : "-2vh"}} >local</span>
                      <span style={{marginBottom : "-2vh"}} >trusted</span>
                      <span className='text-red-500' style={{marginBottom : "-2vh"}}>Roofer</span>
                    </div>
                    <div className='' style={{ marginTop: "2.88vh", padding: "1.44vh", fontSize: "1.92vh" ,  marginLeft : "3vh"}}>
                      <h1>The idea framework to learn how to</h1>
                      <h1>manage all aspects of startup</h1>
                      <div className='rounded-2xl overflow-hidden bg-black w-fit ' style={{marginTop : "5vh"}} >

                      <CustomButton buttonName={"Start For Free"} />
                      </div>
                    </div>
                  </div>
                  <div className="container-8 h-[50vh]  w-1/2 flex justify-center items-center">
                    <img src={broImg} alt="" style={{ width: "38.46vh" }} />
                  </div>
                </div>
                <div className=' h-[23vh]  bg-[] ' style={{ margin : "8vh" }}>
                  <div className='flex flex-wrap w-full h-[26.92vh] border rounded-[7vh] items-center justify-evenly'>
                    <HowItWorks/>
                  </div>
                </div>
              </div>

              <div className="my-8 ">
          
                <TradesCarousel />
              </div>

              <div className="container-6 h-[100vh] w-screen flex rounded-b-[7vh] rounded-bl-[7vh] overflow-hidden">
                <div className="container-7 h-[100vh] w-1/2">
                </div>
                <div className="container-8 h-[100vh] w-1/2">
                </div>
              </div>
            </div>
            <div className="container-9 h-[90vh] flex items-center justify-center rounded-b-[7vh] rounded-bl-[7vh]">
              < HireSafely />
            </div>
          </div>        
          <div className='w-screen h-[full] flex justify-center ' style={{padding : "10vh"}} >

          <ReviewsCarousel />
          </div>
          
          <div className="container-10 h-[100vh] w-1/2">
          </div>
        </div>
        <div className="container-11 h-[100vh] w-1/2">
        </div>
      </div>
      <div className="container-9 h-[100vh] rounded-b-[7vh] rounded-bl-[7vh]">
      </div>
      <div className="container-9 h-[100vh] rounded-b-[7vh] rounded-bl-[7vh] z-[-1] fixed bottom-0 bg-[#1E2939]"  >
        <Footer />
      </div>
    </>
  );
};

export default Home;
