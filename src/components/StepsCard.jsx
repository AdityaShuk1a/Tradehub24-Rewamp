import React from 'react'
import CustomButton from './CustomButton'

const StepsCard = ({stepImage, stepHeading, stepButtonText, stepDescription}) => {
  return (
    <div className="flex flex-col items-center w-full md:w-1/3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" style={{
      padding: "clamp(12px, 1.5vw, 20px)",
      gap: "clamp(8px, 1.5vh, 15px)",
      maxWidth: "300px",
      minHeight: "clamp(200px, 35vh, 280px)",
      '@media (max-width: 768px)': {
        minHeight: "180px",
        padding: "12px",
        gap: "10px"
      }
    }}>
      <div className="w-full flex justify-center" style={{
        height: "clamp(80px, 15vh, 120px)",
        '@media (max-width: 768px)': {
          height: "80px"
        }
      }}>
        <img 
          src={stepImage} 
          alt={stepHeading} 
          className="rounded-lg h-full"
          style={{
            objectFit: "contain",
            width: "auto"
          }}
        />
      </div>
      
      <h3 className="font-semibold text-center" style={{
        fontSize: "clamp(16px, 2vw, 24px)",
        marginTop: "clamp(5px, 1vh, 10px)",
        '@media (max-width: 768px)': {
          fontSize: "18px",
          marginTop: "8px"
        }
      }}>
        {stepHeading}
      </h3>
      
      <p className="text-center text-gray-600 flex-grow" style={{
        fontSize: "clamp(14px, 1.5vw, 18px)",
        lineHeight: "1.4",
        padding: "0 clamp(8px, 1vw, 15px)",
        '@media (max-width: 768px)': {
          fontSize: "14px",
          padding: "0 8px"
        }
      }}>
        {stepDescription}
      </p>
      
      <div style={{ 
        marginTop: "clamp(5px, 1vh, 10px)",
        transform: "scale(0.9)"
      }}>
        <CustomButton buttonName={stepButtonText} />
      </div>
    </div>
  )
}

export default StepsCard
