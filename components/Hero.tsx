import React from 'react';
import Navbar from './Navbar';
import { FaArrowRight, FaRegStar, FaMoneyBillWave } from "react-icons/fa";
import { MdGroups, MdCurrencyRupee } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import Slider from './Slider';

const Hero = () => {
  return (
    <div>
      <div className="fixed hidden md:flex">
        <img
          src="/image/Design.png"
          alt="Hero Image"
          className="w-[320px] h-auto fixed right-0"
        />
      </div>
      <div className="relative">

        <Navbar />
        <div className="p-2 sm:p-6 lg:p-12 w-full flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0 mt-12 md:mt-2 mb-4">
          <div className="flex flex-col md:w-1/2 sm:px-8 md:px-0 items-center text-center md:text-left md:items-start ">
            <span className="lg:text-[2.8rem] sm:text-3xl text-2xl font-semibold pb-2 lg:pb-4 lg:leading-[52px]">Empower your product
              management journey</span>
            <span className="lg:text-xl text-md md:w-4/5 pb-2 lg:pb-4">Unlock Your Potential with Expert-Led Learning and Community Support</span>
            <span className="pb-6 inline-flex text-md items-center gap-4 px-2"><span className="text-[var(--golden)] inline-flex items-center gap-1">4.8 <FaRegStar /> </span>500+ Student reviews</span>
            <button className="lg:mb-4 mb-2 lg:text-lg p-2 md:p-4 w-4/5 rounded-[35px] border-[var(--golden)] border">Book a 1:1 mentor call</button>
            <button className="text-black lg:text-lg font-semibold p-2 md:p-4 w-4/5 rounded-[35px] bg-[var(--golden)] flex justify-center items-center gap-2">Get Started <FaArrowRight /></button>
          </div>
          <div className="bg-black w-full md:w-1/2">
            <Slider />
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between gap-12 items-center py-8 px-12">
          <div className="flex justify-center gap-2 w-[240px] items-center">
            <MdGroups size={42} />
            <div className="flex flex-col gap-0">
              <span className="text-[var(--golden)]">2000+ Members</span>
              <span className="text-sm lg:text-lg">ALREADY PLACED</span>
            </div>
          </div>
          <div className="flex justify-center gap-2 w-[240px] items-center">
            <MdCurrencyRupee size={42} />
            <div className="flex flex-col gap-0">
              <span className="text-[var(--golden)]">46.7 LPA</span>
              <span className="text-sm">HIGHEST PACKAGE</span>
            </div>
          </div>
          <div className="flex justify-center gap-2 w-[240px] items-center">
            <FaMoneyBillWave size={42} />
            <div className="flex flex-col gap-0">
              <span className="text-[var(--golden)]">4.5x Increment</span>
              <span className="text-sm">AVERAGE CTC</span>
            </div>
          </div>
          <div className="flex justify-center gap-2 w-[240px] items-center">
            <PiCertificateBold size={42} />
            <div className="flex flex-col gap-0">
              <span className="text-[var(--golden)]">70% Certificate</span>
              <span className="text-sm">COMPLETION</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Hero;
