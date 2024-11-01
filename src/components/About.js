import React from "react";

export const About = () => {
    return (
      <div className="py-[5px] bg-gray-100">
        <div className="grid grid-cols-12  md:mx-10 min-h-fit gap-2 mt-28 mb-40">
          <div className="col-span-full lg:col-span-10 lg:col-start-2 border-solid border-0 rounded-2xl mt-10">
            <div className="max-w-full shadow-2xl mx-2 rounded-2xl 
                transition-all duration-500 md:hover:scale-110">
                <h1 className="text-4xl py-2 text-center">About Us</h1>
                <h1 className="text-2xl py-2 text-center">Welcome to Your Immigration Expert, your premier Canadian immigration partner!</h1>
                <p className="p-4 text-center"> We are committed to simplifying your immigration journey. Our seasoned experts offer personalized support, ensuring you navigate the complexities with ease. Count on us for accurate information, transparent services, and a client-centric approach. Whether it's temporary residency, permanent residency, or citizenship, we're here to guide you every step of the way. Your Canadian dream starts with us. Choose Your Immigration Expert for a seamless and successful immigration experience.</p>
              </div>
          </div>
        </div>
      </div>
    );
};

