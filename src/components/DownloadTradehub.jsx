import React from "react";

const DownloadTradehub = () => {
  return (
    <div className="bg-amber-200 flex items-center justify-center h-screen px-6">
      {/* Wrapper to center everything */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            src="https://www.tradehub24.com/profile_images/iphone.png"
            alt="TradeHub24 App"
          />
        </div>

        {/* Content Section */}
        <div className="bg-amber-700 text-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center text-center w-full max-w-xl space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Download the TradeHub24 App
          </h1>
          <p className="text-base md:text-lg lg:text-xl">
            Discover a seamless way to hire trusted tradespeople. Download the TradeHub24 app now for free from your favorite app store!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
            {/* Google Play Button */}
            <button className="flex items-center justify-center bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md shadow-md w-full md:w-auto">
              <img
                className="w-12 h-12 mr-4"
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
              <div>
                <span className="block text-xs">GET IT ON</span>
                <span className="block text-sm font-bold">Google Play</span>
              </div>
            </button>

            {/* App Store Button */}
            <button className="flex items-center justify-center bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md shadow-md w-full md:w-auto">
              <img
                className="w-12 h-12 mr-4"
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="App Store"
              />
              <div>
                <span className="block text-xs">Download on the</span>
                <span className="block text-sm font-bold">App Store</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadTradehub;
