import React from 'react'
import CustomButton from './CustomButton'

const StepsCard = ({stepImage, stepHeading, stepButtonText, stepDescription}) => {
  return (
    
      <div className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8" style={{marginLeft : "2vh"}}>
  <div className="flex items-start sm:gap-8">
    <div
      className="overflow-hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full flex items-center justify-center  sm:border-2 sm:border-indigo-500"
      aria-hidden="true"
    >
      <img src={`${stepImage}`}  className=' w-[4vh] h-[6vh] '  alt="" />
    </div>

    <div>
      

      <h3 className="mt-4 text-lg font-medium sm:text-xl">
        <a href="#" className="hover:underline">{stepHeading}</a>
      </h3>

      <p className="mt-1 text-sm text-gray-700">
        {stepDescription}
      </p>

      <div className="mt-4 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center gap-1 text-gray-500">
          <CustomButton buttonName={stepButtonText} />

          
        </div>

       
      </div>
    </div>
  </div>
</div>
    
  )
}

export default StepsCard
