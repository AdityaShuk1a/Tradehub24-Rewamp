import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CustomButton from './CustomButton';
import Card from './Card';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TradesCarousel = () => {
  const tradesData = [
    {
      id: 1,
      image: "https://tradehub24.com/profile_images/tool.svg",
      title: "Plumbing Services",
      description: "Expert plumbing solutions for all your needs. From repairs to installations.",
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150?text=Image+2',
      heading: 'Trade 2',
      description: 'Description for trade 2',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150?text=Image+3',
      heading: 'Trade 3',
      description: 'Description for trade 3',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150?text=Image+1',
      heading: 'Trade 4',
      description: 'Description for trade 4',
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/150?text=Image+2',
      heading: 'Trade 5',
      description: 'Description for trade 5',
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/150?text=Image+3',
      heading: 'Trade 6',
      description: 'Description for trade 6',
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/150?text=Image+1',
      heading: 'Trade 7',
      description: 'Description for trade 7',
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/150?text=Image+2',
      heading: 'Trade 8',
      description: 'Description for trade 8',
    },
    {
      id: 9,
      image: 'https://via.placeholder.com/150?text=Image+3',
      heading: 'Trade 9',
      description: 'Description for trade 9',
    },
  ];

  useEffect(() => {
    // const tl = gsap.timeline();

    gsap.fromTo('.tradesCarouselHeading', {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.tradesCarouselHeadingParent',
        scroller: 'body',
        start: 'top 60%',
        end: 'top 0%',
        // toggleActions: "play none none reverse"
      }
    })

    gsap.fromTo('.tradesCarousel', {
      x: 50,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.tradesCarouselHeadingParent',
        scroller: 'body',
        start: 'top 50%',
        end: 'top 0%'
      }
    });

    
  }, []);

  return (
    <div className=" tradesCarouselHeadingParent w-full flex flex-col items-center" style={{
      padding: "clamp(15px, 3vw, 50px)",
      minHeight: "clamp(400px, 70vh, 800px)",
      '@media (max-width: 768px)': {
        padding: "15px",
        minHeight: "500px"
      }
    }}>
      <h2 className="tradesCarouselHeading text-center font-bold w-full" style={{
        fontSize: "clamp(24px, 4vw, 48px)",
        marginBottom: "clamp(20px, 4vh, 60px)",
        '@media (max-width: 768px)': {
          fontSize: "28px",
          marginBottom: "30px"
        }
      }}>
        Popular Trades
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { 
            slidesPerView: 1,
            spaceBetween: 15
          },
          640: { 
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: { 
            slidesPerView: 3,
            spaceBetween: 25
          }
        }}
        style={{
          padding: "clamp(10px, 2vw, 30px)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          '@media (max-width: 768px)': {
            padding: "15px 10px"
          }
        }}
      >
        {tradesData.map((trade) => (
          <div className="tradesCarousel" >

          <SwiperSlide className="tradesCarousel" key={trade.id} style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center" style={{
              padding: "clamp(20px, 3vw, 35px)",
              width: "100%",
              maxWidth: "400px",
              minHeight: "clamp(300px, 45vh, 400px)",
              gap: "clamp(15px, 2.5vh, 25px)",
              '@media (max-width: 768px)': {
                padding: "20px",
                minHeight: "280px",
                gap: "15px"
              }
            }}>
              <div className="w-full flex justify-center" style={{
                height: "clamp(120px, 20vh, 180px)",
                marginBottom: "clamp(10px, 2vh, 20px)",
                '@media (max-width: 768px)': {
                  height: "120px",
                  marginBottom: "15px"
                }
              }}>
                <div style={{
                  width: "clamp(120px, 25vw, 200px)",
                  height: "100%",
                  position: "relative",
                  '@media (max-width: 768px)': {
                    width: "120px"
                  }
                }}>
                  <img 
                    src={trade.image} 
                    alt={trade.title} 
                    className="rounded-lg"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center"
                    }}
                  />
                </div>
              </div>

              <h3 className="font-semibold text-center" style={{
                fontSize: "clamp(20px, 2.5vw, 28px)",
                marginBottom: "clamp(10px, 2vh, 20px)",
                '@media (max-width: 768px)': {
                  fontSize: "20px",
                  marginBottom: "10px"
                }
              }}>
                {trade.title}
              </h3>

              <p className="text-gray-700 text-center flex-grow flex items-center justify-center" style={{
                fontSize: "clamp(16px, 1.8vw, 20px)",
                lineHeight: "1.6",
                padding: "0 clamp(10px, 2vw, 20px)",
                '@media (max-width: 768px)': {
                  fontSize: "16px",
                  lineHeight: "1.5",
                  padding: "0 10px"
                }
              }}>
                {trade.description}
              </p>
            </div>
          </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default TradesCarousel;
