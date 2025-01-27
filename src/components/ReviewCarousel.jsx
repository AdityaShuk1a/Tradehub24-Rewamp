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
      name: "John Anderson",
      role: "Homeowner",
      image: "/src/assets/Customers/person1.jpg",
      review: "Excellent service! The platform made it easy to find a reliable tradesperson. The plumber I hired was professional and efficient.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      role: "Business Owner",
      image: "/src/assets/Customers/person2.jpg",
      review: "As a cafe owner, I needed urgent electrical work done. Found a great electrician within hours. Outstanding platform!",
      rating: 5
    },
    {
      id: 3,
      name: "David Chen",
      role: "Property Manager",
      image: "/src/assets/Customers/person3.jpg",
      review: "Managing multiple properties is easier with TradeHub24. Quick access to qualified trades people whenever needed.",
      rating: 4
    },
    {
      id: 4,
      name: "Emma Thompson",
      role: "Homeowner",
      image: "/src/assets/Customers/person4.jpg",
      review: "Had my bathroom renovated through a tradesperson found here. The whole process was smooth and transparent.",
      rating: 5
    },
    {
      id: 5,
      name: "Michael Roberts",
      role: "Restaurant Owner",
      image: "/src/assets/Customers/person5.jpg",
      review: "The verification system gives real peace of mind. Found a reliable handyman for our restaurant maintenance.",
      rating: 4
    },
    {
      id: 6,
      name: "Lisa Patel",
      role: "Landlord",
      image: "/src/assets/Customers/person6.jpg",
      review: "Perfect for landlords! Easy to find trusted trades people for various property maintenance needs.",
      rating: 5
    },
    {
      id: 7,
      name: "James Wilson",
      role: "Office Manager",
      image: "/src/assets/Customers/person7.jpg",
      review: "The platform saved us time and money. Great for finding commercial maintenance contractors.",
      rating: 4
    },
    {
      id: 8,
      name: "Maria Garcia",
      role: "Homeowner",
      image: "/src/assets/Customers/person8.jpg",
      review: "From painting to plumbing, I've found all my home improvement professionals here. Highly recommend!",
      rating: 5
    },
    {
      id: 9,
      name: "Thomas Brown",
      role: "Shop Owner",
      image: "/src/assets/Customers/person9.jpg",
      review: "Quick response times and professional service. The booking system is straightforward and efficient.",
      rating: 4
    },
    {
      id: 10,
      name: "Sophie Taylor",
      role: "Real Estate Agent",
      image: "/src/assets/Customers/person10.jpg",
      review: "Essential tool for real estate professionals. Makes property maintenance and renovations hassle-free.",
      rating: 5
    }
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
