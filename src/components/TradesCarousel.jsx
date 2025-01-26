import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const TradesCarousel = () => {

  const tradesData = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150?text=Image+1',
      heading: 'Trade 1',
      description: 'Description for trade 1',
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

  return (
    <>
    {/* <div className=" "> */}
      <h2 className="text-center text-[4vh] font-bold my-[5vh]" style={{marginTop : "10vh" , marginBottom : "7vh"}} >Our Popular Trades</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
        }}
        className="swiper-container"
      >
        {tradesData.map((trade) => (
          <SwiperSlide key={trade.id}>
            <div className="card bg-white p-[3vh] shadow-lg rounded-lg text-center">
              <img
                src={trade.image}
                alt={trade.heading}
                className="w-full h-[20vw] object-cover rounded-lg mb-[2vh]"
              />
              <h2 className="text-[3.5vh] font-bold mb-[1vh]">{trade.heading}</h2>
              <p className="text-[2.5vh] text-gray-600 mb-[2vh]">{trade.description}</p>
              <button className="bg-blue-500 text-white px-[4vw] py-[1vh] rounded-full hover:bg-blue-600">
                View {trade.heading}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    {/* </div> */}
    </>
  );
};

export default TradesCarousel;
