import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import CustomButton from './CustomButton';
import Card from './Card';

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
      <h2 className="text-center text-[4vh] font-bold my-[5vh]" style={{ marginTop: "10vh", marginBottom: "7vh" }}>Our Popular Trades</h2>
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
            <Card tradeId={trade.id} tradeHeading={trade.heading} tradeImage={trade.image} tradeDescription={trade.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TradesCarousel;
