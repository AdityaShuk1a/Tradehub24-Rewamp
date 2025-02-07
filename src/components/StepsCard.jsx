import React from 'react'
import CustomButton from './CustomButton'

const StepsCard = ({stepImage, stepHeading, stepButtonText, stepDescription}) => {
  return (
    <div className='border-2 border-black relative w-[70vw] flex flex-col items-center  h-[45vh] py-[2vw] gap-[2vh] bg-[#F7F9FC] rounded-[1vh] '>
      <div className="w-full flex justify-center h-[12vh] md:h-[12vh] sm:h-[10vh]">
        <img 
          src={stepImage} 
          alt={stepHeading} 
          className="rounded-lg h-full object-contain w-auto sm:h-[20vh]"
        />
      </div>
      
      <h3 className="font-semibold text-center text-2xl text-[#2D3748] md:text-3xl " style={{
        marginTop : "5vh"
      }}>
        {stepHeading}
      </h3>
      
      <span className="text-center text-sm  px-[1.5vw] md:text-2xl md:px-[2vw] " style={{
        marginTop : "-2vh"
      }} >
        {stepDescription}
      </span>
      
      <div className="absolute bottom-[2vh] left-1/2 transform -translate-x-1/2 w-[90%] flex justify-center sm:bottom-[3vh]">
        <CustomButton 
          buttonName={stepButtonText}
          style={{
            backgroundColor: "#4299E1",
            color: "#FFFFFF",
            padding: "1vh 2vw",
            borderRadius: "0.5vh",
            fontSize: "1vw",
            '@media (max-width: 768px)': {
              fontSize: "2vw",
              padding: "1.5vh 3vw"
            },
            '@media (max-width: 480px)': {
              fontSize: "2.8vw",
              padding: "2vh 4vw"
            },
            '&:hover': {
              backgroundColor: "#3182CE"
            }
          }} 
        />
      </div>
    </div>
  )
}

export default StepsCard
