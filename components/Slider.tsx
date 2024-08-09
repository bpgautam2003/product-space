import React from 'react';

const Slider = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex space-x-2 md:space-x-4 animate-slide3">
        <div
          className="relative flex-shrink-0 h-[360px] w-[270px] lg:w-[300px] rounded-lg bg-cover bg-center border-[var(--goldenborder)] border-2 border "
          style={{
            backgroundImage: "linear-gradient(to top, var(--goldenbg2), transparent), url('/image/ps1.png')",
            backgroundSize: "cover",
            opacity: 0.6,
          }}
        >
          <div className="absolute w-3/4 bottom-4 left-4">
            <span className="text-white bg-black p-2 rounded-md ">Meet our Mentors</span>
            <hr className="border-b-1 border-gray-300 my-4 w-full" />
            <span>Chris Barton</span>
          </div>
        </div>

        <div
          className="relative flex-shrink-0 h-[360px] w-[270px] lg:w-[300px] rounded-lg bg-cover bg-center border-[var(--goldenborder)] border-2 border"
          style={{
            backgroundImage: "linear-gradient(to top, var(--goldenbg2), transparent), url('/image/ps2.png')",
            backgroundSize: "cover",
            opacity: 0.6,
          }}
        >
          <div className="absolute w-3/4 bottom-4 left-4">
            <span className="text-white bg-black p-2 rounded-md ">Meet our Mentors</span>
            <hr className="border-b-1 border-gray-300 my-4 w-full" />
            <span>Chris Barton</span>
          </div>
        </div>

        <div
          className="relative flex-shrink-0 h-[360px] w-[270px] lg:w-[300px] rounded-lg bg-cover bg-center border-[var(--goldenborder)] border-2 border"
          style={{
            backgroundImage: "linear-gradient(to top, var(--goldenbg2), transparent), url('/image/ps3.png')",
            backgroundSize: "cover",
            opacity: 0.6,
          }}
        >
          <div className="absolute w-3/4 bottom-4 left-4">
            <span className="text-white bg-black p-2 rounded-md ">Meet our Mentors</span>
            <hr className="border-b-1 border-gray-300 my-4 w-full" />
            <span>Chris Barton</span>
          </div>
        </div>

        {/* Repeat the images to create an infinite loop effect */}
        <div
          className="relative flex-shrink-0 h-[360px] w-[270px] lg:w-[300px] rounded-lg bg-cover bg-center border-[var(--goldenborder)] border-2 border"
          style={{
            backgroundImage: "linear-gradient(to top, var(--goldenbg2), transparent), url('/image/ps1.png')",
            backgroundSize: "cover",
            opacity: 0.6,
          }}
        >
          <div className="absolute w-3/4 bottom-4 left-4">
            <span className="text-white bg-black p-2 rounded-md ">Meet our Mentors</span>
            <hr className="border-b-1 border-gray-300 my-4 w-full" />
            <span>Chris Barton</span>
          </div>
        </div>

        <div
          className="relative flex-shrink-0 h-[360px] w-[270px] lg:w-[300px] rounded-lg bg-cover bg-center border-[var(--goldenborder)] border-2 border"
          style={{
            backgroundImage: "linear-gradient(to top, var(--goldenbg2), transparent), url('/image/ps2.png')",
            backgroundSize: "cover",
            opacity: 0.6,
          }}
        >
          <div className="absolute w-3/4 bottom-4 left-4">
            <span className="text-white bg-black p-2 rounded-md ">Meet our Mentors</span>
            <hr className="border-b-1 border-gray-300 my-4 w-full" />
            <span>Chris Barton</span>
          </div>
        </div>

        <div
          className="relative flex-shrink-0 h-[360px] w-[270px] lg:w-[300px] rounded-lg bg-cover bg-center border-[var(--goldenborder)] border-2 border"
          style={{
            backgroundImage: "linear-gradient(to top, var(--goldenbg2), transparent), url('/image/ps3.png')",
            backgroundSize: "cover",
            opacity: 0.6,
          }}
        >
          <div className="absolute w-3/4 bottom-4 left-4">
            <span className="text-white bg-black p-2 rounded-md ">Meet our Mentors</span>
            <hr className="border-b-1 border-gray-300 my-4 w-full" />
            <span>Chris Barton</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
