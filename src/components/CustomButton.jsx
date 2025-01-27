import React, { useState } from 'react'
import { easeInOut, motion } from "framer-motion"

const CustomButton = ({ buttonName }) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      onMouseEnter={() => setHover(true)}  
      onMouseLeave={() => setHover(false)} 
      className='relative rounded-2xl flex justify-center items-center overflow-hidden'
      style={{
        fontSize: "clamp(14px, 1.8vw, 24px)",
        gap: "clamp(10px, 2.5vh, 30px)",
      }}
    > 
      <button  
        className={`rounded-2xl flex  justify-center items-center relative overflow-hidden bg-black ${hover ? 'text-white' : 'text-white'}`}
        style={{
          padding: "clamp(6px, 0.8vh, 9px)",
          width: "100%",
          height: "100%"
        }}
      > 
        <span style={{
          fontSize: "clamp(2vh, 1.2vw, 15px)",
          // fontSize: "",
          whiteSpace: "nowrap"
        }}>
          {buttonName} 
        </span>
      </button> 

      <motion.div  
        animate={hover ? { y: "-76%", scale: 1.2 } : { y: 0 }} 
        transition={{ ease: easeInOut, delay: 0.01 }} 
        className='absolute rounded-full mix-blend-difference customButton z-10 bg-purple-300'
        style={{
          width: "clamp(100px, 25vh, 250px)",
          height: "clamp(100px, 25vh, 250px)"
        }}
      /> 
    </div>
  )
}

export default CustomButton
