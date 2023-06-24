import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <img
        className="-z-10 absolute mt-[-96px] w-full h-screen mx-auto "
        src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <div className=" mt-[-96px] w-full h-screen mx-auto flex flex-col text-center justify-center bg-black bg-opacity-80">
        <p className="text-[#00df9a] font-bold p-2">
          {" "}
         
ReactJob. Hire Agency
        </p>
        <h1 className="md:text-6xl sm:text-6xl text-4xl font-bold md:py-6">
        FIND YOUR DREAM JOB WITH US
        </h1>
        <div>
          <p className="md:text-4xl sm:text-4xl text-xl font-bold py-4">
            Fast, Flexible, Reliable
          </p>
        </div>
        <p className="md:text-2xl text-x; font-bold text-gray-400">
        Find jobs, create trackable resumes and enrich your applications.Carefully crafted after analyzing the needs of different industries.
        </p>
        
      </div>
    </div>
  );
};

export default Hero;
