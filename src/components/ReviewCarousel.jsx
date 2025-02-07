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
      stagger: 0.2,
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
    <div className="bg-gradient-to-b from-[#EDF2F7]  to-[#F7FAFC] ">
      <div className="rounded-xl shadow-sm">
        <div className="reviewCarouselContainer w-full p-4 md:p-3 bg-[#F7F9FC] rounded-[2vh]">
          <h2 className="reviewCarouselHeading text-center font-bold mb-4 text-[#2D3748] text-[3vw] md:text-[5vw]">
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
            className="p-2 md:p-1"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="reviewCarouselSlide border-3 rounded-xl">
                <div className="bg-white rounded-[1vh] p-3 md:p-4 min-h-[40vh] flex flex-col justify-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center justify-center gap-2">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="h-36 rounded-full object-cover  md:h-[12vw]"
                    />
                    <div>
                      <h3 className="text-[#2D3748] font-semibold text-2xl md:text-[4vw]">
                        {review.name}
                      </h3>
                      
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center text-center' >

                  <p className="text-[#4A5568] text-xl md:text-3xl">
                        {review.role}
                      </p>
                  <p className="text-[#4A5568] text-lg  flex-ccl md:text-xl">
                    "{review.review}"
                  </p>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, index) => (
                      <span 
                        key={index}
                        className="text-[#F6E05E] text-2xl md:text-3xl"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
