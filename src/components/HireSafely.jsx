import React from 'react';
import CustomButton from './CustomButton';

const HireSafely = () => {
  return (
    <div className='w-full md:w-[90%] flex justify-center items-center' style={{
      padding: "clamp(10px, 2vw, 30px)",
      minHeight: "clamp(250px, 60vh, 600px)",
      '@media (max-width: 768px)': {
        padding: "15px",
        minHeight: "500px"
      }
    }}>
      <div className="flex flex-col md:flex-row w-full h-full items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        style={{
          padding: "clamp(15px, 2vw, 25px)",
          gap: "clamp(15px, 2.5vw, 30px)",
          minHeight: "fit-content",
          '@media (max-width: 768px)': {
            padding: "15px",
            gap: "20px"
          }
        }}>
        
        <div className="flex flex-col items-center w-full md:w-[40%]" style={{
          gap: "clamp(10px, 2vh, 20px)",
          '@media (max-width: 768px)': {
            gap: "15px"
          }
        }}>
          <div className="w-full flex justify-center" style={{
            height: "clamp(150px, 25vh, 250px)",
            '@media (max-width: 768px)': {
              height: "180px"
            }
          }}>
            <img 
              className="h-full rounded-lg object-contain" 
              src="src/assets/bro2.png" 
              alt="Hire Safely" 
            />
          </div>
          <div style={{ transform: "scale(0.9)" }}> {/* Slightly smaller button */}
            <CustomButton buttonName={"Sign Up As Home Owner"} />
          </div>
        </div>
        
        <div className="flex flex-col w-full md:w-[60%] justify-between leading-normal" style={{
          gap: "clamp(8px, 1.5vh, 20px)",
          '@media (max-width: 768px)': {
            gap: "12px"
          }
        }}>
          <h5 className="font-bold tracking-tight text-gray-900 dark:text-white" style={{ 
            fontSize: "clamp(20px, 2.5vw, 36px)",
            marginBottom: "clamp(8px, 1.5vh, 20px)",
            '@media (max-width: 768px)': {
              fontSize: "22px",
              marginBottom: "15px"
            }
          }}>
            Hire safely with our homeowner checklist
          </h5>
          
          <h4 className='tracking-tight text-gray-900 dark:text-white' style={{ 
            fontSize: "clamp(16px, 1.8vw, 22px)",
            '@media (max-width: 768px)': {
              fontSize: "16px"
            }
          }}>
            ✔️ Follow our top tips for a safe and successful hire:
          </h4>
          
          {[
            "Verify credentials and insurance coverage",
            "Read detailed reviews from previous customers",
            "Get clear quotes and project timelines",
            "Use secure payment methods through our platform",
            "Track project progress in real-time",
            "Access 24/7 customer support",
            "Get our FREE Homeowner's Safety Guide"
          ].map((text, index) => (
            <h4 
              key={index}
              className="font-normal text-gray-700 dark:text-gray-400"
              style={{ 
                fontSize: "clamp(14px, 1.6vw, 18px)",
                lineHeight: "1.4",
                '@media (max-width: 768px)': {
                  fontSize: "14px"
                }
              }}
            >
              ✔️ {text}
            </h4>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default HireSafely;
