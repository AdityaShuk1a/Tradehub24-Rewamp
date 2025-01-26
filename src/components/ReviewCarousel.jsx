import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ReviewsCarousel = () => {
  const reviewsData = [
    {
      id: 1,
      image: 'src//assets//bro.png',
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
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {reviewsData.map((review, index) => (
            <div key={review.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div class='w-full h-[70vh]  flex flex-col justify-center items-center text-pink-300' >
                
              <img src={review.image} alt={review.name} class="d-block w-[20vh] h-[50vh] object-cover"  />
              <div class="carousel-caption d-none d-md-block">
                <h5>{review.name}</h5>
                <p>{review.review}</p>
              </div>
            </div>
              </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
