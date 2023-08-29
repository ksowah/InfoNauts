/* eslint-disable @next/next/no-img-element */

import React from "react";
import {motion} from "framer-motion";

const Partners = () => {
  return (
    <div className="w-full bg-white min-h-[30vh] items-center gap-y-3 justify-center flex flex-col relative py-[3rem]">
      <h1 className="font-bold text-4xl">Our Partners</h1>
      <p className="px-2">
        We work with the best in the industry to bring you the best experience
      </p>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="w-full grid grid-cols-2 md:grid-cols-5 gap-5"
      >
        <div className="flex items-center justify-center">
          <img
            src="/assets/p1.png"
            alt="partner"
            className="w-20 md:w-40 h-20 md:h-40 object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/assets/p2.jpg"
            alt="partner"
            className="w-10 md:w-40 h-10 md:h-28 object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/assets/p3.png"
            alt="partner"
            className="w-20 md:w-40 h-20 md:h-40 object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/assets/p4.png"
            alt="partner"
            className="w-20 md:w-40 h-20 md:h-40 object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/assets/p5.svg"
            alt="partner"
            className="w-20 md:w-40 h-20 md:h-40 object-contain"
          />
        </div>
      </motion.div>
      <div className="mb-28 w-full md:w-[50%] grid gap-y-4 grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-xl flex gap-x-2 items-center justify-center">
            1420 <span className="text-active">+</span>
          </p>
          <p>Partners</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-xl flex gap-x-2 items-center justify-center">
            102 <span className="text-active">+</span>
          </p>
          <p>Awards</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-xl flex gap-x-2 items-center justify-center">
            5352 <span className="text-active">+</span>
          </p>
          <p>Satistfied Customers</p>
        </div>
      </div>
      <div className="absolute -bottom-10 w-full md:w-[60%] rounded-xl min-h-[3rem] md:min-h-[5rem] bg-active flex gap-y-3 md:gap-y-0 px-3 py-3 flex-col md:flex-row">
        <div className="w-full md:w-1/2 text-white">
          <h1 className="font-bold ">Got any questions for us?</h1>
          <p>Kindly leave your email for more info</p>
        </div>
        <div className="flex items-center justify-center bg-white rounded-lg w-full md:w-1/2 px-3 py-1 md:py-0 gap-x-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-full bg-transparent outline-none"
          />
          <button className="bg-active text-white px-4 py-2 rounded-lg text-base ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
