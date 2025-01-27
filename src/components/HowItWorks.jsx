import React from 'react';
import StepsCard from './StepsCard';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      image: "src//assets//bro.png",
      heading: "Step 1",
      description: "Get matched with a trusted professional in minutes.",
      buttonText: "Learn More",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      heading: "Step 2",
      description: "Review their profile and see customer feedback.",
      buttonText: "See Reviews",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      heading: "Step 3",
      description: "Book an appointment and get the job done.",
      buttonText: "Book Now",
    },
  ];

  return (
    <>
    
      <h2 className=" howItWorks text-center text-[4vh] font-bold ">How It Works</h2>
      <div className="flex justify-center items-center space-x-[3vw]">
        {steps.map((step) => (
          <StepsCard stepImage={step.image} stepHeading={step.heading} stepDescription={step.description} stepButtonText={step.buttonText} />
        ))}
      </div>
    
    </>
  );
};

export default HowItWorks;
