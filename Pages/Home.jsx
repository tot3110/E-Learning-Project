import React from 'react';
import pic2 from '../src/assets/pic2.png';
import pic1 from '../src/assets/pic1.png';
import vector from '../src/assets/Vector.png';
import { FiSearch } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="pt-10 relative w-full">
      
      <div className="relative w-full max-w-6xl mx-auto">
        <img src={pic2} alt="" className="w-full h-auto max-h-[300px] object-cover rounded-4xl" />
        <img
          src={pic1}
          alt=""
          className="absolute top-5 left-5 md:top-0 md:left-20 w-48 sm:w-72 md:w-[400px] h-auto"
        />

        
        <div className="absolute top-5 right-4 sm:top-20 sm:right-10 md:top-24 md:right-32 text-center">
          <p className="font-bold text-2xl sm:text-3xl md:text-5xl text-white leading-snug">
            BEST COURSES <br /> FOR YOU!
          </p>
          <button className="mt-4 md:px-5 px-3 py-2 rounded-full font-medium shadow-md bg-[#6E415E] text-white">
            Explore More
          </button>
        </div>
      </div>

      
      <div className="flex justify-center items-center gap-5 mt-10 px-4">
        
        <button className="bg-[#6E415E] p-3 rounded-2xl">
          <img src={vector} className="h-6 w-6" />
        </button>

        <div className="relative w-full max-w-md">
          <FiSearch className="text-[#7a2b5f] absolute top-3.5 left-4 text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="text-[#7a2b5f] border border-gray-300 rounded-full bg-white py-2 w-full pl-12 pr-4 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
