import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ReviewsCarousel = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "Homeowner",
      image: "https://via.placeholder.com/150",
      review: "Excellent service! The platform made it easy to find a reliable tradesperson.",
      rating: 5
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Business Owner",
      image: "https://via.placeholder.com/150",
      review: "Great experience from start to finish. Highly recommended!",
      rating: 4
    },
    // ... add more reviews as needed
  ];

  return (
    <div className="w-full bg-gray-100 rounded-lg" style={{
      padding: "clamp(20px, 4vw, 60px)"
    }}>
      <h2 className="text-center font-bold" style={{
        fontSize: "clamp(24px, 4vw, 48px)",
        marginBottom: "clamp(20px, 4vh, 50px)"
      }}>
        Customer Reviews
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        style={{
          padding: "clamp(10px, 2vw, 30px)"
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" style={{
              padding: "clamp(15px, 3vw, 30px)",
              minHeight: "clamp(200px, 40vh, 300px)",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(10px, 2vh, 20px)"
            }}>
              <div className="flex items-center" style={{
                gap: "clamp(10px, 2vw, 20px)"
              }}>
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="rounded-full"
                  style={{
                    width: "clamp(50px, 10vw, 80px)",
                    height: "clamp(50px, 10vw, 80px)",
                    objectFit: "cover"
                  }}
                />
                <div>
                  <h3 className="font-semibold" style={{
                    fontSize: "clamp(16px, 2vw, 24px)"
                  }}>
                    {review.name}
                  </h3>
                  <p className="text-gray-600" style={{
                    fontSize: "clamp(14px, 1.5vw, 18px)"
                  }}>
                    {review.role}
                  </p>
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-gray-700" style={{
                  fontSize: "clamp(14px, 1.8vw, 20px)",
                  lineHeight: "1.6"
                }}>
                  "{review.review}"
                </p>
              </div>

              <div className="flex" style={{
                gap: "clamp(2px, 0.5vw, 5px)"
              }}>
                {[...Array(review.rating)].map((_, index) => (
                  <span 
                    key={index} 
                    className="text-yellow-400"
                    style={{
                      fontSize: "clamp(16px, 2vw, 24px)"
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsCarousel;
