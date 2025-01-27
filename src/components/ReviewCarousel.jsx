import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ReviewsCarousel = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.reviewCarouselContainer',
        start: 'top 75%',
        end: 'top 25%',
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo('.reviewCarouselHeading', {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.inOut"
    })
    .fromTo('.reviewCarouselSlide', {
      x: 100,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.5,
      ease: "power2.out"
    }, "-=0.5");

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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
    <div className="reviewCarouselContainer" style={{
      width: "100%",
      padding: "4vh 3vw",
      backgroundColor: "#F7F9FC",
      borderRadius: "2vh",
      '@media (max-width: 768px)': {
        padding: "3vh 4vw"
      }
    }}>
      <h2 className="reviewCarouselHeading" style={{
        fontSize: "3vw",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "4vh",
        color: "#2D3748",
        '@media (max-width: 768px)': {
          fontSize: "5vw",
          marginBottom: "3vh"
        }
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
          padding: "2vh 1vw",
          '@media (max-width: 768px)': {
            padding: "1vh 2vw"
          }
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="reviewCarouselSlide">
            <div style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "1vh",
              padding: "3vh 2vw",
              minHeight: "40vh",
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
              '@media (max-width: 768px)': {
                padding: "4vh 3vw",
                minHeight: "45vh"
              }
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "2vw"
              }}>
                <img 
                  src={review.image} 
                  alt={review.name} 
                  style={{
                    width: "5vw",
                    height: "5vw",
                    borderRadius: "50%",
                    objectFit: "cover",
                    '@media (max-width: 768px)': {
                      width: "12vw",
                      height: "12vw"
                    }
                  }}
                />
                <div>
                  <h3 style={{
                    fontSize: "1.5vw",
                    fontWeight: "600",
                    color: "#2D3748",
                    '@media (max-width: 768px)': {
                      fontSize: "4vw"
                    }
                  }}>
                    {review.name}
                  </h3>
                  <p style={{
                    fontSize: "1.2vw",
                    color: "#4A5568",
                    '@media (max-width: 768px)': {
                      fontSize: "3vw"
                    }
                  }}>
                    {review.role}
                  </p>
                </div>
              </div>

              <p style={{
                fontSize: "1.3vw",
                color: "#4A5568",
                lineHeight: 1.6,
                flex: 1,
                '@media (max-width: 768px)': {
                  fontSize: "3.2vw"
                }
              }}>
                "{review.review}"
              </p>

              <div style={{
                display: "flex",
                gap: "0.5vw"
              }}>
                {[...Array(review.rating)].map((_, index) => (
                  <span 
                    key={index}
                    style={{
                      color: "#F6E05E",
                      fontSize: "1.8vw",
                      '@media (max-width: 768px)': {
                        fontSize: "4vw"
                      }
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
