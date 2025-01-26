import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const ReviewsCarousel = () => {
  const reviewsData = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150?text=User+1',
      name: 'John Doe',
      review: 'This is an excellent service, highly recommend it!',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150?text=User+2',
      name: 'Jane Smith',
      review: 'Great experience, very professional and reliable.',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150?text=User+3',
      name: 'Emily Johnson',
      review: 'I had an amazing experience. They were on time and very efficient.',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150?text=User+4',
      name: 'Michael Brown',
      review: 'Fantastic service! I will definitely use them again.',
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/150?text=User+5',
      name: 'Sarah Davis',
      review: 'I am very pleased with the service. They exceeded my expectations.',
    },
  ];

  return (
    <div className="my-[5vh]">
      <h2 className="text-center text-[4vh] font-bold my-[5vh]">What Our Customers Are Saying</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {reviewsData.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white rounded-lg shadow-lg p-[3vh] flex flex-col items-center text-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-[20vw] h-[20vw] object-cover rounded-full mb-[2vh]"
              />
              <h3 className="text-[3.5vh] font-semibold mb-[1vh]">{review.name}</h3>
              <p className="text-[2.5vh] text-gray-600">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsCarousel;
