import React from "react";

export const About = () => {
  return (
    <div className="">
      {/* Top Container with height 851px */}
      <div className="h-[825px]">
        <div className="h-[625px] bg-blue-700">
          {/* Third Container with custom styles */}
          <div className="relative w-[1000px] sm:h-[128px] sm:top-[92px] top-[20px] sm:left-[145px] left-0">
            <div className="w-[1100px] h-full items-center justify-center text-white px-2 sm:px-0">
              <h1
                className="text-left text-xl h-full sm:text-4xl md:text-5xl lg:text-[40px] font-semibold leading-2 font-inter"
                style={{ lineHeight: '1.5' }}
              >
                Unlock your journey with Comprehensive Ranking System (CRS) tool
              </h1>
            </div>

          </div>
          <div className="relative w-full sm:w-[830px] sm:h-[87px] sm:top-[125px] top-[20px] sm:left-[150px] left-0">
            <p className="text-gray-100 font-inter text-[16px] pl-1">
              Posuere sed eu proin elementum nulla. Sed non blandit auctor consequat sit orci sem. Ultrices adipiscing dictumst purus convallis. Convallis imperdiet risus turpis turpis molestie erat viverra. Amet turpis nunc facilisis turpis dui cras nunc.
            </p>
          </div>

          {/* New Container for Apply Now & About Us buttons */}
          <div className="relative w-[1000px] sm:top-[150px] sm:left-[150px]">
            <div className="space-x-4">
              <button
                type="button"
                className="text-white bg-blue-400 hover:bg-blue-800 w-[159px] h-[61px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3"
              >
                Apply Now
              </button>
              <button
                type="button"
                className="text-blue-700 bg-gray-50 hover:bg-gray-200 w-[159px] h-[61px] focus:ring-4 focus:outline-none focus:ring-gray-50 font-medium rounded-lg text-sm px-6 py-3"
              >
                About Us
              </button>
            </div>
          </div>

          {/* New Container for Expert Guidance, Tailored Solutions, Streamlined Process */}
          <div className="relative w-[1140px] h-[276px] mx-auto sm:top-[225px]">
            <div className="flex justify-between h-full">
              <div className="flex-1 bg-indigo-50 text-black flex flex-col items-center justify-center">
                <img className="w-[40px] h-[40px]" src="/Expert-Guidance.png" alt="" />
                <h3 className="sm:h-[28] text-[20px] font-semibold font-inter mt-4">Expert Guidance</h3>
                <div className="w-[270px] h-[78px] flex items-center justify-center text-center text-[16px] font-inter mt-2">
                  <p className="text-gray-500">
                    Posuere sed proin elementum nulla. Sed non blandit auctor consequant sit orci sem.
                  </p>
                </div>
              </div>
              <div className="flex-1 bg-gray-800 text-white flex flex-col items-center justify-center">
                <img className="w-[40px] h-[40px]" src="/send.png" alt="" />
                <h3 className="sm:h-[28] text-[20px] font-semibold font-inter mt-4">Tailored Solutions</h3>
                <div className="w-[270px] h-[78px] flex items-center justify-center text-center text-[16px] font-inter mt-2">
                  <p className="text-gray-100">
                    Posuere sed proin elementum nulla. Sed non blandit auctor consequant sit orci sem.
                  </p>
                </div>
              </div>
              <div className="flex-1 bg-indigo-50 text-black flex flex-col items-center justify-center">
                <img className="w-[40px] h-[40px]" src="/thumbs-up.png" alt="" />
                <h3 className="sm:h-[28] text-[20px] font-semibold font-inter mt-4">Streamlined Process</h3>
                <div className="w-[270px] h-[78px] flex items-center justify-center text-center text-[16px] font-inter mt-2">
                  <p className="text-gray-500">
                    Posuere sed proin elementum nulla. Sed non blandit auctor consequant sit orci sem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* New Container with size of 1440x784px */}
      <div className="w-full h-[784px] relative">
        {/* New div with size 560px by 58px positioned from 100px to 150px */}
        <div className="absolute w-[560px] h-[58px]" style={{ top: '100px', left: '150px' }}>
          <p className="font-bold font-inter text-[36px] text-left">About</p>
        </div>

        <div className="absolute w-full h-[38px] sm:top-[251px]">
          <p className="font-inter font-semibold text-[20px] text-center">“ Welcome to Your Immigration Expert, your premier Canadian immigration partner! “</p>
        </div>

        <div className="absolute w-full h-[228px] sm:top-[427px] px-60">
          <p className="font-light font-inter text-[16px] text-center">We are committed to simplifying your immigration journey. Our seasoned experts offer personalized support, ensuring you navigate the complexities with ease. Count on us for accurate information, transparent services, and a client-centric approach. Whether it's temporary residency, permanent residency, or citizenship, we're here to guide you every step of the way. Your Canadian dream starts with us. Choose Your Immigration Expert for a seamless and successful immigration experience.</p>
        </div>
      </div>

      {/* Download our app Div */}
      <div className="relative sm:h-[700px] w-full">
        <div className="relative w-[560px] text-left h-[77px] sm:left-[160px] sm:top-[30px]">
          <h2 className="sm:text-[36px] font-semibold font-inter text-black">Download Our App</h2>
        </div>

        {/* Button Row for App Store and Play Store */}
        <div className="flex relative justify-center space-x-6 mt-8 sm:top-[50px]">
          {/* App Store Button */}
          <button
            type="button"
            className="w-[508px] h-[128px] bg-blue-400 text-white rounded-lg flex items-center justify-center"
          >
            <img src="/app_store_icon.png" alt="App Store" className="mr-4" />
            <div className="flex flex-col text-center">
              <span className="text-[24px] font-normal">Available on the</span>
              <span className="text-[24px] font-bold">App Store</span>
            </div>
          </button>

          {/* Play Store Button */}
          <button
            type="button"
            className="w-[508px] h-[128px] bg-blue-400 text-white rounded-lg flex items-center justify-center"
          >
            <img src="/play_store_icon.png" alt="Play Store" className="mr-16" />
            <div className="flex flex-col text-center">
              <span className="text-[24px] font-normal">Get it on</span>
              <span className="text-[24px] font-bold">Play Store</span>
            </div>
          </button>
        </div>

        {/* "What our client says" Heading */}
        <div className="relative w-[560px] text-left h-[77px] sm:left-[160px] sm:top-[120px]">
          <h2 className="sm:text-[36px] font-semibold font-inter text-black">What our client says</h2>
        </div>

        {/* New Div with dimensions 1140x102 */}
        <div className="relative w-[1140px] h-[102px] mx-auto sm:top-[200px]">
          {/* Flex container for three equal divs */}
          <div className="flex justify-between w-full h-full">
            {/* Individual divs with size 364x102 */}
            {/* Priya */}
            <div className="w-[364px] h-[102px] flex justify-end">
              <div className="w-[75px] h-[102px] flex items-start mt-2">
                {/* Circle of blue color */}
                <div className="w-[60px] h-[60px] bg-blue-700 rounded-full flex ">
                  {/* You can add any content inside the circle */}
                </div>
              </div>
              <div className="w-[289px] h-[102px] flex flex-col items-start justify-start">
                <div className="w-[136px] h-[24px] flex">
                  <span className="text-yellow-500 text-[24px]">★★★★★</span> {/* Simple 5-star text as placeholder */}
                </div>
                <div className="w-[289px] mt-2 ml-1 text-gray-700 text-xs font-inter">
                  Posuere sed proin elementum nulla. Sed non blandit auctor consequat sit orci sem.
                </div>
                <div className="w-[289px] mt-1 text-gray-700 text-lg ml-1">
                  Priya
                </div>
              </div>
            </div>
            {/* James */}
            <div className="w-[364px] h-[102px] flex justify-end">
              <div className="w-[75px] h-[102px] flex items-start mt-2">
                {/* Circle of blue color */}
                <div className="w-[60px] h-[60px] bg-blue-700 rounded-full flex ">
                  {/* You can add any content inside the circle */}
                </div>
              </div>
              <div className="w-[289px] h-[102px] flex flex-col items-start justify-start">
                <div className="w-[136px] h-[24px] flex">
                  <span className="text-yellow-500 text-[24px]">★★★★★</span> {/* Simple 5-star text as placeholder */}
                </div>
                <div className="w-[289px] mt-2 ml-1 text-gray-700 text-xs font-inter">
                  Posuere sed proin elementum nulla. Sed non blandit auctor consequat sit orci sem.
                </div>
                <div className="w-[289px] mt-1 text-gray-700 text-lg ml-1">
                  James
                </div>
              </div>
            </div>
            {/* Lara */}
            <div className="w-[364px] h-[102px] flex justify-end">
              <div className="w-[75px] h-[102px] flex items-start mt-2">
                {/* Circle of blue color */}
                <div className="w-[60px] h-[60px] bg-blue-700 rounded-full flex ">
                  {/* You can add any content inside the circle */}
                </div>
              </div>
              <div className="w-[289px] h-[102px] flex flex-col items-start justify-start">
                <div className="w-[136px] h-[24px] flex">
                  <span className="text-yellow-500 text-[24px]">★★★★★</span> {/* Simple 5-star text as placeholder */}
                </div>
                <div className="w-[289px] mt-2 ml-1 text-gray-700 text-xs font-inter">
                  Posuere sed proin elementum nulla. Sed non blandit auctor consequat sit orci sem.
                </div>
                <div className="w-[289px] mt-1 text-gray-700 text-lg ml-1">
                  Lara
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

