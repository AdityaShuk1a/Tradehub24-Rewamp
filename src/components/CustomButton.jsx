import React, { useState } from 'react'
import { easeInOut, motion } from "motion/react"


const CustomButton = ({  buttonName }) => {

  const [hover, setHover] = useState();

  return (
    <>
      <div onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)} className=' relative rounded-2xl flex justify-center items-center  overflow-hidden'> 
        <button  className={`rounded-2xl flex justify-center items-center relative overflow-hidden bg-black ${hover ? 'text-white' : 'text-white' } w-fit h-2vh `} style={{padding : "1vh"}}> 
        <span className=' text-2xl' >

          {buttonName} 
        </span>

        
          </button> 
          <motion.div  animate={hover ? { y: "-76%", scale: 1.2 } : { y: 0 }} transition={{ ease: easeInOut, delay: 0.01 }} className='w-[20vh] h-[20vh] absolute rounded-full mix-blend-difference customButton z-10 bg-purple-300'> 
            </motion.div> 
            </div>
    </>
  )
}

export default CustomButton
