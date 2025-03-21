import React from "react";

function HeroSection1() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-white">
      

      {/* Right Content (Smaller Image) */}
      <div className="md:w-1/2 flex justify-start mt-8 md:mt-0">
        <img
          src="https://geeko.netlify.app/img/core-img/banner2.png"
          alt="CV Builder Illustration"
          className="w-3/4 md:w-2/3 lg:w-1/2"
        />
      </div>

{/* Left Content (Text) */}
      <div className="md:w-1/2 text-right">
        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full inline-flex items-center mb-4">
          <span className="text-xl font-bold">$</span>
          <span className="ml-2 text-sm font-medium">
            Discover The Easiest ways to Build Your CV!
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Online CV Builder With <br /> Creative Templates.
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Our Perfect resume builder takes the hassle out of resume writing.
          Choose from several templates and follow easy prompts to create the
          perfect job-ready resume.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold">
            CHOOSE TEMPLATE
          </button>
          <button className="bg-blue-200 text-blue-700 py-3 px-6 rounded-lg text-lg font-semibold">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection1;
