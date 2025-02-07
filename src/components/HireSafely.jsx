import React, { useEffect } from 'react';
import CustomButton from './CustomButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HireSafely = () => {
  useEffect(() => {
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hireSafelyContainer',
        start: 'top 75%',
        end: 'top 25%',
        toggleActions: "play none none reverse",
        // markers: true
      }
    });

    tl.fromTo('.hireSafelyHeading', {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    })
    .fromTo('.hireSafelyContent', {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");
  }, []);
  return (
    <div className="bg-[#F0F5FF] flex justify-center items-center">
      <div className="rounded-xl">
        <div className="rounded-lg shadow-sm">
          <div className="hireSafelyContainer w-[90vw] min-h-[80vh] flex flex-col gap-[4vh] mx-auto p-[4vh] bg-[#F7F9FC] rounded-[2vh] shadow-[0_4px_20px_rgba(0,0,0,0.05)] md:w-[95vw] md:p-[3vh_4vw] md:gap-[3vh]">
            {/* Heading Section */}
            <div className="hireSafelyHeading text-center py-[2vh]">
              <h2 className="text-[2xl] font-light text-[#2D3748] md:text-[3xl]">
                Hire safely with our homeowner checklist
              </h2>
            </div>

            {/* Content Section */}
            <div className="hireSafelyContent flex flex-col gap-[4vh] flex-1 md:flex-row md:gap-[4vw] items-center justify-center text-center">
              {/* Left Side - Image and Button */}
              <div className="flex flex-col items-center gap-[3vh] flex-[0_0_40%] md:flex-none">
                <div className='hover:scale-115 transition-transform duration-300 w-full h-[30vh] md:h-[30vh]'>
                  <img 
                    src="src/assets/bro2.png" 
                    alt="Hire Safely" 
                    className="w-full h-full object-contain rounded-[1vh] md:h-[40vh]"
                  />
                </div>
                <div className="flex justify-center w-full">
                  <CustomButton 
                    buttonName="Sign Up As Home Owner"
                    className="py-[1.5vh] px-[3vw] text-[1.2vw] md:text-[3vw] md:py-[2vh] md:px-[4vw]"
                  />
                </div>
              </div>

              {/* Right Side - Checklist */}
              <div className="flex flex-col gap-[2vh] flex-[0_0_60%] md:flex-none">
                <h5 className="text-2xl text-[#2D3748] text-center justify-center mb-[2vh] md:text-3xl">
                  Follow our top tips for a safe and successful hire:
                </h5>
                
                {[
                  "Verify credentials and insurance coverage",
                  "Read detailed reviews from previous customers",
                  "Get clear quotes and project timelines",
                  "Use secure payment methods through our platform",
                  "Track project progress in real-time",
                  "Access 24/7 customer support",
                  "Get our FREE Homeowner's Safety Guide"
                ].map((text, index) => (
                  <div key={index} className="text-lg text-[#4A5568] flex items-center gap-1 md:text-2xl">
                    <span>✔️</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireSafely;
