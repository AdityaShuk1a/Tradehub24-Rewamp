import React from 'react';
import StepsCard from './StepsCard';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      image: "src//assets//bro.png",
      heading: "Search",
      description: "Find trusted professionals in your area within minutes.",
      buttonText: "Start Now",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      heading: "Compare",
      description: "View profiles, ratings, and customer reviews to make the best choice.",
      buttonText: "View Pros",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      heading: "Connect",
      description: "Book your service and get the job done with confidence.",
      buttonText: "Book Now",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center" style={{
      padding: "clamp(10px, 2vw, 25px)",
      gap: "clamp(15px, 2.5vh, 30px)",
      minHeight: "fit-content"
    }}>
      <h2 className="text-center font-bold" style={{
        fontSize: "clamp(20px, 3vw, 36px)",
        marginBottom: "clamp(10px, 2vh, 20px)"
      }}>
        How It Works
      </h2>
      
      <div className="flex flex-col md:flex-row md:justify-center md:items-center justify-center items-center w-full" style={{
        gap: "clamp(15px, 2vw, 25px)",
        minHeight: "fit-content"
      }}>
        {steps.map((step) => (
          <StepsCard 
            key={step.id}
            stepImage={step.image} 
            stepHeading={step.heading} 
            stepDescription={step.description} 
            stepButtonText={step.buttonText} 
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
