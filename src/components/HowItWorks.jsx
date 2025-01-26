import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
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
    <div className="bg-amber-100 py-[6vh]">
      <h2 className="text-center text-[5vh] font-bold mb-[5vh]">How It Works</h2>
      <div className="flex justify-center items-center space-x-[3vw]">
        {steps.map((step) => (
          <div
            key={step.id}
            className="w-[30vw] h-[20vh] bg-white shadow-lg rounded-lg flex flex-col items-center p-[2vh] text-center"
          >
            <img
              src={step.image}
              alt={step.heading}
              className="w-[20vw] h-[20vw] object-cover rounded-full mb-[3vh]"
            />
            <h3 className="text-xl font-semibold mb-[2vh]">{step.heading}</h3>
            <p className="text-gray-600 mb-[3vh]">{step.description}</p>
            <button className="bg-blue-500 text-white px-[2vw] py-[1vh] rounded-full hover:bg-blue-600">
              {step.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
