import React from "react";
import MaritalStatus from "./MaritalStatus";

const Home = () => {
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

      {/* Feature Section */}
      <div className="relative w-full h-[684px] sm:top-[]">
        {/* Feature Title and Button */}
        <div className="absolute sm:top-[50px] left-[150px] flex justify-between items-center w-[calc(100%-300px)]">
          <h2 className="sm:text-[36px] font-semibold font-inter text-black">Features</h2>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-800 w-[191px] h-[61px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-inter text-[15px] rounded-lg"
          >
            See All Options
          </button>
        </div>

        {/* Blocks Section */}
        <div className="relative flex justify-start top-[150px] px-[150px] space-x-[20px]">
          {/* Block 1 */}
          <div className="w-[357px] h-[361px] bg-indigo-50 shadow-md rounded-lg p-3">
            <img className="w-[319px] h-[198px] rounded-lg" src="/images (2).jpg" alt="" />
            <h3 className="text-xl font-semibold text-left font-inter mt-2">Canada PR</h3>
            <p className="text-left text-[13px] font-inter text-gray-600">
              Your Immigration Expert Consultants is one of the few authorized Canada immigration consultants in western India. Our director is a Canadian Government approved ICCRC member.
            </p>
          </div>
          {/* Block 2 */}
          <div className="w-[357px] h-[361px] bg-indigo-50 shadow-md rounded-lg p-3">
            <img className="w-[319px] h-[198px] rounded-lg" src="/images (1).jpg" alt="" />
            <h3 className="text-xl font-semibold text-left font-inter mt-2">Canada PR Eligibility Check</h3>
            <p className="text-left text-[13px] font-inter text-gray-600">
              Our director is a Canadian Government approved ICCRC member. Get your Canada PR eligibility checked by the experts.
            </p>
          </div>
          {/* Block 3 */}
          <div className="w-[357px] h-[361px] bg-indigo-50 shadow-md rounded-lg p-3">
            <img className="w-[319px] h-[198px] rounded-lg" src="/download.jpg" alt="" />
            <h3 className="text-xl font-semibold text-left font-inter mt-2">Job Search - Canada</h3>
            <p className="text-left text-[13px] font-inter text-gray-600">
              These workshops with field experts are designed to help you approach the job search in an efficient and smart way.
            </p>
          </div>
        </div>

        <div className="relative text-center sm:top-[250px]">
          <h2 className="sm:text-[28px] font-semibold font-inter text-blue-600">Comprehensive Ranking System (CRS) tool: skilled immigrants (Express Entry)</h2>
        </div>
      </div>

      {/* New Full-Width Div with Height 941px */}
      <div className="w-full">
        {/* New div with 875px x 148px */}
          <h1 className="relative sm:text-[30px] font-semibold font-inter left-[280px] text-gray-800">Marital Status?</h1>
        <div className=" w-[475px] mx-auto ">
          <MaritalStatus/>
        </div>
      </div>

      {/* Download our app Div */}
      <div className="relative sm:h-[700px] w-full sm:mt-72">
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

      {/* New Full-Width Div with Height 1440x596px */}
      <div className="relative w-full h-[496px] mx-auto bg-blue-700">
        {/* New div with the specified dimensions */}
        <div className="relative w-[290px] h-[11px] mx-auto sm:top-[50px]">
          <span className="text-center text-[15px] font-intertight text-yellow-300">
            UNLOCK YOUR IMMIGRATION POTENTIAL
          </span>
        </div>
        {/* New div with dimensions 830px x 156px */}
        <div className="relative w-[830px] h-[156px] mx-auto sm:top-[60px] flex items-center justify-center">
          <span className="text-center text-[32px] font-semibold font-intertight text-gray-50">
            Take the First Step Towards Your Immigration Goals
          </span>
        </div>
        {/* New div with dimensions 830px x 58px */}
        <div className="relative w-[830px] h-[156px] mx-auto sm:top-[0px] flex items-center justify-center">
          <span className="text-center text-[18px] font-inter font-light text-gray-100">
            Posuere sed eu proin elementum nulla. Sed non blandit auctor consequat sit orci sem. Ultrices adipiscing dictumst purus convallis convallis imperdiet
          </span>
        </div>
        {/* Button Get Started Now with dimensions 201px x 61px */}
        <div className="relative w-[201px] h-[61px] mx-auto sm:top-[10px] mt-6">
          <button
            type="button"
            className="w-full h-full bg-blue-600 text-white text-inter rounded-lg text-center text-[15px] font-semibold hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
